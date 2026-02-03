const express = require("express");
const app = express();
const port = 2000;


app.get("/",(req,res)=>{
    res.send("Welcome my express app");
})


app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})