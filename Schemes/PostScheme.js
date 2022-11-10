import mongoose from "mongoose";

const PostScheme = new mongoose.Schema({
    title: { type: String },
    categories: { type: String },
    price: {type: Number}
})

export default mongoose.model('PostScheme', PostScheme)