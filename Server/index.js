
const express = require("express");
const db = require("./Database/DatabaseConnection");
const app = express();

const cors = require("cors");
const PORT = 5000;

require("dotenv").config();

const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cors());

// db.query('INSERT INTO provider (role, username, email, password, phone, address) VALUES($1, $2, $3, $4, $5, $6)', ['a', 'a', 'a', 'a', 'a', 'a']);
// db.query('DELETE FROM provider')

async function Get ( ) {
    const res = await db.query('SELECT * FROM provider WHERE username = $1', ['a']);
    console.log(res);
}
// Get ();


app.post("/login", (req, res) => {
    let user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_KEY, { expiresIn: '5d' });
    console.log('Generated token:', token);
    res.json({ accessToken: token });
});

// Example protected route
app.get('/protected', authenticateToken, (req, res) => {
    // Access the user data from the request object
    const user = req.user;

    if (user.id === '1')
        return res.json({ message: 'Access granted to protected route', user });
    console.log('The user does not have the right to access');
});

// Middleware function for JWT authentication
function authenticateToken(req, res, next) {
    // Get the authorization header from the request
    const authHeader = req.headers['authorization'];

    // Extract the JWT token from the authorization header
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        // If no token is found, return an HTTP 401 Unauthorized response
        return res.status(401).json({ error: 'Authentication token not found' });
    }

    // Verify the JWT token
    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
        if (err) {
            // If token verification fails, return an HTTP 403 Forbidden response
            return res.status(403).json({ error: 'Invalid token' });
        }

        // If the token is valid, set the decoded user data on the request object
        req.user = decoded;
        next();
    });
}

app.listen(PORT)


