# YouTube Clone

A sleek, modern clone of the YouTube interface built with React and Vite. This project demonstrates component-based architecture, routing, and responsive design while mimicking the look and feel of the YouTube web application.

## 🚀 Features

- **Home Feed**: Displays a grid of video thumbnails using mock data.
- **Video Playback**: Click a thumbnail to view the video details and a placeholder video player.
- **Responsive Sidebar**: A collapsible sidebar for navigation links.
- **Top Navigation Bar**: Search input and logo area with simple styling.
- **React Components**: Separated into Navbar, Sidebar, Feed, PlayVideo, Recommended, and page components.
- **Vite bundler**: Fast development and optimized build.

## 📁 Project Structure
`
src/
  ├─ assets/
  ├─ Components/
  │   ├─ Feed/
  │   ├─ Navbar/
  │   ├─ PlayVideo/
  │   ├─ Recommended/
  │   └─ Sidebar/
  ├─ Pages/
  │   ├─ Home/
  │   └─ Video/
  ├─ App.jsx
  ├─ data.js
  ├─ index.css
  └─ main.jsx
`

## 🔧 Setup & Installation

1. **Clone the repository**
   `ash
   git clone https://github.com/yourusername/youtube-clone.git
   cd youtube-clone
   `

2. **Install dependencies**
   `ash
   npm install
   `

3. **Run development server**
   `ash
   npm run dev
   `
   Access the app at http://localhost:5173 (default Vite port).

4. **Build for production**
   `ash
   npm run build
   `

## 🛠️ Technologies Used

- React 18
- Vite
- CSS modules for styling
- JavaScript (ES6+)

## 📚 Usage

- Open the app and browse the home page to see video thumbnails.
- Click on a video to navigate to the video detail page.
- Use the search bar (UI only; not functional) to mimic exploring content.

## 🤝 Contributing

Feel free to open issues or submit pull requests. Improvements, bug fixes, and new features are welcome.

---

*Created as a learning project to explore React component structure and UI replication.*
