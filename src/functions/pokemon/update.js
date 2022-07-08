import mysql from "mysql2/promise";

export const handler = async (event, context) => {
  try {
    const connection = await mysql.createConnection({
      host: "lupa-tyr.com.br",
      user: "u157627371_desavio",
      database: "u157627371_desavio",
      password: "!@Desafio123#$"
    })


    const [rows, fields] = await connection.execute("UPDATE pokemons SET nome ='Charizard' WHERE nome = 'pikachu'")
    return JSON.stringify(rows);
  } catch (error) {
    return error.message;
  }
};

