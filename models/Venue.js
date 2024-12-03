import mongoose, { Types } from "mongoose";
const {Schema,model}=mongoose;
const vanueSchema= new Schema({
    id:Number,
    name:{type:[String],require:true},
    location:{type:String,require:true},
    capacity:{type:Number,require:true},
    createBy:{type:String,require:true},
    updateBy:{type:String,require:true},
    

},
{
    timestamps:true
});

const Vanue=Schema.model("Venue",vanueSchema);
export default Vanue;
