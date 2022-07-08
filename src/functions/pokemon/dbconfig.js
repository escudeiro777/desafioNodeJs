async function connect(){
  if(global.connection && global.connection.state !== 'disconnected')
  return global.connection;
  const mysql = require("mysql2/promise")
  const connection = await mysql.createConnection({
      host: "lupa-tyr.com.br",
      user: "u157627371_desavio",
      database: "u157627371_desavio",
      password: "!@Desafio123#$"
  })
  console.log("conectou!")
  global.connection = connection
  return connection;
}
connect()

module:exports ={}

async function getPokemons(){
  const connection = await connect();
  const [rows] = await connection.query('SELECT * FROM pokemons');
  return rows;
}