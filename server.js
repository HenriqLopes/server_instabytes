import express from "express"; 
import routes from "./src/routes/postRoutes.js";

const app = express(); 
routes(app); //fução para listar todas as rotas do server

// Inicia o servidor na porta 3000 e define uma função callback para logar quando ele estiver ativo
app.listen(3000, () => {
    console.log("Servidor escutando...");
});