Maneet Sharma Photography - Portfolio Website
A modern, full-stack portfolio website built for professional photographer Maneet Sharma. This project features a stunning, publicly accessible gallery and a secure, private admin dashboard for managing the portfolio's content.

✨ Live Demo: https://maneet.vercel.app/ ✨
📸 Project Preview
<img width="1867" height="950" alt="image" src="https://github.com/user-attachments/assets/407af7b3-0c4b-41bd-911c-ae4c8450caf4" />


🚀 Features
Dynamic Photo Gallery: A beautiful, responsive grid to showcase the photographer's best work.

Secure Admin Dashboard: A private route at /admin/login allows the photographer to log in.

Content Management: Once logged in, the admin can easily upload new images to the gallery and delete existing ones.

Modern UI/UX: Built with a focus on clean aesthetics, smooth animations, and a great user experience on all devices.

Full-Stack Functionality: Uses Supabase for the backend, handling user authentication and file storage securely.

Smooth Animations: Integrated with Framer Motion for elegant page transitions and on-scroll reveal animations.

🛠️ Tech Stack
This project was built from the ground up using a modern, full-stack tech stack:

Framework: React with Vite

Language: TypeScript

Styling: Tailwind CSS

UI Components: shadcn/ui

Animations: Framer Motion

Backend & Database: Supabase (Authentication & Storage)

Deployment: Vercel

⚙️ Getting Started
To run this project locally on your machine, follow these steps:

1. Prerequisites
Make sure you have Node.js (version 18 or higher) and npm installed.

2. Clone the Repository
Bash

git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
3. Install Dependencies
Bash

npm install
4. Set Up Environment Variables
This project requires a connection to a Supabase project for the backend functionality.

Create a file named .env in the root of your project.

Copy the contents of .env.example (if you have one) or add the following variables:

Code snippet

VITE_SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL"
VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
You can get these keys from your Supabase project's Settings > API page.

5. Run the Development Server
Bash

npm run dev
Open http://localhost:5173 (or whatever port is shown in your terminal) in your browser to see the application.

🌐 Deployment
This project is deployed on Vercel. Any new commits pushed to the main branch will automatically trigger a new deployment.
