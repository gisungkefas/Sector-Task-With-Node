const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");

const userRoute = require('./route/userDataRoute')

const app = express();


// Set up middleware
app.use(express.json());
app.use(cors())


app.use('/api', userRoute)

mongoose
  .connect("mongodb+srv://kefasg71:franklin3083@cluster0.kkl2jdh.mongodb.net/")
  .then(() => console.log("connected to database"))
  .catch((err) => console.log("Error", err));




app.listen(3001, () => console.log("connected on port 3001"));
