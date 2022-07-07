import mysql from "mysql2/promise";

export const handler = async (event, context) => {
  try {
    const connection = await mysql.createConnection({
      host: "lupa-tyr.com.br",
      user: "u157627371_desavio",
      database: "u157627371_desavio",
      password: "!@Desafio123#$"
    })

    const nome = "Pikachuchu"
    const geracao = 1
    const ataque = 99
    const tipoPokemon = "Elétrico"

    const [rows, fields] = await connection.execute(`INSERT INTO u157627371_desavio.pokemons
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

