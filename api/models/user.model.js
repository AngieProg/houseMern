import mongoose from "mongoose";

//Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        require: true,
        unique: true,
    },
    email: {
        type: String, 
        require: true,
        unique: true,
    },
    password: {
        type: String, 
        require: true,
    }
}, {timestamps: true});

//Model
const User = mongoose.model('User', userSchema);

export default User;