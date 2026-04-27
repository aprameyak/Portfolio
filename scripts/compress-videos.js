const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videosDir = path.join(__dirname, '..', 'public', 'videos');
const compressedDir = path.join(__dirname, '..', 'public', 'videos-compressed');

// Create compressed videos directory if it doesn't exist
if (!fs.existsSync(compressedDir)) {
  fs.mkdirSync(compressedDir, { recursive: true });
  console.log('Created compressed videos directory');
}

// Get all video files
const videoFiles = fs.readdirSync(videosDir).filter(file => 
  file.endsWith('.mp4') || file.endsWith('.mov') || file.endsWith('.webm')
);

if (videoFiles.length === 0) {
  console.log('No video files found in', videosDir);
  process.exit(0);
}

console.log(`Found ${videoFiles.length} video file(s)`);
console.log('Starting compression...\n');

// Compression settings for web optimization
// -crf 28: Higher compression, good quality for web (scale 0-51, higher = more compression)
// -preset slow: Better compression ratio, takes longer
// -vf scale: Limit resolution to 1280px width, maintain aspect ratio
// -movflags +faststart: Optimize for web streaming
// -pix_fmt yuv420p: Ensure compatibility with all browsers
const compressionSettings = {
  crf: 28,           // Quality (18-28 is good for web, 28 is smaller file)
  preset: 'slow',    // Compression speed vs file size (slower = smaller files)
  maxWidth: 1280,    // Max width in pixels
  audioBitrate: '96k', // Audio bitrate (lower for smaller files)
};

videoFiles.forEach((videoFile, index) => {
  const videoPath = path.join(videosDir, videoFile);
  const outputName = path.basename(videoFile, path.extname(videoFile)) + '.mp4';
  const outputPath = path.join(compressedDir, outputName);
  
  // Get original file size
  const originalStats = fs.statSync(videoPath);
  const originalSizeMB = (originalStats.size / (1024 * 1024)).toFixed(2);
  
  try {
    console.log(`[${index + 1}/${videoFiles.length}] Compressing ${videoFile}...`);
    console.log(`  Original size: ${originalSizeMB} MB`);
    
    // Compress video using ffmpeg
    // -i: input file
    // -c:v libx264: Use H.264 codec
    // -crf: Constant Rate Factor (quality)
    // -preset: Encoding speed preset
    // -vf scale: Video filter to scale down if needed
    // -c:a aac: Audio codec
    // -b:a: Audio bitrate
    // -movflags +faststart: Move metadata to beginning for web streaming
    // -pix_fmt yuv420p: Pixel format for compatibility
    // -y: Overwrite output file
    execSync(
      `ffmpeg -i "${videoPath}" ` +
      `-c:v libx264 ` +
      `-crf ${compressionSettings.crf} ` +
      `-preset ${compressionSettings.preset} ` +
      `-vf "scale='min(${compressionSettings.maxWidth},iw)':-2" ` +
      `-c:a aac ` +
      `-b:a ${compressionSettings.audioBitrate} ` +
      `-movflags +faststart ` +
      `-pix_fmt yuv420p ` +
      `-y "${outputPath}"`,
      { stdio: 'inherit' }
    );
    
    // Get compressed file size
    const compressedStats = fs.statSync(outputPath);
    const compressedSizeMB = (compressedStats.size / (1024 * 1024)).toFixed(2);
    const savingsPercent = ((1 - compressedStats.size / originalStats.size) * 100).toFixed(1);
    
    console.log(`  ✓ Compressed size: ${compressedSizeMB} MB (${savingsPercent}% reduction)`);
    console.log('');
  } catch (error) {
    console.error(`✗ Error compressing ${videoFile}:`, error.message);
    console.error('Make sure ffmpeg is installed and available in your PATH');
    console.error('Install ffmpeg: https://ffmpeg.org/download.html');
  }
});

console.log('✓ Video compression complete!');
console.log(`Compressed videos saved to: ${compressedDir}`);

// Calculate total savings
let totalOriginal = 0;
let totalCompressed = 0;

videoFiles.forEach((videoFile) => {
  const videoPath = path.join(videosDir, videoFile);
  const outputName = path.basename(videoFile, path.extname(videoFile)) + '.mp4';
  const outputPath = path.join(compressedDir, outputName);
  
  if (fs.existsSync(outputPath)) {
    totalOriginal += fs.statSync(videoPath).size;
    totalCompressed += fs.statSync(outputPath).size;
  }
});

if (totalOriginal > 0) {
  const totalOriginalMB = (totalOriginal / (1024 * 1024)).toFixed(2);
  const totalCompressedMB = (totalCompressed / (1024 * 1024)).toFixed(2);
  const totalSavings = ((1 - totalCompressed / totalOriginal) * 100).toFixed(1);
  
  console.log('\nSummary:');
  console.log(`  Original total: ${totalOriginalMB} MB`);
  console.log(`  Compressed total: ${totalCompressedMB} MB`);
  console.log(`  Total savings: ${totalSavings}%`);
}
