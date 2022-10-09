import express from "express";
import data from './data.js';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";

dotenv.config();        //database connection
mongoose
    .connect(process.env.MONGODB_URI)        // .env data is loaded here
    .then(() => {
        console.log('Database connected!')
    })
    .catch((er) => {
        console.log(err.message);
    });



const app = express();
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);



const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is ON and running on: http://localhost:${port} `);
});