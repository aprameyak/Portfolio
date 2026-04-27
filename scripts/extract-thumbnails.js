const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const videosDir = path.join(__dirname, '..', 'public', 'videos');
const thumbnailsDir = path.join(__dirname, '..', 'public', 'thumbnails');

// Create thumbnails directory if it doesn't exist
if (!fs.existsSync(thumbnailsDir)) {
  fs.mkdirSync(thumbnailsDir, { recursive: true });
  console.log('Created thumbnails directory');
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

videoFiles.forEach((videoFile, index) => {
  const videoPath = path.join(videosDir, videoFile);
  const thumbnailName = path.basename(videoFile, path.extname(videoFile)) + '.jpg';
  const thumbnailPath = path.join(thumbnailsDir, thumbnailName);
  
  try {
    console.log(`[${index + 1}/${videoFiles.length}] Extracting thumbnail from ${videoFile}...`);
    
    // Extract first frame using ffmpeg
    // -ss 0: seek to 0 seconds (first frame)
    // -i: input file
    // -vframes 1: extract only 1 frame
    // -q:v 2: high quality JPEG (scale 2-31, lower is better quality)
    // -y: overwrite output file if it exists
    execSync(
      `ffmpeg -ss 0 -i "${videoPath}" -vframes 1 -q:v 2 -y "${thumbnailPath}"`,
      { stdio: 'inherit' }
    );
    
    console.log(`✓ Created ${thumbnailName}`);
  } catch (error) {
    console.error(`✗ Error processing ${videoFile}:`, error.message);
    console.error('Make sure ffmpeg is installed and available in your PATH');
    console.error('Install ffmpeg: https://ffmpeg.org/download.html');
  }
});

console.log('\n✓ Thumbnail extraction complete!');
console.log(`Thumbnails saved to: ${thumbnailsDir}`);
