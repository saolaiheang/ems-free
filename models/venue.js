import mongoose from "mongoose";
// const {Schema,model}=mongoose;
const vanueSchema= new mongoose.Schema({
    name:{type:[String],require:true},
    location:{type:String,require:true},
    capacity:{type:Number,require:true},
    createBy:{type:String,require:true},
    updateBy:{type:String,require:true},
},
{
    timestamps:true
});

const venues =Schema.model("venue",vanueSchema);
export default venues;
