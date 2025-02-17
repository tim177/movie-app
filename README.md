# 📌 **Project README Template**

---

# 🎬 **Movie App**

_A React-based movie exploration app with Firebase authentication, Firestore integration, and a dynamic UI powered by Mantine and NextUI._

![Movie App Screenshot](https://raw.githubusercontent.com/tim177/movie-app/refs/heads/main/src/assets/HomePage.png)

---

## 📖 **Table of Contents**

- [🚀 Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📦 Installation](#-installation)
- [⚙️ Configuration](#️-configuration)
- [🔧 Usage](#-usage)
- [📂 Project Structure](#-project-structure)
- [📸 Screenshots](#-screenshots)
- [📣 API References](#-api-references)
- [🎯 Future Enhancements](#-future-enhancements)
- [📝 License](#-license)
- [📩 Contact](#-contact)

---

## 🚀 **Features**

✔️ **Movie Details Page** – View full details, ratings, summary.  
✔️ **Carousel & Hero Section** – Dynamic movie carousels with a featured section.  
✔️ **Authentication** – Firebase authentication with role-based access control.  
✔️ **Firestore Integration** – Store user preferences, watchlists, and favorites.  
✔️ **Dark Mode** – Customizable theme switching.  
✔️ **Mantine Components** – Modern UI elements from Mantine & NextUI.

---

## 🛠 **Tech Stack**

### 📌 **Frontend:**

- **React.js** – UI library
- **Mantine v6** – UI components
- **React Query** – Data fetching & caching
- **TypeScript** – Strict type checking
- **Zustand** – State management
- **Framer Motion** – Animations

### 🛢 **Backend:**

- **Firebase Authentication** – Secure login
- **Firestore Database** – NoSQL data storage

---

## 📦 **Installation**

### 🔹 **Prerequisites**

Before you begin, ensure you have the following installed:

- **Node.js (v20+)** ✅
- **Yarn** or **npm** ✅
- **Firebase CLI** ✅

### 🔹 **Clone the Repository**

```sh
git clone https://github.com/tim177/movie-app.git
cd movie-app
```

### 🔹 **Install Dependencies**

```sh
yarn install
# OR
npm install
```

### 🔹 **Run the App**

```sh
yarn dev
# OR
npm run dev
```

Your app should now be running at **http://localhost:3000** 🎉

---

## ⚙️ **Configuration**

### 🔹 **Set Up Firebase**

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable **Authentication** (Email & Password).
3. Set up **Firestore** with required collections.
4. Copy your Firebase config and add it to `.env.local`:

```ini
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

---

## 🔧 **Usage**

### 🔹 **Viewing Movie Details**

- Click on any movie to see its full details, including rating, description, and trailers.

### 🔹 **Authentication**

- Users can sign up, log in, and manage their watchlists.

---

## 📂 **Project Structure**

```
📦 movie-app
 ┣ 📂 src
 ┃ ┣ 📂 api             # Functions for API requests and data fetching
 ┃ ┣ 📂 assets          # Static assets like images, icons, and fonts
 ┃ ┣ 📂 components      # Reusable UI components (buttons, cards, modals, etc.)
 ┃ ┣ 📂 config          # Configuration files (e.g., app settings, API base URLs)
 ┃ ┣ 📂 constants       # Global constants and enums used throughout the app
 ┃ ┣ 📂 contexts        # React Context API implementations for global state
 ┃ ┣ 📂 hooks           # Custom hooks for reusable logic (e.g., fetching, authentication)
 ┃ ┣ 📂 pages           # Page components used in React Router
 ┃ ┣ 📂 routes          # Application routing setup and protected routes
 ┃ ┣ 📂 services        # Business logic and API service functions
 ┃ ┣ 📂 store           # Zustand state management setup
 ┃ ┣ 📂 style           # Global and component-specific styles
 ┃ ┣ 📂 theme           # Theme configurations (colors, typography, Mantine/Styled Components)
 ┃ ┣ 📂 types           # TypeScript interfaces and type definitions
 ┃ ┣ 📂 util            # Utility functions and helpers
 ┃ ┣ 📜 App.tsx         # Main App component handling global layout and providers
 ┃ ┣ 📜 main.tsx        # Entry point that renders the App component
 ┃ ┗ 📜 index.css       # Global styles and CSS resets
 ┣ 📜 .env.local        # Environment variables for API keys and secrets
 ┣ 📜 package.json      # Project dependencies, scripts, and metadata
 ┗ 📜 README.md         # Project documentation and setup instructions
```

---

## 📸 **Screenshots**

### **Login**

**email**: user1@use.com
**password**: password

### 🔹 **Homepage**

_Example screenshot of homepage UI_  
![Homepage](https://raw.githubusercontent.com/tim177/movie-app/refs/heads/main/src/assets/movie_dashboard.png)

### 🔹 **Movie Details Page**

_Example screenshot of movie details page_  
![Movie Details](https://github.com/tim177/movie-app/blob/main/src/assets/movie_detail.png?raw=true)

---

## 📣 **API References**

This app uses the **TMDB API** for fetching movies.

### 🔹 **Endpoints Used**

- 🔍 `GET /trending/all/week` – Fetch trending movies & shows
- 🔍 `GET /popular/all/week` – Fetch popular movies & shows
- 🔍 `GET /top-rated/all/week` – Fetch top-rated movies & shows
- 🎬 `GET /movie/{movie_id}` – Get movie details
- 📺 `GET /tv/{tv_id}` – Get TV show details

> **API Docs:** [TMDB API Documentation](https://developers.themoviedb.org/3/getting-started/introduction)

---

## 🎯 **Future Enhancements**

🔹 **User Reviews & Ratings** – Allow users to submit reviews.  
🔹 **Chat Service** – Useres can comment and give review about movie.  
🔹 **Google Based Auth** – User can authenticate using google account.  
🔹 **Home Page** – Come up with ideas to design the homepage completely.  
🔹 **Integrate Stripe** – Just to test and have fun✌🏻.

---

## 📝 **License**

This project is licensed under the **MIT License**.

---

## 📩 **Contact**

📧 **Email:** [timaraw18@gmail.com](mailto:timaraw18@gmail.com)
🔗 **GitHub:** [tim177](https://github.com/tim177)

---

### 🚀 **Enjoy using Movie App!** 🍿🎬
