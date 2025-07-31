//Importar dependências/pacote do Express
const express = require('express');

//Importar dependência/pacote do CORS
const cors = require('cors');

//objeto express (Manipular  rotas e o servidor)
const app = express();

app.use(cors());
//habilitar recerver objeto JSON nas requisições
app.use(express.json());

//Referenciar arquivo de rotas
  const pessoa = require('./rotas/pessoa');

  // Adicionar rotas na aplicação
  app.use('/', pessoa);

app.listen(3000);

