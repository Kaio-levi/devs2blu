//função de mostrar todos os produtos pelo menu (nav)
    function mostrarTudo(event) {
      event.preventDefault();
      fetch('http://localhost:3000/produtos')
        .then(res => res.json())
        .then(produtos => {
          const container = document.getElementById('produtos-container');
          const card = document.getElementById('produtos');

          produtos.forEach(produto => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Categoria: ${produto.categoria}</p>
            <p>Preço: R$${produto.valor.toFixed(2)}</p>
            <p>Estoque: ${produto.qtdEstoque}</p>
            <button onclick='adicionarAoCarrinho(${JSON.stringify(produto)})' class="buy-button">Adicionar ao carrinho</button>
            `;
            container.appendChild(card);
          });
        })
    }
                
    //função de mostrar pela categoria Processadores
    async function mostrarProcessadores(event) {
      event.preventDefault();

      try {
        const response = await fetch('http://localhost:3000/produtos?categoria=Processador');
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        const produtos = await response.json();
        const container = document.getElementById('produtos-container');
        container.innerHTML = '';

        if (produtos.length === 0) {
          container.innerHTML = '<p>Nenhum processador encontrado.</p>';
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
            <button onclick='adicionarAoCarrinho(${JSON.stringify(produto)})' class="buy-button">Adicionar ao carrinho</button>
          `;
          container.appendChild(card);
        });
      } catch (error) {
        container.innerHTML = `<p>Erro: ${error.message}</p>`;
      }

    }

    //mostra os produtos da categoria placasdevideos
    async function mostrarPlacasDeVideos(event) {
      event.preventDefault();

      try {
        const response = await fetch('http://localhost:3000/produtos?categoria=Placa-de-Video');
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }

        const produtos = await response.json();
        const container = document.getElementById('produtos-container');
        container.innerHTML = '';

        if (produtos.length === 0) {
          container.innerHTML = '<p>Nenhum produto encontrado</p>';
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
            <button onclick='adicionarAoCarrinho(${JSON.stringify(produto)})' class="buy-button">Adicionar ao carrinho</button>
          `;
          container.appendChild(card);
        });
      } catch (error) {
        const container = document.getElementById('produtos-container');
        container.innerHTML = `<p>Erro: ${error.message}</p>`;
      }
    }

    //mostra os produtos da categoria memoria RAM
    async function mostrarRAM(event) {
      event.preventDefault();

      try {
        const response = await fetch('http://localhost:3000/produtos?categoria=Memória-RAM');
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }

        const produtos = await response.json();
        const container = document.getElementById('produtos-container');
        container.innerHTML = '';

        if (produtos.length === 0) {
          container.innerHTML = '<p>Nenhum Produto encontrado</p>';
          return;
        }

        produtos.forEach(produto => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Categoria: ${produto.categoria}</p>
            <p>Preço: ${produto.valor.toFixed(2)}</P>
            <p>Estoque: ${produto.qtdEstoque}</p>   
            <button onclick='adicionarAoCarrinho(${JSON.stringify(produto)})' class="buy-button">Adicionar ao carrinho</button>
          `;
          container.appendChild(card);
        });
      } catch (error) {
        container.innerHTML = `<p>Erro: ${error.message}</p>`;
      }
    }