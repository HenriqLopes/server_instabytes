import express from "express";

const app = express(); //cria uma constante que terá a chamada para as funções do servidor
app.listen(3000, () => {
    console.log("Servidor escutando..."); //Abri uma função nova para o servidor 3000 = porta usada para servidores locais
});

app.get("/", (req, res) => {
    res.status(200).send("Boas vindas à imersão!"); ///Manda uma resposta que tem status 200 e um texto
}); //Rota que determinada solicitação será executada quando for acessada req - requisição res - resposta