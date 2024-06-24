const express = require('express');
const basicAuth = require('basic-auth');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

// Log the environment variables to verify they are loaded correctly
console.log(`USERNAME: ${USERNAME}, PASSWORD: ${PASSWORD}`);

function auth(req, res, next) {
    const user = basicAuth(req);
    console.log('User:', user); // Log the user object
    if (!user || user.name !== USERNAME || user.pass !== PASSWORD) {
        res.set('WWW-Authenticate', 'Basic realm="example"');
        return res.status(401).send('Authentication required.');
    }
    next();
}

app.use(auth);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
