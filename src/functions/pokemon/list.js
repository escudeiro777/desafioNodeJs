import sql from "mssql";

const config = {
  user: process.env.sa,
  password: process.env.darede2022,
  server: 'localhost',
  database: process.env.desafio,

  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true,
    // instanceName: 'SQLEXPRESS'
  },
  port: 1433
}


export const handler = async (event, context) => {
  try {
    await sql.connect(config)
    const resultado = await sql.query`SELECT * FROM pokemon`
    return resultado;
  } catch (error) {
    return error.message;
  }
};

// import sql from "mssql"
// const config = {
//   server: 'localhost',
//   port: 1433,
//   user:process.env.sa,
//   password:process.env.darede2022,
//   database:process.env.desafio,
//   pool: {
//     max: 10,
//     min: 0,
//     idleTimeoutMillis: 30000
//   },
// }
// export const handler = async (event, context) => {
//   try {
//     // make sure that any items are correctly URL encoded in the connection string
//     await sql.connect(config)
//     const result = await sql.query`select * from pokemon`
//     console.dir(result)
//    } catch (err) {
//     // ... error checks
//    }
// };

// // const config = {
// //   user: 'sa',
// //   password: 'darede@2022',
// //   server: 'DAREDE-001079',
// //   database: 'desafio',
// //   options: {
// //     trustedconnection: true,
// //     enableArithAbort: true,
// //     instancename: "",
// //   },
// //   port: 1433
// // };

// // async () => {
// //   try {
// //    // make sure that any items are correctly URL encoded in the connection string
// //    await sql.connect(config)
// //    const result = await sql.query`select * from pokemon`
// //    console.dir(result)
// //   } catch (err) {
// //    // ... error checks
// //   }
// // }


// // async function listPokemon() {
// //   try {
// //     let pool = await sql.connect(config)
// //     let resultado = await pool.request().query('select * from pokemon')
// //     console.log(resultado)
// //     sql.close();
// //   } catch (error) {
// //     console.log(err.message)
// //   }
// // }
// // module.exports ={
// //   getPokemons : getPokemons
// // }
// // export const handler = async (event, context) => {
// //   try {
// //     await sql.connect(config)

// //     return (resultado);
// //   } catch (error) {
// //     return error.message;
// //   }
// // };
