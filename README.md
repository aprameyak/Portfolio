# Aprameya Kannan Portfolio

A modern, responsive portfolio website showcasing my experience as an aspiring developer.

## Features

- **Dynamic Project Showcase**: Automatically fetches and displays GitHub projects using GitHub API
- **AI-Enhanced Content**: Uses OpenAI GPT to generate concise project descriptions and tech stacks
- **Responsive Design**: Clean, modern interface that works across all devices
- **Automated Updates**: Projects section automatically updates when new repositories are added

## Technical Architecture

### Frontend
- Pure HTML/CSS for optimal performance
- Vanilla JavaScript for dynamic content
- Marked.js for markdown processing

### Infrastructure
- **Hosting**: AWS S3 Static Website Hosting
- **CI/CD**: GitHub Actions for automated deployment
- **APIs**: 
  - GitHub API for repository data
  - OpenAI API for content enhancement

### Security
- AWS IAM role-based access
- Secure credential management via GitHub Secrets
- API key rotation and best practices
