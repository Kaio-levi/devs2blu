function adicionarAoCarrinho(produto){
    let carrinho = JSON.parse(localStorage.getItem('Carrinho')) || [];
    const produtoExistente = carrinho.find(item => item.id === produto.id);
    if(produtoExistente){
        produtoExistente.quantidade = (produtoExistente.quantidade || 1)+1;
    }
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`${produto.nome} foi adicionado ao carrinho!`);
    
}



function mostrarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const container = document.getElementById('carrinho-container');
    container.innerHTML = '';
    
    if (carrinho.length === 0) {
        container.innerHTML = '<p>O carrinho esta vazio.</p>';
        return;
    }

    carrinho.forEach((produto, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = ` 
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>Categoria: ${produto.categoria}</p>
        <p>Preço: R$${produto.valor.toFixed(2)}</p>
        <p>Estoque: ${produto.qtdEstoque}</p>
        <button onclick="removerDoCarrinho(${index})" class="remove-button">Remover</button>
        `;
        container.appendChild(card);
    });
}

function removerDoCarrinho(index){
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index,1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    mostrarCarrinho();
    alert('Produto removido com sucesso!');
}

function limparCarrinho(){
    localStorage.removeItem('carrinho');
        mostrarCarrinho();
        alert('Carrinho limpo!');
}


window.adicionarAoCarrinho = adicionarAoCarrinho;
window.mostrarCarrinho = mostrarCarrinho;
window.removerDoCarrinho = removerDoCarrinho;
window.limparCarrinho = limparCarrinho;