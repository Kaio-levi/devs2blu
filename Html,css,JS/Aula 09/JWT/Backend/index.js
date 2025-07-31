/* 
express;
nodemon;
jSONWEBTOKEN
*/
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

//criar objeto app
const app = express();
//referenciar CORS
app.use(cors());

//Aceitar requisições contendo JSON (body)
app.use(express.json());

//palavra/ Frase secreta
const segredo = 'duvido-vc-acertar-qual-e-a-frase-kkkkk';

//rota para criar o token
app.post('/', (req, res) =>{
    //obter o nome
    // const nome = req.body.nome;
    const {nome} = req.body;
    
    //gerar token
    const token = jwt.sign({nome}, segredo, {expiresIn:'1h'});

    //Retornar
    res.status(200).json(token);
});

//rota para validar o token
app.get('/', (req, res) =>{
    //Extrair Bearer do cabeçalho
    const headers = req.headers.authorization;

    //Extrari o token
    const token = headers.split(' ')[1];

    // try-catch
    try{
        const validaToken = jwt.verify(token, segredo);

        res.status(200).json({mensagem:'Autenticado! O nome informado é '+ validaToken.nome});
    }catch(erro){
        res.status(400).json({mensagem:'Falha ' + erro});
    }
});

//servidor
app.listen(8080);