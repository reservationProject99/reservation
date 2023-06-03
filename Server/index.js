const express = require("express");
const db = require("./queries");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const app = express();
const cors = require("cors");
const PORT = 5000;

app.use(cors());

app.use(express.json());


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
  "/users_count",
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
app.put("/delete_user/:id", db.deleteCustomer);

app.get("/admin", authenticateToken, db.getAdmin);
app.post("/admin", db.createAdmin);

app.get("/provider", db.getProvider);
app.get("/not_active_provider", db.getNotAcceptedProvider);

app.get(
  "/provider_count",
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
app.put("/delete_provider/:id", db.deleteProvider);
app.put("/accept_provider/:id", db.acceptProvider);

app.get("/cars", db.getCar);

app.get(
  "/cars_count",
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
  "/rented_Carscount",
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
app.put("/delete_car/:id", db.deleteCars);
app.put("/bookCar/:id", db.bookCar);

app.post("/checkToken", authenticateToken);

app.post("/logIn_customer", db.checkCustomer, (req, res) => {

  const user = req.body;

  const token = jwt.sign(user, process.env.ACCESS_TOKEN_KEY);
  console.log("Generated token:", token);
  res.json(token);
});

app.post("/logIn_provider", db.checkProvider, (req, res) => {

  const user = req.body;

  const token = jwt.sign(user, process.env.ACCESS_TOKEN_KEY);
  console.log("Generated token:", token);
  res.json(token);
});


function authenticateToken(req, res, next) {

  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Not found" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Invalid" });
    }

    req.user = decoded;
    next();
  });
}

app.listen(PORT);