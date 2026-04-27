const fs = require('fs');
const path = require('path');

const videosDir = path.join(__dirname, '..', 'public', 'videos');

// Get all video files
const videoFiles = fs.readdirSync(videosDir).filter(file => 
  file.endsWith('.mp4') || file.endsWith('.mov') || file.endsWith('.webm') || file.endsWith('.avi')
);

if (videoFiles.length === 0) {
  console.log('No video files found in', videosDir);
  process.exit(0);
}

console.log('Video File Sizes:\n');
console.log('─'.repeat(80));

let totalSize = 0;

videoFiles.forEach((videoFile) => {
  const videoPath = path.join(videosDir, videoFile);
  const stats = fs.statSync(videoPath);
  const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
  const sizeInBytes = stats.size;
  totalSize += stats.size;
  
  console.log(`${videoFile.padEnd(40)} ${sizeInMB.padStart(10)} MB (${sizeInBytes.toLocaleString()} bytes)`);
});

console.log('─'.repeat(80));
const totalMB = (totalSize / (1024 * 1024)).toFixed(2);
const totalGB = (totalSize / (1024 * 1024 * 1024)).toFixed(2);
console.log(`Total: ${totalMB} MB (${totalGB} GB)`);
console.log(`\nNumber of videos: ${videoFiles.length}`);
console.log(`Average size per video: ${(totalSize / videoFiles.length / (1024 * 1024)).toFixed(2)} MB`);
