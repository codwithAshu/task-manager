const express=require("express");
const app=express();
const cors = require('cors');
const bodyParser = require("body-parser");
require("dotenv").config();
require("./Models/db");
const PORT=process.env.PORT||8080;

const taskrouter=require("./Routes/taskrouter");


app.use(cors({
  origin: 'http://localhost:5173', 
  methods: 'GET, POST, PUT, DELETE', 
  allowedHeaders: 'Content-Type',  
}));
app.use(bodyParser.json());//to active  like req.body,req.body.name etc

app.use('/tasks',taskrouter);

app.get("/",(req,res)=>{
  res.send("hello")
})
app.listen(PORT,()=>{
   console.log("server is running on",PORT);
})