import express from "express";

const APP = express();

export const SERVER = (PORT:number) => {
  APP.listen(PORT, () => {
    console.log("Servidor iniciado na porta 3333");
  });
};
