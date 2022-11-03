const mongoose=require("mongoose")

const Schema=new mongoose.Schema({
    name:String,
    value:Number
})

module.exports= mongoose.model('Number',Schema)