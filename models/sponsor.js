// const mongoose = require('mongoose');
import mongoose from "mongoose";

const SponsorSchema = new mongoose.Schema({
    name:{
        type: String, required: true
    },
    contribution:{
        type: Number, required: true
    },
    eventId:{
        // type:mongoose.Schema.Types.ObjectId,ref:'Event'
        type:String
    },
    createBy:{
       type:mongoose.Schema.Types.ObjectId,ref:'User'
    },
    updateBy:{
        type:mongoose.Schema.Types.ObjectId,ref:'User'
    },
  
  },{
    timestamps: true }
);
  const sponsor=mongoose.model('Sponsor',SponsorSchema);
  export default sponsor;
  