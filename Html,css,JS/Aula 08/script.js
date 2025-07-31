const form = document.getElementById('pessoaForm');
const nome = document.getElementById('nome');
const idade = document.getElementById('idade');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let obj = {
        nome: nome.value,
        idade: parseInt(idade.value)
    };
    fetch('http://localhost/3000', {
        method: 'POST',
        body:JSON.stringify(obj),
        headers:{'content-type':'application'}
    })
})




// fetch('http://localhost:3000')
//         .then(requisicao => requisicao.json())
//         .then(vetor => console.table(vetor));

//         let renderizarTabela = () => {
//           let tabela = document.getElementById('tabela');

//           tabela.innerHTML = '';

//           for(let indice=0; indice < vetor.length; indice++){
              
//             let linha =tabela.insertRow(-1);

//             let colunaID = linha.insertCell(0);
//             let colunaNome = linha.insertCell(1);
//             let colunaIdade = linha.insertCell(2);


//             colunaId.innerText = vetor[indice].id;
//             colunaNome.innerText = vetor[indice].nome;
//             colunaId.innerText = vetor[indice].idade;
//             colunaId.innerHTML = `'<button onclick='selecionar(${indice}) class='btn btn-primary'>Selecionar<button>`;
//           }
//         }

        