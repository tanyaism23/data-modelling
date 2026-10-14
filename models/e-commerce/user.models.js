import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "Minimum length of the password should be 8!"]
    },
    mobile: {
        countryCode: {
            type: String,
            required: true,
            match: /^\+[1-9]\d{0,3}$/
        },
        number: {
            type: String,
            required: true,
            match: /^\d{4,14}$/
        }
    }
},{ timestamps: true });

export const User = mongoose.model( "User", userSchema );