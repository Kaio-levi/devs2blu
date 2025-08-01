//função de mostrar todos os produtos pelo menu (nav)
function mostrarTudo(event) {
  try {
    event.preventDefault();
    fetch('http://localhost:3000/produtos')
      .then(res => res.json())
      .then(produtos => {
        const container = document.getElementById('produtos-container');
        container.innerHTML = '';

        produtos.forEach(produto => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Categoria: ${produto.categoria}</p>
            <p>Preço: R$${produto.valor.toFixed(2)}</p>
            <p>Estoque: ${produto.qtdEstoque}</p>
            <button  class="buy-button" data-produto='${JSON.stringify(produto)}'>Adicionar ao carrinho</button>
            `;
          container.appendChild(card);
        });
      })
  } catch (error){
    container.innerHTML = `<p>Erro: ${error.message}</p>`;
  }
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
            <button class="buy-button" data-produto='${JSON.stringify(produto)}'>Adicionar ao carrinho</button>
          `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = `<p>Erro: ${error.message}</p>`;
  }

}

async function mostrarMonitores(event) {
  event.preventDefault();

  try {
    const response = await fetch('http://localhost:3000/produtos?categoria=Monitor');
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos');
    }
    const produtos = await response.json();
    const container = document.getElementById('produtos-container');
    container.innerHTML = '';

    if (produtos.length === 0) {
      container.innerHTML = '<p>Nenhum Monitor encontrado.</p>';
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
            <button class="buy-button" data-produto='${JSON.stringify(produto)}'>Adicionar ao carrinho</button>
          `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = `<p>Erro: ${error.message}</p>`;
  }

}

async function mostrarTeclados(event) {
  event.preventDefault();

  try {
    const response = await fetch('http://localhost:3000/produtos?categoria=Teclado');
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos');
    }
    const produtos = await response.json();
    const container = document.getElementById('produtos-container');
    container.innerHTML = '';

    if (produtos.length === 0) {
      container.innerHTML = '<p>Nenhum Teclado encontrado.</p>';
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
            <button class="buy-button" data-produto='${JSON.stringify(produto)}'>Adicionar ao carrinho</button>
          `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = `<p>Erro: ${error.message}</p>`;
  }

}

async function mostrarMouses(event) {
  event.preventDefault();

  try {
    const response = await fetch('http://localhost:3000/produtos?categoria=Mouse');
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos');
    }
    const produtos = await response.json();
    const container = document.getElementById('produtos-container');
    container.innerHTML = '';

    if (produtos.length === 0) {
      container.innerHTML = '<p>Nenhum Mouse encontrado.</p>';
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
            <button class="buy-button" data-produto='${JSON.stringify(produto)}'>Adicionar ao carrinho</button>
          `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = `<p>Erro: ${error.message}</p>`;
  }

}

async function mostrarHeadsets(event) {
  event.preventDefault();

  try {
    const response = await fetch('http://localhost:3000/produtos?categoria=Headset');
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos');
    }
    const produtos = await response.json();
    const container = document.getElementById('produtos-container');
    container.innerHTML = '';

    if (produtos.length === 0) {
      container.innerHTML = '<p>Nenhum Headset encontrado.</p>';
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
            <button class="buy-button" data-produto='${JSON.stringify(produto)}'>Adicionar ao carrinho</button>
          `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = `<p>Erro: ${error.message}</p>`;
  }

}

async function mostrarArmazenamentos(event) {
  event.preventDefault();

  try {
    const response = await fetch('http://localhost:3000/produtos?categoria=Armazenamento');
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos');
    }
    const produtos = await response.json();
    const container = document.getElementById('produtos-container');
    container.innerHTML = '';

    if (produtos.length === 0) {
      container.innerHTML = '<p>Nenhum HD, SSD ou pendrive encontrado.</p>';
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
            <button class="buy-button" data-produto='${JSON.stringify(produto)}'>Adicionar ao carrinho</button>
          `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = `<p>Erro: ${error.message}</p>`;
  }

}

async function mostrarFontes(event) {
  event.preventDefault();

  try {
    const response = await fetch('http://localhost:3000/produtos?categoria=Fonte');
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos');
    }
    const produtos = await response.json();
    const container = document.getElementById('produtos-container');
    container.innerHTML = '';

    if (produtos.length === 0) {
      container.innerHTML = '<p>Nenhum Fonte encontrado.</p>';
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
            <button class="buy-button" data-produto='${JSON.stringify(produto)}'>Adicionar ao carrinho</button>
          `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = `<p>Erro: ${error.message}</p>`;
  }

}

async function mostrarGabinetes(event) {
  event.preventDefault();

  try {
    const response = await fetch('http://localhost:3000/produtos?categoria=Gabinete');
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
            <button class="buy-button" data-produto='${JSON.stringify(produto)}'>Adicionar ao carrinho</button>
          `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = `<p>Erro: ${error.message}</p>`;
  }

}

async function mostrarCadeiraGamer(event) {
  event.preventDefault();

  try {
    const response = await fetch('http://localhost:3000/produtos?categoria=Cadeira-Gamer');
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos');
    }
    const produtos = await response.json();
    const container = document.getElementById('produtos-container');
    container.innerHTML = '';

    if (produtos.length === 0) {
      container.innerHTML = '<p>Nenhum Cadeira-Gamer encontrado.</p>';
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
            <button class="buy-button" data-produto='${JSON.stringify(produto)}'>Adicionar ao carrinho</button>
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
            <button class="buy-button" data-produto='${JSON.stringify(produto)}'>Adicionar ao carrinho</button>
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
            <p>Preço: R$${produto.valor.toFixed(2)}</p>
            <p>Estoque: ${produto.qtdEstoque}</p>   
            <button class="buy-button" data-produto='${JSON.stringify(produto)}'>Adicionar ao carrinho</button>
          `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = `<p>Erro: ${error.message}</p>`;
  }
}