// server.js
console.log('May Node be with you')

const mongoose = require("mongoose")
const express = require('express');
require('dotenv').config()
const path= require("path")
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI || "mongodb+srv://xxxx:xxxxx@xxxxxx.xxxxxx.mongodb.net/test?retryWrites=true&w=majority",
    {
    useUnifiedTopology:true,
    useNewUrlParser:true
    });

mongoose.Promise = global.Promise;


require('./Models/Universities');

mongoose.connection.on('error', (err)=>{
    console.error('Database connection Error')
})
mongoose.connection.on('connected', ()=>{
    console.log('Database connection success')
})

const app = require ("./app")




// Step 3

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get("*", (req,res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
    
}


app.listen(PORT, function() {
    console.log('listening on PORT')
  })



  
