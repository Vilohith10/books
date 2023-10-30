// Export mongoose
const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');

const app = express();
const  mongoose = require("mongoose");
const Schema = mongoose.Schema
require('dotenv').config();
const bookRoutes=require('./book')
app.use(express.json());
const uri = `mongodb://localhost:27017/bookstore`
// const db = require("../models");
// console.log("🚀 ~ file: mongodb.js:8 ~ uri:", uri)

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(result => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

  app.use('/api/books', bookRoutes);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});