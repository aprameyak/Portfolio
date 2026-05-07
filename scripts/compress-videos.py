#!/usr/bin/env python3
"""
Compress videos for web optimization.
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
compressed_dir = project_root / 'public' / 'videos-compressed'

# Create compressed videos directory if it doesn't exist
compressed_dir.mkdir(parents=True, exist_ok=True)
print(f'Created compressed videos directory: {compressed_dir}')

# Get all video files
video_files = [f for f in videos_dir.iterdir() 
               if f.suffix.lower() in ['.mp4', '.mov', '.webm', '.avi']]

if not video_files:
    print(f'No video files found in {videos_dir}')
    sys.exit(0)

print(f'Found {len(video_files)} video file(s)')
print('Starting compression...\n')

# Compression settings for web optimization
compression_settings = {
    'crf': 28,           # Quality (18-28 is good for web, 28 is smaller file)
    'preset': 'slow',    # Compression speed vs file size
    'max_width': 1280,   # Max width in pixels
    'audio_bitrate': '96k',  # Audio bitrate
}

total_original = 0
total_compressed = 0

for index, video_file in enumerate(video_files, 1):
    output_name = video_file.stem + '.mp4'
    output_path = compressed_dir / output_name
    
    # Get original file size
    original_size = video_file.stat().st_size
    original_size_mb = original_size / (1024 * 1024)
    total_original += original_size
    
    try:
        print(f'[{index}/{len(video_files)}] Compressing {video_file.name}...')
        print(f'  Original size: {original_size_mb:.2f} MB')
        
        # Compress video using ffmpeg
        subprocess.run([
            'ffmpeg',
            '-i', str(video_file),
            '-c:v', 'libx264',
            '-crf', str(compression_settings['crf']),
            '-preset', compression_settings['preset'],
            '-vf', f"scale='min({compression_settings['max_width']},iw)':-2",
            '-c:a', 'aac',
            '-b:a', compression_settings['audio_bitrate'],
            '-movflags', '+faststart',
            '-pix_fmt', 'yuv420p',
            '-y',
            str(output_path)
        ], check=True, capture_output=False)
        
        # Get compressed file size
        compressed_size = output_path.stat().st_size
        compressed_size_mb = compressed_size / (1024 * 1024)
        savings_percent = (1 - compressed_size / original_size) * 100
        total_compressed += compressed_size
        
        print(f'  ✓ Compressed size: {compressed_size_mb:.2f} MB ({savings_percent:.1f}% reduction)')
        print()
    except subprocess.CalledProcessError as e:
        print(f'✗ Error compressing {video_file.name}')
        print('Make sure ffmpeg is installed and available in your PATH')
        print('Install ffmpeg: https://ffmpeg.org/download.html')
    except FileNotFoundError:
        print('✗ ffmpeg not found. Please install ffmpeg first.')
        print('Install ffmpeg: https://ffmpeg.org/download.html')
        sys.exit(1)

print('✓ Video compression complete!')
print(f'Compressed videos saved to: {compressed_dir}')

if total_original > 0:
    total_original_mb = total_original / (1024 * 1024)
    total_compressed_mb = total_compressed / (1024 * 1024)
    total_savings = (1 - total_compressed / total_original) * 100
    
    print('\nSummary:')
    print(f'  Original total: {total_original_mb:.2f} MB')
    print(f'  Compressed total: {total_compressed_mb:.2f} MB')
    print(f'  Total savings: {total_savings:.1f}%')
