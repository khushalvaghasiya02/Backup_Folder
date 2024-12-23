const { default: mongoose } = require("mongoose");
const config = require("../config/config")

const connectDB = async () =>{
    try{
        await mongoose.connect(config.mongodb.url,config.mongodb.options)
        console.log("MongoDB connected successful......!")
    }catch(error){
        console.error("Database connection error:", error);
    }   
}

module.exports = { connectDB };