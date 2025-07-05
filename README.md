# StackSmash

StackSmash is a full stack learning platform designed for B.Tech students, offering interactive lessons, real-time code execution, peer challenges, voice navigation, multilingual support, gamification, and certificates. The platform features a professional landing page, authentication, a code editor, and course pages for both frontend and backend technologies.

## 🚀 Features
- **Interactive Lessons** for Frontend (HTML, CSS, JavaScript, React, etc.) and Backend (Python, Java, Node.js, PHP, etc.)
- **Real-Time Code Execution** using the Piston API
- **Peer Challenges** and Leaderboard
- **Voice Navigation** for hands-free learning
- **Gamification** with badges, progress tracking, and certificates
- **Authentication** and Student Dashboard
- **Responsive, Modern UI/UX**

## 🏗️ Project Structure
```
StackSmash/
  ├── auth/           # Authentication pages
  ├── Backend/        # Backend course pages & backend servers (Flask, PHP)
  ├── compiler/       # Code editor and problem bank
  ├── components/     # UI components (voice assist, dark mode, etc.)
  ├── Frontend/       # Frontend course pages
  ├── index.html      # Landing page
  └── README.md       # Project documentation
```

## 🖥️ Local Setup
1. **Clone the repository:**
   ```sh
   git clone https://github.com/YOUR_USERNAME/stacksmash.git
   cd stacksmash
   ```
2. **Run the frontend locally:**
   - Using Python:
     ```sh
     python -m http.server 8000
     ```
   - Or use VS Code Live Server extension.
   - Open [http://localhost:8000](http://localhost:8000) in your browser.
3. **Run the backend (optional):**
   - **Python Flask:**
     ```sh
     cd Backend
     pip install flask
     python app.py
     ```
     Visit [http://localhost:5000](http://localhost:5000)
   - **PHP:**
     ```sh
     cd Backend
     php -S localhost:8001
     ```
     Visit [http://localhost:8001/app.php](http://localhost:8001/app.php)

## 🌐 Deployment (Vercel Recommended)
1. Push your code to GitHub.
2. Go to [https://vercel.com/](https://vercel.com/) and import your repo.
3. Click **Deploy**. Your site will be live at `https://your-site.vercel.app`.

## 🗣️ Voice Navigation Commands
- **Frontend:** frontend, open html, css, javascript, react, etc.
- **Backend:** backend, open python, java, node, php, etc.
- **Editor:** open editor, code editor
- **Challenges:** start challenge, open leaderboard, share challenge
- **Theme:** dark mode, light mode
- **Help:** help, what can you do
- **Auth:** login, sign up, my profile

## 👩‍💻 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License
[MIT](LICENSE) 