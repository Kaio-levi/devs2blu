// importando o pacote/dependencia do Express
const express = require('express');
const router = express.Router();


//Vetor para armazernar dados pessoas
let vetor = [
  { id: 1, nome: 'Alice', idade: 23 },
  { id: 2, nome: 'Kaio', idade: 16 }
];

//ID da pessoa
let id = 3;

//objeto Express(Manipular rotas e servidor)
router.get('/', (req, res) => {
  res.status(200).json(vetor);
});

//Rota para efetuar uma requisição POST
router.post('/', (req, res) => {
  // obter nome e idade
  // const nome = req.body.nome;
  // const idade = req.body.idade;

  const { nome, idade } = req.body;

  //validar se o nome e a idade foram disponibilizados
  if (!nome || !idade) {
    res.status(400).json({ mensagem: 'O nome e a idade são obrigatorios!' });
  }

  //criar objeto do tipo pessoa/usuario
  // const obj = {'id':id, 'nome':nome, 'idade':idade};
  const obj = { id, nome, idade }

  //Cadastrar no vetor
  vetor.push(obj);

  //Incrementar o id
  id++;

  //retorno
  res.status(201).json(obj);

});

//rota para efetuar a requisição PUT
router.put('/:idPessoa', (req, res) => {
  //Extrair o idPessoa
  const idPessoa = parseInt(req.params.idPessoa);

  //verificar se o idPessoa existe no vetor
  const indiceVetor = vetor.findIndex(p => p.id === idPessoa);
  if (indiceVetor === -1) {
    res.status(404).json({ mensagem: 'Pessoa não encontrada' });
  }

  //extrai nome e idade da requisição
  const { nome, idade } = req.body;

  //validar se o nome e a idade foram disponibilizados
  if (!nome || !idade) {
    res.status(400).json({ mensagem: 'O nome e a idade são obrigatorios!' });
  }

  //Criar objeto com os dados atualizdos
  const obj = {
    'id': idPessoa,
    nome,
    idade
  }


  //Retornar objeto  
  res.status(200).json(obj);
});

//rota para efetuar a requisição DELETE
router.delete('/:idPessoa', (req, res) => {
  //Extrair o idPessoa
  const idPessoa = parseInt(req.params.idPessoa);

  //verificar se o idPessoa existe no vetor
  const indiceVetor = vetor.findIndex(p => p.id === idPessoa);
  if (indiceVetor === -1) {
    res.status(404).json({ mensagem: 'Pessoa não encontrada' });
  }

  //remover dados do vetor
  vetor.splice(indiceVetor, 1);

  //Retornar objeto  
  res.status(200).json({mensagem: 'Pessoa removida com sucesso'});
});

module.exports = router