//Camada com responsabilidade de lidar com as requisições e respostas

import { getTodosPosts } from "../models/postsModel.js";

export async function listarPosts (req, res)  {
    //chama a função para buscar os posts
    const posts = await getTodosPosts(); 
    res.status(200).json(posts); // Retorna os posts no formato JSON com o status HTTP 200 (sucesso)
}