// const express = require("express");
// const cors = require("cors");
// const morgan = require('morgan');

import 'dotenv/config';
import { connect } from '@planetscale/database'

const config = {
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD
}

const conn = connect(config)
// const results = await conn.execute('select 1 from dual where 1=?', [1])

// const newUser = await conn.execute('DELETE FROM users WHERE user_id = ?', [6])
const users = await conn.execute('select * from users')
// const users2 = await conn.execute('select email from users where user_id = ?', [1])

// console.log(results);
console.log(users);




// const app = express();
// const axios = require("axios").default;
// const dotenv = require("dotenv");
// const db = require("../db/connection");



// dotenv.config();

// app.use(cors());
// app.use(morgan('dev'));
// app.use(express.json());


// //home page
// app.get("/", (req, res) => {
//   res.status(200).send("You're API is running!");
// });


// //Users API
// app.get("/users", (req, res) => {
//   db.query("SELECT * FROM users;", (error, results) => {
//     if (error) {
//       throw error;
//     }
//     res.status(200).send(results.rows);
//   });
// });

// //Projects API
// app.get("/projects", (req, res) => {
//   db.query("SELECT * FROM projects;", (error, results) => {
//     if (error) {
//       throw error;
//     }
//     res.status(200).send(results.rows);
//   });
// });

// //Tasks API
// app.get("/tasks", (req, res) => {
//   db.query("SELECT * FROM tasks;", (error, results) => {
//     if (error) {
//       throw error;
//     }
//     res.status(200).send(results.rows);
//   });
// });


// app.listen(8000, () => {
//   console.log(`Server is running on port 8000.`);
// });