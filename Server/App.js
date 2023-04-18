const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Serve static files from the Client/Public directory
app.use(express.static('Client/Public'));

// Support json encoded bodies
app.use(bodyParser.json({ type: 'application/json'}));

// Support encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML pages
app.get('/', function (req, res) {
    res.sendFile('index.html', { root: './Client/Views' });
});

app.get('/register', function (req, res) {
    res.sendFile('register.html', { root: './Client/Views' });
});

app.get('/makeapost', function (req, res) {
    res.sendFile('makeapost.html', { root: './Client/Views' });
});

app.get('/plateprofile', function (req, res) {
    res.sendFile('plateprofile.html', { root: './Client/Views' });
});

app.get('/login', function (req, res) {
    res.sendFile('login.html', { root: './Client/Views' });
});

// Serve CSS files
app.use('/css', express.static(path.join(__dirname, 'Client/Public/CSS'), { type: 'text/css' }));

// Serve API routes
app.use("/api/user", require("./route/userRoute"));

// 404 Error Handling Middleware
app.use((req, res) => {
  res.status(404).sendFile('404.html', { root: './Client/Views' });
});

// Start the server
app.listen(1337, () => console.log('Marist Chatter listening on port 1337!'));

console.log(__dirname);
