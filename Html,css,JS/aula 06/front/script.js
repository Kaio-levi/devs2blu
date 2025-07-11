//vetor
let enderecos = [];

//requisição
fetch('http://localhost:3000/enderecos')
.then(res => res.json())
.then(p => {
    enderecos = e;

    renderizarTabela();
}
);


//função para gerar uma tabela
let renderizarTabela = () => {
    let tabela = document.getElementById('tabela');

    //limpar tabela

    tabela.innerHTML = '';

    for(let indice = 0; indice < enderecos.length;indice++){
        //criar linha da tabela
        let linha = tabela.insertRow(-1);
        
        //criar a linha da tabela <td>
        let colunaId = linha.insertCell(0);
        let colunaNome = linha.insertCell(1);
        let colunaCEP = linha.insertCell(2);
        let colunaEstado = linha.insertCell(3);
        let colunaCidade = linha.insertCell(4);
        let colunaBairro = linha.insertCell(5);
        let colunaLogradouro = linha.insertCell(6);
        let colunaSelecionar = linha.insertCell(7);

        colunaId.innerText = enderecos[indice].id;
        colunaNome.innerText = enderecos[indice].nome;
        colunaCEP.innerText = enderecos[indice].cep;
        colunaEstado.innerText = enderecos[indice].estado;
        colunaCidade.innerText = enderecos[indice].cidade;
        colunaBairro.innerText = enderecos[indice].bairro;
        colunaLogradouro.innerText = enderecos[indice].logradouro;
        colunaSelecionar.innerHTML = `'<button onclick='selecionar(${indice})' class btn btn-primary>Selecionar<button>`;
    }
}