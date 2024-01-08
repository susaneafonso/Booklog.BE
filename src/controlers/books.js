const {conex} = require ("../database.js")
const mysql= require('mysql2')

////////get///////////////////////////////
async function get_book(req,res){
try{
    const connection= await conex()
    const[rows]= await connection.query("Select * from books")
    return res.status(200).json(rows)
}
catch(error){
    console.log(error)
    return res.status(500).json({error:"preciso arrumar o erro"})
}
}
///////////post//////////////////////////////////
async function add_book(req,res){

    console.log(req.body)
    const {ttle_bk,auth_bk,genre_bk,date_publish}=req.body
    const values=[ttle_bk,auth_bk,genre_bk,date_publish]
try{
    if (values.some(value => value === null || value === undefined)) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios." ,requestBody:values}).send()
    }
const connection= await conex()
const sql='insert into books(ttle_bk, auth_bk,genre_bk,date_publish)values(?,?,?,?)'
const result= await connection.query(sql,values)
return res.status(200).json({message:"livro registrado!",requestBody: data}).send()
}
catch(error){
console.error(error)
res.status(500).json({ error: 'Internal Server Error' }).send() 
}
}
//////////////////    delete ////////////////////////////////
async function del_book(req,res){
const {id_bk}= req.params
try{
const connection=await conex()
const result= await connection.query("Delete from books where id_bk=?",[id_bk])
return res.status(200).json({message:"Livro removido!"}).send()
}
catch(error){
    console.log(error)
return res.status(500).json({Error:"Internal Server Error"}.send)
}
}
//////////////////////// update///////////////////////////
async function up_book(req,res){
const {id_bk}= req.params
const data=req.body   
try{
if(!ttle_bk || !auth_bk || !genre_bk || !date_publish){
const{ttle_bk, auth_bk,genre_bk, date_publish}=data
const connection= await conex()
const result= await connection.query("update books set ttle_bk=?, auth_bk=?,genre_bk=?, date_publish=?  where id_bk=?",[ttle_bk, auth_bk,genre_bk, date_publish,id_bk])
console.log(req.body)
return res.status(200).json({message:"Registro Alterado!",requestBody: data}).send()}
} 
catch(error){
console.log(error)
return res.status(500).json({error:"Internal Server Error"}).send()
}

}



module.exports={add_book,get_book,del_book,up_book}

    