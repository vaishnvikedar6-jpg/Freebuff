const express = require('express');
const app = express();
app.use(express.json());
app.listen(5000,()=>{
    console.log("Server is live on port 5000")
});
app.get('/api/users',(req,res)=>{
    res.status(200).json({success:true,data:[]});
});
app.post('/api/attendance',(req,res)=>{
    const data = req.body;
    res.status(201).json({message:"Saved",data});
});