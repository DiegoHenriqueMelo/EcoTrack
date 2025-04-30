import { Client } from "pg";

export const client = new Client({
    user:  process.env.USER,
    host:  process.env.HOST,
    database:  process.env.DATABASE,
    password:  process.env.PASSWORD,
    port:  Number(process.env.PORT),
  });

export async function connectDatabaseLogin() {
  try {
    await client.connect();
    console.log("Conectado ao PostgreSQL!");  
  } catch (error) {
    console.error("Erro de conexão:", error);
  }
}
