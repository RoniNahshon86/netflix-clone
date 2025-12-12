# Netflix Clone

A full featured Netflix clone built with React, featuring real movie data, user authentication, and AI powered movie recommendations.

## About

This project is a functional clone of Netflix's user interface and core features. It was developed as a final assignment for **STEP IT Academy, Chisinau** to demonstrate proficiency in modern web development technologies and practices.

**Note:** This project is for educational purposes only. All movie data is sourced from TMDB API. No copyright infringement is intended.

## Features

**Authentication**

- User registration and login via Firebase Authentication
- Protected routes for authenticated content
- Persistent sessions

**Browse Experience**

- Dynamic homepage with featured movie hero section
- Multiple content categories: Popular, Top Rated, Now Playing, Upcoming
- Horizontal carousels with smooth navigation
- Hover cards with movie previews

**Movie Details**

- Full movie information including cast, crew, and metadata
- Embedded YouTube trailers
- Related movie suggestions

**AI Movie Recommendations**

- Integrated ChatGPT powered recommendation engine
- Natural language movie search
- Personalized suggestions based on user preferences

**Video Playback**

- Full screen trailer playback
- Keyboard controls (ESC to close)

## Tech Stack

- **Frontend:** React 19, React Router 7
- **Styling:** Tailwind CSS 4
- **Build Tool:** Vite 7
- **Authentication:** Firebase
- **Movie Data:** TMDB API
- **AI Integration:** OpenAI API
- **Carousel:** Splide.js

## Project Structure

```
src/
├── assets/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   └── utilities/
│       ├── api.js          # TMDB API calls
│       ├── ai.js           # OpenAI integration
│       ├── functions.jsx   # Helper functions
│       └── firebase/       # Firebase config
├── components/
│   ├── auth/               # Authentication components
│   ├── landing/            # Landing page sections
│   ├── layout/             # Header, Footer, Container
│   ├── media/              # Movie cards, listings, details
│   └── ui/                 # Reusable UI components
├── context/
│   └── AuthContext.jsx     # Authentication state
├── layouts/
│   └── MainLayout.jsx      # App layout wrapper
├── pages/
│   ├── BrowsePage.jsx      # Main content page
│   ├── LandingPage.jsx     # Home page
│   ├── LoginPage.jsx       # Sign in
│   ├── SignupPage.jsx      # Registration
│   ├── MediaDetailsPage.jsx
│   ├── WatchPage.jsx
│   └── NotFoundPage.jsx
└── router.jsx              # Route definitions
```

## Setup

1. Clone the repository

```bash
git clone https://github.com/yourusername/netflix-clone.git
cd netflix-clone
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file based on `.env.example`

```
VITE_TMDB_API_TOKEN=your_tmdb_token
VITE_OPENAI_API_KEY=your_openai_key
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_OPENAI_API_KEY=your_openai_api_token

```

4. Run the development server

```bash
npm run dev
```

## API Keys

**TMDB API**

- Register at [themoviedb.org](https://www.themoviedb.org/)
- Generate an API Read Access Token in your account settings

**Firebase**

- Create a project at [Firebase Console](https://console.firebase.google.com/)
- Enable Email/Password authentication
- Copy your web app configuration

**OpenAI**

- Get an API key from [OpenAI Platform](https://platform.openai.com/)

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Disclaimer

This project was created for educational purposes as part of the curriculum at STEP IT Academy, Chisinau. It is not affiliated with Netflix, Inc. in any way.

All movie data, images, and trailers are provided by The Movie Database (TMDB) API. This product uses the TMDB API but is not endorsed or certified by TMDB.

## Author

**Ruslan Roni Nahshonov**

Website: [roni@rondigital.io](mailto:roni@rondigital.io)

---

STEP IT Academy, Chisinau - Final Project Submission
