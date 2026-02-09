const express = require("express");
const  dbConnection  = require("./configs/db");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const cron = require("node-cron");
dbConnection();

const app = express();
const port = process.env.PORT || 8080;



app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS" ,"PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(bodyParser.json());

// app.use("/", require("./routes"));

// app.use(require("./middlewares/error.middleware").errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
