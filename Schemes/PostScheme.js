import mongoose from "mongoose";

const PostScheme = new mongoose.Schema({
    id: { type: Number },
    title: { type: String },
    categories: { type: String },
    price: {type: Number}
})

export default mongoose.model('PostScheme', PostScheme)