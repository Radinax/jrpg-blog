const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const users = require("./routes/api/users");
const games = require("./routes/api/games");

app.get("/", (req, res) => res.send("Hello"));

// Body  Parser middleware
// bodyParser let us handle JSON data in the body
// Body  Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors());
app.options("*", cors());

// DB CONFIG
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Passport Config
require("./config/passport")(passport);

// Passport middelware
app.use(passport.initialize());

// Use Routes
app.use("/api/users", users);
app.use("/api/games", games);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
