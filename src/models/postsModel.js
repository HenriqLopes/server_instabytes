// responsabilidade/camada que faz a conexão com o banco 

import conectarAoBanco from "../config/dbConfig.js"; // Importa a função para conectar ao banco de dados

// Conecta ao banco de dados usando a string de conexão salva em uma variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); 

// Função assíncrona para buscar todos os posts no banco de dados
export async function getTodosPosts() {
    const db = conexao.db("imersao-instabytes"); // Obtém uma referência ao banco de dados "imersao-instabytes"
    const colecao = db.collection("posts"); // Obtém uma referência à coleção "posts" dentro do banco
    return colecao.find().toArray(); // Busca todos os documentos da coleção e os retorna como um array
}