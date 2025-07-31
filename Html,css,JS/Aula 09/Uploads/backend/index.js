/*
    PACOTES/DEPENDECIAS
    -EXPRESS;
    -NODEMON;
    -CORS;
    -EXPRESS-FILEUPLOAD.
*/

//Importar o Express
const express = require('express');

//importar o CORS
const cors = require('cors');

//import o Express-Fileupload
const fileupload = require('express-fileupload');

// Importar o Path
const path = require('path');

// Criar um objeto app
const app = express();

//adicionar o cors
app.use(cors());

//Adicionar o fileupload
app.use(fileupload());

//Criar rota para realizar o upload (form-data)
app.post('/', (req, res) => {
    //Obter o arquivo
    const arquivo = req.files.arquivo;

    //definir caminho do upload e o nome do arquivo
    const destino = path.join(__dirname, 'uploads', arquivo.name);
    
    //mover arquivo
    arquivo.mv(destino);

    //retorno da API
    res.status(200).json({mensagem:"Upload realizado com sucesso! "});

});

//servidor
app.listen(8080);