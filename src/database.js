require('dotenv').config()
const mysql = require('mysql2/promise')

async function conex(){
try{
const connection = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

console.log("Conexão funcionando")
console.log(process.env.host);
console.log(process.env.user);
console.log(process.env.password);

const [rows, fields] = await connection.query('SELECT 1');
console.log('Resultado da consulta:', rows)
return connection
} catch (error) {
console.error('Erro na criação da pool de conexões:', error.message);
}
}
module.exports = {conex}