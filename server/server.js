const express=require("express")
const app=express()
const cors=require('cors')
require("dotenv").config()
const PORT = process.env.PORT || 5000;
const path = require("path")
const buildPath = path.join(__dirname, '..', 'build');
// app.use(express.static(buildPath));
const mongoose=require("mongoose")
const number=require("./Number")
app.use(cors())

mongoose.connect(process.env.MONGO_URL, async (err)=>{
    if(!err)
    {
        console.log("connected")
    }
    else
    {
        console.log(err)
    }
})



   
   
app.get("/",async (req,res)=>{
    const variables=await number.find({})
    res.json(variables)
})

app.listen(PORT,(req,res)=>{
    console.log("server is listening")
})