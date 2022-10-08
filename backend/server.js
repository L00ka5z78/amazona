import express from "express";
import data from './data.js';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import seedRouter from "./routes/seedRoutes.js";

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



//test
app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.get("/api/products/slug/:slug", (req, res) => {
    const product = data.products.find((x) => x.slug === req.params.slug);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' })
    }
});

app.get("/api/products/:id", (req, res) => {
    const product = data.products.find((x) => x._id === req.params._id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' })
    }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is ON and running on: http://localhost:${port} `);
})