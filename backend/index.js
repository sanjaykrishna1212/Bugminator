const express = require("express");
const mongo =  require("./database/db");
const app = express();
const port = 2000;

  const user = {
    id:2,
      username: "user",
      role: "user",
      contactNumber: 1234567890,
      email: "user@gmail.com",
      orgName: "Prototype",
      gender: "female",
      city: "madurai",
      state: "Tamilnadu",
      pincode: 622098,
    };

async function run(){
  return  await mongo.getData("signup")
}
    
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get("/login",async (req,res)=>{
    const temp= await run(); 
    res.send(temp);
})


app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})