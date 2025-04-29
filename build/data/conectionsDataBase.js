import { Client } from "pg";
export const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'Didialemanha1?',
    port: 5432,
});
export async function connectDatabaseLogin() {
    try {
        await client.connect();
        console.log("Conectado ao PostgreSQL!");
    }
    catch (error) {
        console.error("Erro de conexão:", error);
    }
}
