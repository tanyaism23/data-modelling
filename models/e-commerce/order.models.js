import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const addressSchema = new mongoose.Schema({
    adressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    }
});

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    orderItems: {
        type: [ orderItemSchema ], //array of orderitems
        required: true
    },
    address : {
        type: addressSchema,
        required: true
    },
    orderStatus: {
        type: String,
        enum: ["PENDING","CONFIRMED","CANCELLED","PROCESSING","SHIPPED","DELIVERED"],
        default: "PENDING"
    }
},{ timestamps: true});

export const Order = mongoose.model( "Order", orderSchema );