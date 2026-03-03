# 🎬 YouTube Clone (React + Vite)

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![License](https://img.shields.io/badge/License-MIT-green)

A sleek and modern **YouTube UI clone** built using **React 18** and **Vite**.  
This project demonstrates component-based architecture, routing, API integration, and responsive design while closely mimicking the real YouTube web interface.

---

## 🚀 Live Demo

```
youtubeclone-mu-five.vercel.app
```

---

## ✨ Features

- 🔥 **Home Feed**
  - Displays trending videos using YouTube Data API
  - Dynamic category filtering

- 🎥 **Video Playback Page**
  - Embedded YouTube player
  - Video title, views, likes, publish time
  - Channel details with subscriber count

- 📺 **Recommended Videos Section**
  - Related videos based on category

- 💬 **Comments Section (API Integrated)**

- 📂 **Responsive Sidebar**
  - Category navigation
  - Collapsible layout

- 🔎 **Top Navigation Bar**
  - Search UI (expandable to API search feature)

- ⚡ **Optimized Build**
  - Powered by Vite for fast development & production build

---

## 🧠 What This Project Demonstrates

- React Hooks (`useState`, `useEffect`)
- Component-based architecture
- API fetching & async handling
- Conditional rendering
- Routing with `react-router-dom`
- Clean UI structuring
- Error handling for API responses
- Dynamic rendering from real-time data

---

## 🗂️ Project Structure

```
src/
│
├── assets/
│
├── Components/
│   ├── Feed/
│   ├── Navbar/
│   ├── PlayVideo/
│   ├── Recommended/
│   └── Sidebar/
│
├── Pages/
│   ├── Home/
│   └── Video/
│
├── App.jsx
├── data.js
├── index.css
└── main.jsx
```

---

## 🔧 Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/youtube-clone.git
cd youtube-clone
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Add Your YouTube API Key

Inside `data.js`:

```js
export const API_KEY = "YOUR_API_KEY";
```

Get API key from:
Google Cloud Console → Enable **YouTube Data API v3**

---

### 4️⃣ Run Development Server

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

### 5️⃣ Build for Production

```bash
npm run build
```

---

## 🛠️ Technologies Used

- **React 18**
- **Vite**
- **React Router DOM**
- **YouTube Data API v3**
- **Moment.js**
- **CSS (Modular Structure)**
- **JavaScript (ES6+)**

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push and create a Pull Request

---

## 👨‍💻 Author

**Shreyash Nikhare**

If you like this project, consider giving it a ⭐ on GitHub!

---

*Built as a learning project to master React architecture, API integration, and UI replication.*
