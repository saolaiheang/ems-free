import mongoose from "mongoose";
// const {Schema,model}=mongoose;
const vanueSchema= new mongoose.Schema({
    name:{type:String,require:true,maxLength:20},
    location:{type:String,require:true,max:500},
    capacity:{type:Number,require:true,},
    createBy:{ type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
    updateBy:{ type: mongoose.Schema.Types.ObjectId, ref: "User", },
    
},
{
    timestamps:true
});
const Venues =mongoose.model("Venue",vanueSchema);
export default Venues;
