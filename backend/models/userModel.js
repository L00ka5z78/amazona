import mongoose from "mongoose";

const userSchema = new mongoose.Schema(      //accepts 2 params: fields of schema and options
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false, required: true },

    },

    {
        timestamps: true,
    }

);

const User = mongoose.model('User', userSchema);

export default User;