const express = require("express");
const db = require("./queries");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const app = express();
const cors = require("cors");
const PORT = 5000;

app.use(cors());

app.use(express.json());

// getByToken
app.get("/get_user", authenticateToken, db.getCustomerByToken);
app.get("/get_provider", authenticateToken, db.getProviderByToken);

// Customer
app.post("/users", db.createCustomer);
app.get("/users", authenticateToken, db.getCustomer);
app.get("/users_count", authenticateToken, db.getCustomercount);
app.get("/users/:id", authenticateToken, db.getCustomerById);
app.put("/users/:id", authenticateToken, db.updateCustomerCreaditCard);
app.put("/delete_user/:id", authenticateToken, db.deleteCustomer);

// admin
app.get("/admin", authenticateToken, db.getAdmin);
app.post("/admin", authenticateToken, db.createAdmin);

// provider
app.post("/provider", db.createProvider);
app.get("/provider", authenticateToken, db.getProvider);
app.get("/not_active_provider", authenticateToken, db.getNotAcceptedProvider);
app.get("/provider_count", authenticateToken, authenticateToken, db.getProvidercount);
app.get("/provider/:id", authenticateToken, db.getProviderById);
app.put("/delete_provider/:id", authenticateToken, db.deleteProvider);
app.put("/accept_provider/:id", authenticateToken, db.acceptProvider);

// cars
app.get("/cars", db.getCar);
app.get("/cars_count", authenticateToken, db.getCarscount);
app.get("/rented_Carscount", authenticateToken, db.getRentedCarscount);

app.get("/cars/:id", authenticateToken, db.getCarsById);
app.post("/cars", authenticateToken, db.createCar);
app.put("/delete_car/:id", authenticateToken, db.deleteCars);
app.put("/bookCar/:id", authenticateToken, db.bookCar);

app.get('/rented_cars_count',authenticateToken, db.getRentedCarscount)

// Sign
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