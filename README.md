# My Personal Portfolio

## Overview

This is a personal portfolio website showcasing my skills, projects, and experience as a software developer. Built with React, this portfolio is designed to be responsive, visually appealing, and easy to navigate, providing a comprehensive overview of my work.

## Features

- **Responsive Design**: Optimized for various screen sizes, from mobile devices to large desktops.
- **Interactive Navigation**: Smooth scrolling and a responsive mobile menu for easy access to different sections.
- **Dynamic Content**: Sections for Hero, About, Skills, Projects, Contact, and Footer.
- **Project Showcase**: Detailed cards for each project, including descriptions, tech stacks, and links.
- **Contact Form**: A functional contact form integrated with Firebase for seamless communication.
- **Social Media Integration**: Links to my GitHub, LinkedIn, and Twitter profiles.
- **Modern UI/UX**: Clean, modern design with subtle animations and hover effects.

## Technologies Used

- **Frontend**: React.js, HTML5, CSS3
- **Styling**: Custom CSS for a unique and modern look.
- **Icons**: React Icons for various UI elements.
- **Backend (for Contact Form)**: Firebase (Firestore for data storage).
- **Build Tool**: Vite

## Setup and Installation

To get a local copy up and running, follow these simple steps:

### Prerequisites

- Node.js (v14 or higher)
- npm or Yarn

### Installation

1.  **Clone the repository**:
    ```bash
git clone https://github.com/yourusername/Portfolio.git
cd Portfolio
```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Firebase (for Contact Form)**:
    - Create a new project in [Firebase Console](https://console.firebase.google.com/).
    - Set up Firestore Database.
    - Obtain your Firebase configuration details.
    - Create a `.env` file in the root directory of the project and add your Firebase credentials:

    ```
    VITE_FIREBASE_API_KEY="YOUR_API_KEY"
    VITE_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
    VITE_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
    VITE_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
    VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
    VITE_FIREBASE_APP_ID="YOUR_APP_ID"
    VITE_FIREBASE_MEASUREMENT_ID="YOUR_MEASUREMENT_ID"
    ```
    Replace the placeholder values with your actual Firebase configuration.

4.  **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

    The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

## Usage

Navigate through the different sections using the navbar. Explore my projects, learn about my skills, and use the contact form to get in touch. The portfolio is designed to be intuitive and provide a seamless user experience.

## Contact

- **Prashant Jain**
- **GitHub**: [https://github.com/prashantjain2718](https://github.com/prashantjain2718)
- **LinkedIn**: [https://linkedin.com/in/prashant-jain72](https://linkedin.com/in/prashant-jain72)
- **Email**: prashantjain.code@gmail.com

Feel free to reach out for collaborations, opportunities, or just to say hello!
