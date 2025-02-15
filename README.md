# 📌 **Project README Template**

Here's a detailed **README.md** for your project, keeping it professional, well-structured, and informative.

---

# 🎬 **Movie App**

_A React-based movie exploration app with Firebase authentication, Firestore integration, and a dynamic UI powered by Mantine and NextUI._

![Movie App Screenshot](../part1/src/assets/HomePage.png)

> ⚡ **Note**: Replace `path/to/your/screenshot.png` with the actual image file path.

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

✔️ **Movie & TV Show Search** – Search for trending movies & TV shows.  
✔️ **Movie Details Page** – View full details, ratings, and trailers.  
✔️ **Carousel & Hero Section** – Dynamic movie carousels with a featured section.  
✔️ **Authentication** – Firebase authentication with role-based access control.  
✔️ **Firestore Integration** – Store user preferences, watchlists, and favorites.  
✔️ **Dark Mode** – Customizable theme switching.  
✔️ **Responsive Design** – Optimized UI across all devices.  
✔️ **Mantine Components** – Modern UI elements from Mantine & NextUI.

---

## 🛠 **Tech Stack**

### 📌 **Frontend:**

- **React.js** – UI library
- **Mantine v6** – UI components
- **NextUI** – Dashboard & advanced styling
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
- **Firebase CLI** (if deploying Firebase functions) ✅

### 🔹 **Clone the Repository**

```sh
git clone https://github.com/your-username/movie-app.git
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
 ┃ ┣ 📂 components      # Reusable UI components
 ┃ ┣ 📂 hooks           # Custom hooks
 ┃ ┣ 📂 pages           # Page components (React Router)
 ┃ ┣ 📂 services        # API & Firebase interactions
 ┃ ┣ 📂 state           # RecoilJS state management
 ┃ ┣ 📂 styles          # Global styles & themes
 ┃ ┣ 📂 types           # TypeScript interfaces
 ┃ ┣ 📜 App.tsx         # Main App component
 ┃ ┣ 📜 main.tsx        # Entry point
 ┃ ┗ 📜 index.css       # Global styles
 ┣ 📜 .env.local        # Environment variables
 ┣ 📜 package.json      # Dependencies & scripts
 ┗ 📜 README.md         # Documentation
```

---

## 📸 **Screenshots**

### 🔹 **Homepage**

_Example screenshot of homepage UI_  
![Homepage](../part1/src/assets/movie_dashboard.png)

### 🔹 **Movie Details Page**

_Example screenshot of movie details page_  
![Movie Details](../part1/src/assets/movie_detail.png)

---

## 📣 **API References**

This app uses the **TMDB API** for fetching movies.

### 🔹 **Endpoints Used**

- 🔍 `GET /trending/all/week` – Fetch trending movies & shows
- 🎬 `GET /movie/{movie_id}` – Get movie details
- 📺 `GET /tv/{tv_id}` – Get TV show details
- 🎞️ `GET /movie/{movie_id}/videos` – Get trailers

> **API Docs:** [TMDB API Documentation](https://developers.themoviedb.org/3/getting-started/introduction)

---

## 🎯 **Future Enhancements**

🔹 **User Reviews & Ratings** – Allow users to submit reviews.  
🔹 **Personalized Recommendations** – AI-based movie suggestions.  
🔹 **Multi-Language Support** – Expand to more languages.  
🔹 **Offline Mode** – Caching movies for offline viewing.  
🔹 **PWA Support** – Convert to a Progressive Web App.

---

## 📝 **License**

This project is licensed under the **MIT License**.

---

## 📩 **Contact**

📧 **Email:** timaraw18l@gmail.com  
🔗 **GitHub:** [tim177](https://github.com/tim177)

---

### 🚀 **Enjoy using Movie App!** 🍿🎬
