
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const db = require('./queries')

const cors = require("cors");
const PORT = 5000;

const whitelist = ["http://localhost:3000/"];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};

app.use(cors(corsOptions));

app.use(bodyParser.json())

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

require("dotenv").config();

const jwt = require("jsonwebtoken");


app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', authenticateToken, db.checkAdmin ,db.getCustomer)

app.get('/userscount', db.getCustomercount)
app.get('/users/:id', db.getCustomerById)
app.post('/users', db.createCustomer)
app.put('/users/:id', db.updateCustomerCreaditCard)
app.put('/delete_user/:id', db.deleteCustomer)

app.get('/admin', authenticateToken, db.getAdmin) 
app.post('/admin', db.createAdmin)

app.get('/provider', db.getProvider)
app.get('/not_active_provider', db.getNotAcceptedProvider)
app.get('/provider_count', db.getProvidercount)
app.get('/provider/:id', db.getProviderById)
app.post('/provider', db.createProvider)
app.put('/delete_provider/:id', db.deleteProvider)
app.put('/accept_provider/:id', db.acceptProvider)


app.post("/createToken", (req, res) => {
    let user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_KEY);
    console.log('Generated token:', token);
    res.json({ accessToken: token });
});

// Middleware function for JWT authentication
function authenticateToken(req, res, next) {
    // Get the authorization header from the request
    const authHeader = req.headers['authorization'];

    // Extract the JWT token from the authorization header
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        // If no token is found, return an HTTP 401 Unauthorized response
        return res.status(401).json({ error: 'Not found' });
    }

    // Verify the JWT token
    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
        if (err) {
            // If token verification fails, return an HTTP 403 Forbidden response
            return res.status(403).json({ error: 'Invalid' });
        }

        // If the token is valid, set the decoded user data on the request object
        req.user = decoded;
        next();
    });
}

app.listen(PORT)