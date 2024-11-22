import express from "express";

const posts = [ // lista com objetos de posts
    {id: "1",descricao: "Gatinho de teste",imagem: "http://placecats.com/mill/300/150",},
    {id:"2",descricao: "Gato fazendo panqueca",imagem: "http://placecats.com/mill/300/150",},
    {id:"3",descricao: "Gatinho brincando no jardim", imagem: "http://placecats.com/mill/300/150",},
    {id: "4",descricao: "Gatinho dormindo",imagem: "http://placecats.com/mill/300/150",},
];

const app = express(); //cria uma constante que terá a chamada para as funções do servidor
app.use(express.json()); //informa que os dados em formado de objetos serão transofmrados em json

app.listen(3000, () => {
    console.log("Servidor escutando..."); //Servidor escutando as requisições feitas na porta feita 3000 = porta usada para servidores locais
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts); //Manda as strings do array para formato json
}); //Rota que determinada solicitação será executada quando for acessada req - requisição res - resposta

function buscarPostPorID(id) { 
    return posts.findIndex((post) => { 
        return post.id == Number(id); //Entra no array e busca um objeto com o ID especificado
    });
}

app.get("/posts/:id", (req, res) => { //identifica os posts individualmente, com base no ID
    const index = buscarPostPorID(req.params.id); //recebe dos parâmetros o ID do post
    res.status(200).json(posts[index]);
});