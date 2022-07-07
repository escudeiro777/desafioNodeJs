import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: "lupa-tyr.com.br",
    user: "u157627371_desavio",
    database: "u157627371_desavio",
    password: "!@Desafio123#$"
  })