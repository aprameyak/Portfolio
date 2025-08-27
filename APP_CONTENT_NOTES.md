## Previous App Content (snapshot before reset)

This file captures the information from the previous portfolio implementation for reuse later.

### About
- Studying Computer Science at the University of Maryland
- Currently building apps at Lockheed Martin
- Profile image URL: `https://aprameyak-portfolio-assets.s3.us-east-1.amazonaws.com/profilepic.jpg`
- Links:
  - GitHub: `https://github.com/aprameyak`
  - LinkedIn: `https://linkedin.com/in/aprameyak`

### Contact
- Email link displayed: `aprameyakannan@gmail.com`
- Location displayed: `Plainsboro, New Jersey`
- Resume modal collected:
  - email (required)
  - message (optional)

API (removed): `app/api/contact/route.ts`
- Used AWS SES via environment variables:
  - `AWS_REGION`
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
  - `VERIFIED_SENDER_EMAIL` (sender)

Testing endpoint (removed): `app/api/test-env/route.ts`
- Returned flags revealing presence of the above env vars.

### Experience
- Software Engineer Intern — Lockheed Martin
  - Building enterprise applications for team health dashboards and sprint planning
  - Tech: Next.js, Python, SQL
- Software Engineer — Warriors Legacy Care
  - Developed mobile applications for veterans' resource access and support
  - Tech: Python, React Native, PostgreSQL
- Climate Computing Researcher — First Year Innovation and Research Experience
  - Researched climate data analysis and computational methods
  - Tech: Data Analysis, Linux, High Performance Computing
- Software Engineer — SynTag
  - Built AI-powered virtual receptionist and customer service solutions
  - Tech: FastAPI, TailwindCSS, TypeScript
- Teaching Assistant — CodePath
  - Mastered data structures and algorithms for software development.
  - Tech: Python, Data Structures, Algorithms
- Software Engineer — Minvest Finance
  - Architected cloud infrastructure for a Gen Z investing platform
  - Tech: AWS, Docker, React.js
- Software Engineer — Headstarter AI
  - Developed AI-powered applications with LLM integration
  - Tech: Firebase, LLMs, JavaScript

### Projects (Featured)
- Play2Learn
  - GitHub: `https://github.com/aprameyak/Play2Learn`
  - Demo: `https://play2learn-ten.vercel.app/`
  - Description: Educational gaming with AI-personalized content (GPT-4)
  - Tech: Next.js, TypeScript, Node.js, AWS Lambda, AWS API Gateway, OpenAI GPT-4, Firebase Auth, TailwindCSS
- DataVision
  - GitHub: `https://github.com/aprameyak/DataVision`
  - Demo: `https://www.data-vision.tech`
  - Description: AI platform for automated data analysis and visualization (LangGraph, Gemini)
  - Tech: Python, Flask, LangGraph, Gemini API, Pandas, SciPy, Matplotlib, Seaborn, TypeScript, Next.js, TailwindCSS, Gunicorn, Nginx, Azure
- GitaGPT
  - GitHub: `https://github.com/aprameyak/GitaGPT`
  - Demo: `https://gita-gpt-two.vercel.app/`
  - Description: RAG chatbot answering Bhagavad Gita questions
  - Tech: Python, FastAPI, Next.js, FAISS, OpenAI API, Vercel, Render
- ResuMaker
  - GitHub: `https://github.com/aprameyak/ResuMaker`
  - Demo: `https://resumaker-tan.vercel.app/`
  - Description: AI-powered resume builder with GPT assistance
  - Tech: Next.js, TypeScript, Tailwind CSS, OpenAI API, Vercel, API Routes
- GitRecap
  - GitHub: `https://github.com/aprameyak/GitRecap`
  - Description: GitHub analytics dashboard with AI insights
  - Tech: Next.js, Flask, Python, Chart.js, GitHub API, TextBlob, TailwindCSS, React Calendar Heatmap
- FitSync
  - GitHub: `https://github.com/aprameyak/FitSync`
  - Description: Fitness app with AI-generated plans and tracking
  - Tech: TypeScript, Next.js, Node.js, Express.js, MongoDB, OpenAI API

### Skills
- Programming Languages: Python, JavaScript, TypeScript, Java, SQL, Bash, HTML/CSS, JSON, XML
- Databases: DynamoDB, MongoDB, PostgreSQL, SQLite, Supabase, Firebase
- Frameworks: React.js, Next.js, Node.js, Express.js, Flask, FastAPI, SpringBoot, LangChain, Tailwind CSS, JUnit, Jest, Pytest
- DevOps: AWS, Docker, Git, Azure, GCP, GitHub, GitLab, Vercel, Render, CI/CD, Postman
- Libraries & Tools: NumPy, Pandas, Scikit-learn, Matplotlib, Seaborn, BeautifulSoup, Selenium, Mongoose, Clerk
- Project Management: Agile, Scrum, Kanban, SAFe, Jira, Confluence, Trello, Linear, Notion

### SEO / Metadata (previous)
- Site title: "Aprameya Kannan | Full Stack Developer & Cloud Architect"
- Description: Full Stack Developer and AWS Certified Solutions Architect specializing in cloud-native applications, AI/ML, and modern web development. Building enterprise solutions at Lockheed Martin.
- Keywords included (subset): Full Stack Developer, Software Engineer, Cloud Architect, AWS, TypeScript, Next.js, Portfolio
- Open Graph/Twitter images: `/og-image.png`
- Canonical: `/`
- Metadata base URL used: `https://aprameyak.vercel.app`

### Removed Components (for reference)
- UI: `Header`, `LandingPage`, `About`, `Projects`, `Experience`, `Skills`, `Contact`, `Footer`, `ScrollToTop`, `LoadingState`, `Mermaid`, `NavLink`, `Project`, `ProjectFilters`, `Stars`, `AnimatedBackground`, `Hero3D`
- Types: `app/types/maath.d.ts`
- API routes: `app/api/contact/route.ts`, `app/api/test-env/route.ts`


