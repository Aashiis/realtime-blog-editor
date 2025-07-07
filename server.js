// server.js

const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require("socket.io");

// --- Basic Server Setup ---
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 3000;

// Serve the 'public' folder as a static directory
app.use(express.static(path.join(__dirname, 'public')));

// --- Real-time Collaboration Logic ---

// This variable will hold the single source of truth for the editor's content.
// We'll initialize it with the same content from your original HTML file.
let currentContent = `<h1>Welcome to Your Realtime Advanced Blog Post Editor!</h1>`;

// This event fires every time a new client connects to our server.
io.on('connection', socket => {
    console.log(`A user connected: ${socket.id}`);

    // 1. Immediately send the current content to the newly connected user.
    socket.emit('initial-content', currentContent);

    // 2. Listen for 'editor-change' events from any client.
    socket.on('editor-change', (data) => {
        // Update the master content on the server.
        currentContent = data;
        console.log(data);

        // 3. Broadcast the updated content to all *other* connected clients.
        // We use `socket.broadcast.emit` to avoid sending the content back
        // to the user who just sent it, which would cause an infinite loop.
        socket.broadcast.emit('update-content', currentContent);
    });

    // Handle user disconnection (optional, but good practice).
    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});


// --- Start the Server ---
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Open multiple browser tabs to see the real-time collaboration!');
});