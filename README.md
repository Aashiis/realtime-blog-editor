# 📝 Realtime Blog Editor

A **real-time blog editing** app that lets you **synchronize blog posts between your laptop and mobile** device instantly! Built using **Express.js** and **Socket.IO**, this project ensures seamless content creation across multiple devices.

![Realtime Sync](https://img.shields.io/badge/realtime-sync-brightgreen)
![Express.js](https://img.shields.io/badge/Express.js-Backend-blue)
![Socket.IO](https://img.shields.io/badge/Socket.IO-WebSocket-black)
![MIT License](https://img.shields.io/badge/License-MIT-lightgrey)

---

## 🚀 Features

- 🔄 **Live syncing** between devices (laptop and mobile)
- 🖋️ Simple, minimalistic blog editor UI
- 📡 Real-time WebSocket connection using Socket.IO
- 📱 Device responsive design
- 💾 Optional save/publish integration (extendable)

---

## 📸 Screenshots

> _Add screenshots of the editor on laptop and mobile side-by-side for better presentation._

---

## 🏗️ Tech Stack

- **Backend**: [Express.js](https://expressjs.com/)
- **Realtime Communication**: [Socket.IO](https://socket.io/)
- **Frontend**: HTML5 + CSS + JS
- **Deployment**: (Optional: VPS, Vercel, etc.)

---

## 🧠 How It Works

1. When the blog editor opens on your laptop and mobile, they establish a WebSocket connection with the server.
2. As you type on one device, the content is broadcast in real-time to all connected clients (other devices).
3. Edits appear instantly without page reload or manual saving.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/realtime-blog-editor.git
cd realtime-blog-editor
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Server

```bash
npm start
```

Server runs at: `http://localhost:3000`

---

## 🌐 Access from Other Devices

1. Connect your **laptop and mobile** to the **same Wi-Fi network**.
2. Get your laptop’s **local IP address** (e.g., `192.168.1.10`).
3. Open `http://192.168.1.10:3000` on your mobile browser.

Both devices will now be **in sync**!

---

## 🧩 File Structure

```bash
realtime-blog-editor/
├── public/
│   ├── index.html
│   ├── style.css
│   └── client.js
├── server.js
├── package.json
└── README.md
```

---

## 🔒 Security Note

> This project is built for local or LAN usage. For production:
- Add **authentication**
- Use **HTTPS**
- Implement **rate limiting** and **CORS protection**

---

## 📦 Future Improvements

- Markdown support
- Blog post autosave
- Editor theme toggle (light/dark)
- User login system
- Save to database (MongoDB/PostgreSQL)

---

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to use and modify it.

---

## 👨‍💻 Author

**Prakash BK (Aashis)**  
📧 [aashistech@gmail.com](mailto:aashistech@gmail.com)  
🔗 [GitHub](https://github.com/aashiis) | [LinkedIn](https://linkedin.com/in/aashiis0)

---

> _"Write once. View anywhere."_ ✍️💻📱