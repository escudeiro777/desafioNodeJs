import sql from "mssql";
const config = {
  user: 'sa',
  password: 'darede@2022',
  server: 'localhost',
  database: 'desafio',

  pool: { max: 10, min: 0, idleTimeoutMillis: 30000 }, options: { encrypt: true,instanceName: 'SQLEXPRESS'},
  port: 1433
}


export const handler = async (event, context) => {
  try {
    await sql.connect(config)

    return 'foi';
  } catch (error) {
    return error.message;
  }
};
