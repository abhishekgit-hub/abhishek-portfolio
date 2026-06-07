---
id: how-i-built-my-ai-portfolio
title: How I Built an AI-Powered Developer Portfolio from Nepal
category: General
excerpt: A look behind the scenes of building a modern, high-performance
  portfolio website integrated with a custom AI chat widget, decoupled CMS, and
  automated content delivery.
---
Building a personal portfolio in 2026 means going beyond a static business card website. As a 4th-year Computer Engineering student, I wanted my portfolio to reflect my actual passion: crafting intelligent software and automation tools. 



In this post, I will break down the exact tech stack and architectural decisions behind the portfolio you are looking at right now.



\## The Architectural Design



To ensure maximum performance and minimal hosting overhead, I opted for a decoupled architecture that keeps the presentation layer entirely separate from the content management and background AI microservices.

\## 1. The Frontend (The Presentation Layer)

Instead of relying on heavy, monolithic frameworks, the frontend is built entirely using \*\*semantic HTML5\*\*, optimized \*\*CSS Custom Properties (Variables)\*\*, and lightweight asynchronous \*\*Vanilla JavaScript\*\*. 



\* \*\*Performance:\** Blazing fast load times and zero framework overhead.

\* \*\*Design Philosophy:\** Clean, dark-mode terminal aesthetics utilizing fluid typography via CSS \`clamp()\` rules and modular layout architecture with modern CSS Grid.



\## 2. Decoupled Content Management (Decap CMS)

To update my projects and blog posts without touching a single line of raw code, I integrated \*\*Decap CMS\*\* (formerly Netlify CMS). 

\* It operates entirely on a Git-gateway workflow. 

\* Whenever I publish content from my \`/admin\` dashboard, the CMS commits a structured JSON dataset directly to my GitHub repository, triggering a fast, automated static rebuild.



\## 3. The Intelligent Edge (EmbedAI Integration)

The standout feature of this setup is the custom AI chat widget processing logic embedded directly within the application shell. 



Using an asynchronous script bridge connected to an external service (\`EmbedAI\`), the custom client agent acts as an automated assistant. It parses user queries locally and safely streams relevant contextual responses regarding my technical background, academic roadmap, and engineering skills.



\## What's Next?

Now that the baseline infrastructure is seamlessly deployed with custom domain integration, my next step is building custom web scraping agents to dynamically sync my local project schemas directly with my GitHub API profile activity.



Stay tuned for the next technical teardown!
