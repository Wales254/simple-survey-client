# Simple Survey Client

This is the frontend application for the **Simple Survey System**. It allows users to fill and submit survey responses via a web interface.

## 🖥️ Technologies Used

- React.js (frontend framework)  
- HTML/CSS (UI design)  
- Axios (for HTTP requests to the API)  

## 📦 Features

- Survey form with:
  - Full Name  
  - Gender  
  - Email  
  - Description  
  - Programming Stack (dropdown)  
  - File upload (CV, portfolio, etc.)  
- Client‑side validation  
- Submit responses to the backend API  
- View submitted responses with filters for gender and programming stack  
- Download uploaded files  

## 🛠️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/simple-survey-client.git
cd simple-survey-client
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```
This will launch the React app in your browser at [http://localhost:3000](http://localhost:3000).

Make sure your **simple-survey-api (backend)** is running at the correct port (usually `http://localhost:8000` or as defined in your API).

---

## 🔗 API Configuration
Update your `App.js` or environment file if necessary to point to your API URL (e.g., `http://localhost/Simple-Survey-Api/api/submit_response.php`).

---

## 🚀 Deployment

This project can be deployed using services like:  
- Netlify  
- Vercel  
- GitHub Pages  

### Live Demo  
👉 AT: https://simple-survey-client-kappa.vercel.app/ 

---

## 📂 Project Structure
```
simple-survey-client/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   └── ...
├── package.json
├── README.md
