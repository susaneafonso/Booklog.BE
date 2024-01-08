const express= require('express')
const controler_books=require('./controlers/books')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const routes= express.Router()
routes.post("/books",controler_books.add_book)
routes.get("/books",controler_books.get_book)
routes.delete("/books/:id_bk",controler_books.del_book)
routes.put("/books/:id_bk",controler_books.up_book)

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use((req, res, next) => {
  console.log(req.method, req.url, req.body);
  next()
})
app.use('/api',routes)

module.exports=app

app.listen(5500, () => {
  console.log("Server is running on port ")
})