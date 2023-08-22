const express = require("express");
const cors = require("cors");

const app = express();
// const axios = require("axios").default;
const dotenv = require("dotenv");
const db = require("../db/connection");



dotenv.config();

app.use(cors());
app.use(express.json());

//Users API
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users;", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(results.rows);
  });
});


app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});