import mongoose from "mongoose";
 const userSchema= new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
 })
 const user=mongoose.model("User",userSchema);
 export default user;