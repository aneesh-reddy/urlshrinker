require('dotenv').config();
const express= require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose =require("mongoose");
const shortUrl=require("./models/shortUrl")
const app=express()


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));


mongoose.connect("mongodb+srv://"+process.env.ID+":"+process.env.PASS+"@cluster0.clx5p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology: true,useFindAndModify: false})



app.get("/",async (req,res)=>{
    const shorturls=await shortUrl.find();
   res.render("index",{shorturls:shorturls});
})

app.post("/shortUrls",async (req,res)=>{
  await shortUrl.create({full:req.body.fullUrl})
  console.log(req.body.fullUrl);
  res.redirect("/");
})


app.get("/:shortUrl",async (req,res)=>{
    const short = await shortUrl.findOne({short:req.params.shortUrl});
    if(short==null)
     res.sendStatus(404);
    short.clicks++;
    short.save();
    res.redirect(short.full);
})


app.listen(process.env.PORT || 3000,function(req,res){
    console.log("server running on 3000");
})