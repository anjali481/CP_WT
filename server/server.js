const express=require('express');
const dotenv=require('dotenv')
const connectDB=require('./config')

require('colors')
const morgan =require('morgan');
const { bgMagenta } = require('colors');

const app=express();

app.use(express.json());

app.use(morgan("dev"));

dotenv.config()

connectDB()



app.get("/",(req,res)=>{

    res.send("<h1>hello from server <h1>")
})


const port=process.env.PORT || 8080

app.listen(port,()=>{
    console.log(`server running on ${process.env.NODE_ENV}  on port ${process.env.port}`);
});