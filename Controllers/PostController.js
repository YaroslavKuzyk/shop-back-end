import PostScheme from "../Schemes/PostScheme.js";

class PostController {
    async create(req, res){
        try {
            const { title, categories, price } = req.body
            const id = Date.now()
            const post = await PostScheme.create({ id, title, categories, price })
            res.status(200).json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req, res){
        try {
            const posts = await PostScheme.find()
            return res.status(200).json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController()