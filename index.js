const express = require('express');
const app = express();
const mongoose = require('mongoose');

const user = require("./mode")



app.get('/new',(req,res)=>{
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





mongoose.connect("mongodb+srv://vfcvijin:111@new.j2g0m0h.mongodb.net/").then(()=>console.log("database connected"))

app.listen(4000,()=>console.log("The Server is  Running"));
















