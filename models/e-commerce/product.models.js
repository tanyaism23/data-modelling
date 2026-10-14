// references
// product category?
// who owns the product?

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: 50,
        maxlength: 200
    },
    productImage: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    stock: {
        default: 0,
        type: Number
    },
    productOwner : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

export const Product = mongoose.model( "Category", productSchema );