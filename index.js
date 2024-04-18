import { } from "dotenv/config.js";
import express from "express";
import  {Router}  from "./router/product.js";
import mongoose from "mongoose";
import cors from 'cors'

// initializing the server as app
const app = express();

// connecting to database server
main().catch(err => console.log(err));

// connecting to database is asynchronous task which required time to connect the=us we use async function with await 
async function main() {
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    await mongoose.connect(process.env.DB_URL);
    console.log('DB connected successfully ')
    // await mongoose.connect('mongodb+srv://ConsoleDev19:shivam191005@cluster0.rfekipa.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0');
    // console.log('DB connected successfully ')
}


// middleware initialization
app.use(express.json());
app.use(cors())
app.use(express.static(process.env.DB_PUBLIC))

// initializing the route for server
app.use('/api',Router);

const PORT= process.env.PORT || 8080

app.listen(PORT, () => {
    console.log("server started")
})


// .env variable db password
// console.log(process.env.DB_PASSWORD);