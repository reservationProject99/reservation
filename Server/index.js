const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./queries");

const cors = require("cors");
const PORT = 5000;
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// const whitelist = ["http://localhost:3000/"];
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (!origin || whitelist.indexOf(origin) !== -1) {
//             callback(null, true);
//         } else {
//             callback(new Error("Not allowed by CORS"));
//         }
//     },
//     credentials: true,
// };

// app.use(cors(corsOptions));
app.use(cors());

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

require("dotenv").config();

const jwt = require("jsonwebtoken");

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get(
  "/users",
  authenticateToken,
  (req, res, next) => {
    const user = req.user.role;
    if (user === "admin") {
      next();
    } else {
      res.send("user not admin");
    }
  },
  db.getCustomer
);

app.get(
  "/userscount",
  authenticateToken,
  (req, res, next) => {
    const user = req.user.role;
    if (user === "admin") {
      next();
    } else {
      res.send("user not admin");
    }
  },
  db.getCustomercount
);

app.get("/users/:id", db.getCustomerById);
app.post("/users", db.createCustomer);
app.put("/users/:id", db.updateCustomerCreaditCard);
app.put("/deleteuser/:id", db.deleteCustomer);

app.get("/admin", authenticateToken, db.getAdmin);
app.post("/admin", db.createAdmin);

app.get("/provider", db.getProvider);
app.get("/notactiveprovider", db.getNotAcceptedProvider);

app.get(
  "/providercount",
  authenticateToken,
  (req, res, next) => {
    const user = req.user.role;
    if (user === "admin") {
      next();
    } else {
      res.send("user not admin");
    }
  },
  db.getProvidercount
);

app.get("/provider/:id", db.getProviderById);
app.post("/provider", db.createProvider);
app.put("/deleteprovider/:id", db.deleteProvider);
app.put("/acceptprovider/:id", db.acceptProvider);

app.get("/cars", db.getCar);
app.get(
  "/carscount",
  authenticateToken,
  (req, res, next) => {
    const user = req.user.role;
    if (user === "admin") {
      next();
    } else {
      res.send("user not admin");
    }
  },
  db.getCarscount
);

app.get(
  "/rentedCarscount",
  authenticateToken,
  (req, res, next) => {
    const user = req.user.role;
    if (user === "admin") {
      next();
    } else {
      res.send("user not admin");
    }
  },
  db.getRentedCarscount
);

app.get("/cars/:id", db.getCarsById);
app.post("/cars", db.createCar);
app.put("/deletecar/:id", db.deleteCars);
app.put("/bookCar/:id", db.bookCar);

app.post("/login", (req, res) => {
  let user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_KEY);
  console.log("Generated token:", token);
  res.json({ accessToken: token });
});

// Example protected route
app.get("/protected", authenticateToken, (req, res) => {
  // Access the user data from the request object
  const user = req.user;

  if (user.id === "1")
    return res.json({ message: "Access granted to protected route", user });

  res.json({ message: "err" });
});

// Middleware function for JWT authentication
function authenticateToken(req, res, next) {
  // Get the authorization header from the request
  const authHeader = req.headers["authorization"];

  // Extract the JWT token from the authorization header
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    // If no token is found, return an HTTP 401 Unauthorized response
    return res.status(401).json({ error: "Not found" });
  }

  // Verify the JWT token
  jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
    if (err) {
      // If token verification fails, return an HTTP 403 Forbidden response
      return res.status(403).json({ error: "Invalid" });
    }

    // If the token is valid, set the decoded user data on the request object
    req.user = decoded;
    next();
  });
}

app.listen(PORT);

// db.query('INSERT INTO provider (role, username, email, password, phone, address) VALUES($1, $2, $3, $4, $5, $6)', ['a', 'a', 'a', 'a', 'a', 'a']);
// db.query('DELETE FROM provider')

// async function Get() {
//     const res = await db.query('SELECT * FROM provider WHERE username = $1', ['a']);
//     console.log(res);
// }
// Get ();
