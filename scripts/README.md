# Video Optimization Scripts

Scripts to optimize videos for web use by extracting thumbnails, checking sizes, and compressing videos.

## Prerequisites

You need to have **ffmpeg** installed on your system:

- **Windows**: Download from [ffmpeg.org](https://ffmpeg.org/download.html) or use `winget install ffmpeg`
- **macOS**: `brew install ffmpeg`
- **Linux**: `sudo apt install ffmpeg` (Ubuntu/Debian) or `sudo yum install ffmpeg` (RHEL/CentOS)

## Scripts

### 1. Check Video Sizes
View the file size of all videos in `public/videos/`:

```bash
npm run check-video-sizes
```

Shows individual file sizes and total size.

### 2. Extract Thumbnails
Extract the first frame from all videos and save as JPEG thumbnails:

```bash
npm run extract-thumbnails
```

**Output**: `public/thumbnails/[VideoName].jpg`

### 3. Compress Videos
Compress videos for web optimization (keeps originals intact):

```bash
npm run compress-videos
```

**Output**: `public/videos-compressed/[VideoName].mp4`

**Compression Settings**:
- CRF 28 (good quality, smaller file size)
- Max width: 1280px (maintains aspect ratio)
- Audio: 96k bitrate
- Optimized for web streaming (faststart flag)

## Workflow

1. **Check current sizes**: `npm run check-video-sizes`
2. **Compress videos**: `npm run compress-videos` (creates compressed versions)
3. **Extract thumbnails**: `npm run extract-thumbnails` (for poster images)
4. The website automatically uses compressed videos from `videos-compressed/` folder

## Notes

- Original videos in `public/videos/` are preserved
- Compressed videos are saved to `public/videos-compressed/`
- Thumbnails are saved to `public/thumbnails/`
- All scripts create directories automatically if they don't exist
- Existing files will be overwritten when running scripts
