import * as Server from "./server/server.js";
const PORT = Number(process.env.PORT);
Server.SERVER(PORT);