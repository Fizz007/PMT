

const express = require("express");
const cors = require("cors");
const projectsRoutes = require('./src/routes/projectRoute')
const userRoutes = require('./src/routes/userRoute')

require("dotenv").config();

// express app
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/projects", projectsRoutes);
app.use("/api/user", userRoutes);


//mongoDB connection
require('./src/config/connectDB')

//server

const PORT = process.env.PORT
app.listen(PORT , ()=> console.log(`server is running on ${PORT}`))

