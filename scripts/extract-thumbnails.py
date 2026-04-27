#!/usr/bin/env python3
"""
Alternative Python script to extract first frame from videos.
Requires ffmpeg to be installed.
"""
import os
import subprocess
import sys
from pathlib import Path

# Get script directory and project root
script_dir = Path(__file__).parent
project_root = script_dir.parent
videos_dir = project_root / 'public' / 'videos'
thumbnails_dir = project_root / 'public' / 'thumbnails'

# Create thumbnails directory if it doesn't exist
thumbnails_dir.mkdir(parents=True, exist_ok=True)
print(f'Created thumbnails directory: {thumbnails_dir}')

# Get all video files
video_files = [f for f in videos_dir.iterdir() 
               if f.suffix.lower() in ['.mp4', '.mov', '.webm', '.avi']]

if not video_files:
    print(f'No video files found in {videos_dir}')
    sys.exit(0)

print(f'Found {len(video_files)} video file(s)')

for index, video_file in enumerate(video_files, 1):
    thumbnail_name = video_file.stem + '.jpg'
    thumbnail_path = thumbnails_dir / thumbnail_name
    
    try:
        print(f'[{index}/{len(video_files)}] Extracting thumbnail from {video_file.name}...')
        
        # Extract first frame using ffmpeg
        subprocess.run([
            'ffmpeg',
            '-ss', '0',           # Seek to 0 seconds (first frame)
            '-i', str(video_file), # Input file
            '-vframes', '1',       # Extract only 1 frame
            '-q:v', '2',           # High quality JPEG (scale 2-31, lower is better)
            '-y',                  # Overwrite output file
            str(thumbnail_path)
        ], check=True, capture_output=False)
        
        print(f'✓ Created {thumbnail_name}')
    except subprocess.CalledProcessError as e:
        print(f'✗ Error processing {video_file.name}')
        print('Make sure ffmpeg is installed and available in your PATH')
        print('Install ffmpeg: https://ffmpeg.org/download.html')
    except FileNotFoundError:
        print('✗ ffmpeg not found. Please install ffmpeg first.')
        print('Install ffmpeg: https://ffmpeg.org/download.html')
        sys.exit(1)

print(f'\n✓ Thumbnail extraction complete!')
print(f'Thumbnails saved to: {thumbnails_dir}')
