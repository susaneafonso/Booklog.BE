const express= require('express')
const controler_books=require('./controlers/books')
const cors = require('cors')
const app = express()

const routes= express.Router()
routes.post("/books",controler_books.add_book)
routes.get("/books",controler_books.get_book)

app.use(cors())
app.use(express.json())
app.use('/api',routes)
module.exports=app

app.listen(5000, () => {
  console.log("Server is running on port ")
})