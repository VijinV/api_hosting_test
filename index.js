const express = require('express');
const app = express();
const mongoose = require('mongoose');

const user = require("./mode")



app.get('/',(req,res)=>{
    const user1 = user.find()
    res.send(user1);
})

app.post('/',(req,res)=>{

    const user1 = new user({
        name:"vijin"
    })

    user1.save()

    res.send("Data saved!")
});





mongoose.connect("mongodb://127.0.0.1:27017/API").then(()=>console.log("database connected"))

app.listen(4000,()=>console.log("The Server is  Running"));
















