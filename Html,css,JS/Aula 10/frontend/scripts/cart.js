function adicionarAoCarrinho(produto) {
    if (!produto.id) {
        console.error('Produto sem ID:', produto);
        const message = document.createElement('p');
        message.textContent = 'Erro: Produto inválido.';
        message.className = 'error-message';
        document.body.appendChild(message);
        setTimeout(() => message.remove(), 3000);
        return;
    }

    if (produto.qtdEstoque <= 0){
        const message = document.createElement('p');
        message.textContent = 'Produto fora de estoque!';
        message.className = 'error-message';
        document.body.appendChild(message);
        setTimeout(() => message.remove(), 3000);
        return;
    }

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produtoExistente = carrinho.find(item => item.id === produto.id);
    if (produtoExistente) {
        if (produtoExistente.quantidade >= produto.qtdEstoque) {
            const message = document.createElement('p');
            message.textContent = 'Estoque insuficiente!';
            message.className = 'error-message';
            document.body.appendChild(message);
            setTimeout(() => message.remove(), 3000);
            return;
        }
        produtoExistente.quantidade = (produtoExistente.quantidade || 1) + 1;
    } else {
        carrinho.push({ ...produto, quantidade: 1 });
    }
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`${produto.nome} foi adicionado ao carrinho!`);
}

function mostrarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const container = document.getElementById('carrinho-container');
    container.innerHTML = '';

    const finalizarButton = document.getElementById('finalizar-compra');
    if(finalizarButton){
        finalizarButton.disabled = carrinho.length === 0;
    }

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
        <p>Quantidade: ${produto.quantidade || 1}</p>
        <p>Estoque: ${produto.qtdEstoque}</p>
        <button onclick="removerDoCarrinho(${index})" class="remove-button">Remover</button>
        `;
        container.appendChild(card);
    });

    const total = carrinho.reduce((sum, produto) => sum + produto.valor * (produto.quantidade || 1), 0);
    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<p id="total">Total: R$${total.toFixed(2)}</p>`;
    container.appendChild(totalDiv);
}

function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const produto = carrinho[index];
    if (produto.quantidade > 1) {
        produto.quantidade -= 1;
    } else {
        carrinho.splice(index, 1);
    }
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    mostrarCarrinho();
    const message = document.createElement('p');
    message.textContent = 'Produto removido com sucesso!';
    message.className = 'success-message';
    document.body.appendChild(message);
    setTimeout(() => message.remove(), 3000);
}

function limparCarrinho() {
    localStorage.removeItem('carrinho');
    mostrarCarrinho();
    const message = document.createElement('p');
    message.textContent = 'Carrinho limpo!';
    message.className = 'success-message';
    document.body.appendChild(message);
    setTimeout(() => message.remove(), 3000);
}

async function finalizarCompra() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const container = document.getElementById('carrinho-container');
    const finalizarButton = document.getElementById('finalizar-compra');

    if (finalizarButton) {
        finalizarButton.disabled = true;
    }

    if (carrinho.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'Não é possivel finalizar a compra: o carrinho está vazio!';
        message.className = 'error-message';
        container.appendChild(message);
        setTimeout(() => {
            message.remove();
            if (finalizarButton) finalizarButton.disabled = false;
        }, 3000);
        return;
    }

    try {
        const promessasVerificacao = carrinho.map(async (produto) => {
            if (!produto.id) {
                throw new Error(`Produto sem ID: ${produto.nome}`);
            }
            const res = await fetch(`http://localhost:3000/produtos/${produto.id}`);
            if (!res.ok) {
                throw new Error(`Erro ao buscar estoque de ${produto.nome}`);
            }
            const dados = await res.json();
            return { produto, estoque: dados.qtdEstoque };
        });

        const resultados = await Promise.all(promessasVerificacao);

        for (let i = 0; i < resultados.length; i++) {
            const { produto, estoque } = resultados[i];
            if (estoque < produto.quantidade) {
                const message = document.createElement('p');
                message.textContent = `Estoque insuficiente para ${produto.nome}!`;
                message.className = 'error-messegr';
                container.appendChild(message);
                setTimeout(() => {
                    message.remove();
                    if (finalizarButton) finalizarButton.disabled = false;
                }, 3000);
                return;
            }
        }

        const promessasAtualizacao = resultados.map(async ({ produto, estoque }) => {
            const novoEstoque = estoque - produto.quantidade;
            const res = await fetch(`http://localhost:3000/produtos/${produto.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ qtdEstoque: novoEstoque }),
            })
            if (!res.ok) {
                throw new Error(`Erro ao atualizar estoque de ${produto.nome}`);
            }
            return res.json();
        })
        await Promise.all(promessasAtualizacao);

        localStorage.removeItem('carrinho');
        mostrarCarrinho();

        const message = document.createElement('p');
        message.textContent = 'Compra finalizada com sucesso!';
        message.className = 'success-message';
        container.appendChild(message);
        setTimeout(() => {
            message.remove();
            if (finalizarButton) finalizarButton.disabled = false;
        }, 10000);
    } catch (error) {
        const message = document.createElement('p');
        message.textContent = `Erro ao finalizar compra: ${error.message}`;
        message.className = 'error-message';
        container.appendChild(message);
        setTimeout(() => {
            message.remove();
            if (finalizarButton) finalizarButton.disabled = false;
        }, 10000);
    }



}

window.adicionarAoCarrinho = adicionarAoCarrinho;
window.mostrarCarrinho = mostrarCarrinho;
window.removerDoCarrinho = removerDoCarrinho;
window.limparCarrinho = limparCarrinho;