const mongoose = require('mongoose');

const SponsorSchema = new mongoose.Schema({
    name:{
        type: String, required: true
    },
    contribution:{
        type: String, required: true
    },
    eventId:{
        type: Number, required: true
    },
    createBy:{
        type: String, required: true
    },
    updateBy:{
        type: String, required: true
    },
    createAt:{
        type: String, required: true
    },
    updateBy:{
        type: String, required: true
    }
  
  },) 
  
  module.exports = mongoose.model('Sponsor', SponsorSchema);
  