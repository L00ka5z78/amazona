import mongoose from "mongoose";

const productSchema = new mongoose.Schema(      //accepts 2 params: fields of schema and options
    {
        name: { type: String, required: true, unique: true },
        slug: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        brand: { type: String, required: true },
        category: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        countInStock: { type: Number, required: true },
        rating: { type: Number, required: true },
        numReviews: { type: Number, required: true },
    },

    // {
    //     name: { type: String, unique: true },
    //     slug: { type: String, unique: true },
    //     image: { type: String },
    //     brand: { type: String },
    //     category: { type: String },
    //     description: { type: String },
    //     price: { type: Number },
    //     countInStock: { type: Number },
    //     rating: { type: Number },
    //     numReviews: { type: Number },
    // },

    {
        timestamps: true,
    }

);

const Product = mongoose.model('Product', productSchema);

export default Product;