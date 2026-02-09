const mongoose = require("mongoose");


 async function main() {
  try{
   const res =  await mongoose.connect(
      "mongodb+srv://ankit:Ankit@cluster0.kdodgmq.mongodb.net/?appName=Cluster0",
    );
    console.log("Connected successfully" ,res.connection.name);
  }
  catch(err){
    console.error("Error connecting to MongoDB:", err);
  }
}

module.exports = main;