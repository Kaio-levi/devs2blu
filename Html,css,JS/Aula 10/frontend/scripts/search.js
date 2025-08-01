   //pesquisa por categoria:
    //Capura o formulario
    const form = document.getElementById('form-busca');
    const resultadosDiv = document.getElementById('resultados');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const categoria = form.querySelector('input[name="categoria"]').value.trim();

      if (!categoria) {
        alert("Digite uma categoria.")
        return;
      }

      try {
        const response = await fetch(`http://localhost:3000/produtos?categoria=${encodeURIComponent(categoria)}`);

        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }

        const produtos = await response.json();

        const container = document.getElementById('produtos-container');
        container.innerHTML = '';

        if (produtos.length === 0) {
          container.innerHTML = `<p>Nenhum produto encontrado na categoria "${categoria}".</p>`;
          return;
        }

        produtos.forEach(produto => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Categoria: ${produto.categoria}</p>
            <p>Preço: R$${produto.valor.toFixed(2)}</p>
            <p>Estoque: ${produto.qtdEstoque}</p>
            <button class="buy-button" date-produto'${JSON.stringify(produto)}''>Adicionar ao carrinho</button>
          `;
          container.appendChild(card);
        });

      } catch (error) {
        container.innerHTML = `<P>Erro: ${error.message}.</p>`;
      }
    });

    