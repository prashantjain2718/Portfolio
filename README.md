# Personal Portfolio

A modern, responsive portfolio website built with React.js, designed to showcase my skills, projects, and professional experience as a software developer.

---

## ✨ Features

- **Responsive Design:** Fluid layouts optimized for phones, tablets, and desktops.
- **Interactive Navigation:** Smooth scrolling and a mobile-friendly menu for quick section access.
- **Dynamic Sections:** Hero, About, Skills, Projects, Contact, and Footer.
- **Project Showcase:** Cards for each project with descriptions, tech stacks, and live/demo links.
- **Contact Form:** Integrated with Firebase, enabling direct messaging.
- **Social Profiles:** Quick links to GitHub, LinkedIn, and Twitter.
- **Modern UI/UX:** Clean look, subtle animations, and engaging hover effects.

---

## 🚀 Technologies

- **Frontend:** React.js, HTML5, CSS3
- **Styling:** Custom CSS
- **Icons:** React Icons
- **Backend (Contact Form):** Firebase (Firestore)
- **Build Tool:** Vite

---

## 🛠 Setup

Get the portfolio running locally with these steps:

### Prerequisites

- Node.js (version 14+)
- npm or Yarn

### Installation

1. **Clone the repo:**
    ```
    git clone https://github.com/yourusername/Portfolio.git
    cd Portfolio
    ```

2. **Install dependencies:**
    ```
    npm install
    # or
    yarn install
    ```

3. **Configure Firebase (Contact Form):**
    - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
    - Enable Firestore Database
    - Obtain your Firebase config
    - Create a `.env` file in the root directory and add:
      ```
      VITE_FIREBASE_API_KEY="YOUR_API_KEY"
      VITE_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
      VITE_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
      VITE_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
      VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
      VITE_FIREBASE_APP_ID="YOUR_APP_ID"
      VITE_FIREBASE_MEASUREMENT_ID="YOUR_MEASUREMENT_ID"
      ```
    - Replace placeholders with your actual config

4. **Start the development server:**
    ```
    npm run dev
    # or
    yarn dev
    ```
    Access the site at `http://localhost:5173` (or the port shown in terminal).

---

## 🖱 Usage

- Browse sections via the navbar.
- Explore showcased projects and skill highlights.
- Use the contact form to connect with me directly via Firebase.

---

## 📬 Contact

- **Prashant Jain**
- **GitHub:** https://github.com/prashantjain2718
- **LinkedIn:** https://linkedin.com/in/prashant-jain72
- **Email:** prashantjain.code@gmail.com

Feel free to reach out for collaborations, opportunities, or just a conversation!
