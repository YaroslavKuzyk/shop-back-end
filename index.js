import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

const PORT = 5050;
const DB_URL = 'mongodb+srv://admin:admin@cluster0.kenq5sl.mongodb.net/?retryWrites=true&w=majority';
const app = express()

app.use(express.json())
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
startApp()
