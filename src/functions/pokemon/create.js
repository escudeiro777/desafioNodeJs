import mysql from "mysql2/promise";
export const handler = async (event, context) => {
  try {
    const connection = await mysql.createConnection({
      host: "lupa-tyr.com.br",
      user: "u157627371_desavio",
      database: "u157627371_desavio",
      password: "!@Desafio123#$"
    })

    const nome = "nayara"
    const geracao = "25"
    const ataque = "14"
    const tipoPokemon = "doente"



    //  const  [rows, fields] = await connection.execute(`INSERT INTO pokemons(nome,geracao,ataque,tipoPokemon) VALUES(?,?,?,?);`)
    //  const values = [pokemons.nome, pokemons.geracao, pokemons.ataque, pokemons.tipoPokemon]
    // return statuscode = "200";

     const  [rows, fields] = await connection.execute(`INSERT INTO pokemons
      (
      nome,
      geracao,
      ataque,
      tipoPokemon)
      VALUES
      (
      '${nome}',
      ${geracao},
      ${ataque},
      '${tipoPokemon}');`)
      return JSON.stringify(rows);
    
  
  } catch (error) {
    return error.message;
  }
};
