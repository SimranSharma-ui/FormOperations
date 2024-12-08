const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Router = require('./Route/UserRouter');

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = () =>{

    mongoose.connect("mongodb+srv://sharmasimran0675:anmaya1244@cluster0.bg1lu.mongodb.net/Form")
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => console.log(err));
  }

  connectDB();

  app.use('/api/User',Router);


  app.listen(5000,()=>{
    console.log("server is running on Port 5000")
  });






