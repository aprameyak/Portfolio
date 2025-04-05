# Portfolio

![AWS S3](https://img.shields.io/badge/AWS%20S3-orange?logo=amazon-aws&logoColor=white&style=for-the-badge)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=github-actions&logoColor=white&style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge)
![OpenAI](https://img.shields.io/badge/OpenAI%20API-412991?logo=openai&logoColor=white&style=for-the-badge)
![GitHub API](https://img.shields.io/badge/GitHub%20API-000000?logo=github&logoColor=white&style=for-the-badge)

## About

A **modern, responsive portfolio website** showcasing my experience as an aspiring developer. Built with **pure HTML, CSS, and JavaScript**, featuring **two setups** for deployment.

**Live Demo:** [aprameyak.vercel.app](https://aprameyak.vercel.app/)

## Features

- **Dynamic Project Showcase:** Automatically fetches and displays GitHub projects using the GitHub API *(AWS S3 version)*  
- **AI-Enhanced Content:** Uses OpenAI GPT to generate concise project descriptions and tech stacks *(AWS S3 version)*  
- **Responsive Design:** Clean, modern interface optimized for all devices  
- **Automated Updates:** The projects section updates automatically when new repositories are added *(AWS S3 version)*

## Deployment Setups

### 1. Hardcoded Version (Vercel CI/CD)

- Predefined static portfolio with manually updated content  
- Deployed automatically via **Vercel CI/CD**

### 2. Dynamic Version (AWS S3 + GitHub API + OpenAI API)

- Dynamic fetching of GitHub repositories  
- AI-generated project descriptions and tech stack information  
- Hosted on **AWS S3 Static Website Hosting**  
- Uses **AWS IAM** for secure access  
- Automated deployment via **GitHub Actions**
