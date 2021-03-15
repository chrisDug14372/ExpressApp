import express from 'express';
import parser from 'body-parser';
const app = new express();
import mongoose, { Schema } from 'mongoose';

const mongoose, { Schema } =require('mongoose')

////connect('')

mongoose.connect('mongodb://localhost/express-app', (err, data) =>{
    if (err){
        console.log('DB Connection Failed')
        return
    }
    
    console.log('DB Connection Success')
})


app.use(parser.urlencoded({
    extended: false
}));



app.get('/', (req, res) =>{
    return res.send("Hello World")
})

app.get('/world', (req,res) =>{
    return res.send("World")
})


app.post('/', (req,res) => {
    return res.send(req.body);
})




app.listen(process.env.PORT || 3000);