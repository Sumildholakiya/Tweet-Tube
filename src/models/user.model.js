import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            trim: true
        },
        fullname: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, "Password is Required"]
        },
        avatar: {
            type: String,
            required: true
        },
        coverImage: {
            type: String,
        },
        watchHistory: [
            {
                type:Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        refreshToken: {
            type:String
        }
    },
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)