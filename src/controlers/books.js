const {conex} = require ("../database.js")

const mysql= require('mysql2')

async function get_book(req,res){
try{
    const connection= await conex()
    const[rows]= await connection.query("Select * from books")
    return res.status(200).json(rows).send()
}
catch(error){
    console.log(error)
    res.status(500).json({error:"preciso arrumar o erro"}).send()
}
}

async function add_book(req,res){
const connection= await conex()
const data= req.body
try{
const{ttle_bk, auth_bk,genre_bk, date_publish}=data
const result= await connection.query("insert into books(ttle_bk, auth_bk,genre_bk, date_publish)values(?,?,?,?)",[ttle_bk, auth_bk,genre_bk, date_publish])
return res.status(200).json({message:"livro registrado!"}).send()
}
catch(error){
console.error(error)
res.status(500).json({ error: 'Internal Server Error' }).send() 
}
}
module.exports={add_book,get_book}

    