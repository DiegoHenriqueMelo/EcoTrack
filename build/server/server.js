import express from "express";
import cors from "cors";
import * as BD from "../data/conectionsDataBase.js";
import * as Controller from "../controller/controler.js";
const APP = express();
APP.use(cors());
APP.use(express.json());
export const SERVER = (PORT) => {
    APP.listen(PORT, () => {
        console.log("Servidor iniciado na porta 3333");
    });
    APP.post("/login", async (req, res) => {
        const { user_name, birthday_date, email, user_password, user_password_confirmed, } = req.body;
        console.log(req.body);
        if (Controller.controllerLogin(user_password, user_password_confirmed)) {
            try {
                await BD.connectDatabaseLogin();
                const result = await BD.client.query("INSERT INTO tb_login (user_name, birthday_date, email, user_password) VALUES ($1, $2, $3, $4)", [user_name, birthday_date, email, user_password]);
                res.status(200).json({ message: "Cadastro realizado com sucesso!" });
            }
            catch (error) {
                console.error("Erro ao cadastrar:", error);
                res.status(500).json({ error: "Erro ao cadastrar" });
            }
        }
        else {
            res.status(500).json({ error: "Senhas não conferem" });
        }
    });
};
