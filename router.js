import Router from "express";
import PostController from "./Controllers/PostController.js";

const router = new Router()

router.post('/posts', PostController.create )
router.get('/posts', PostController.getAll )

// {
//     "title": "Post 1",
//     "categories": "Categories 1",
//     "price": "5000",
// }