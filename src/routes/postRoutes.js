//Camada para centralizar todas as fun~]oes de rotas

import express from "express";
import { listarPosts } from "../controllers/postController.js";

const routes = (app) => {
    // Adiciona middleware para interpretar os corpos das requisições como JSON
    app.use(express.json()); 
    //Rota para buscar todos os posts
    app.get("/posts", listarPosts); // Rota que executa essa lógica sempre que a URL "/posts" for acessada
}

export default routes; //Exportar tudo que pode-se fazer com rotas
