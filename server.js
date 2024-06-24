const express = require('express');
const basicAuth = require('basic-auth');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const USERNAME = 'admin'; // Change this to your desired username
const PASSWORD = 'password'; // Change this to your desired password

function auth(req, res, next) {
    const user = basicAuth(req);
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
