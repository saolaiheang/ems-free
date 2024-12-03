import mongoose from "mongoose";
import express from "express"
import Venues from "./models/venue.js";
const app = express();
mongoose.connect("mongodb+srv://laiheangsao:N8n7NJwxBULfUSG6@ems.qbbog.mongodb.net/?retryWrites=true&w=majority&appName=ems")
app.get("/api/venues",(req,res)=>{
    res.send("Get venues");
});




app.listen(3003,()=>{
    console.log("server running")
})
