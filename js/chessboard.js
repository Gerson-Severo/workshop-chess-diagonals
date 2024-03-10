export default {
  draw,
  highlight,
};

// A função 'draw' desenha um tabuleiro de xadrez na página.
function draw(boardEl) {
  // Loop para criar as 8 linhas do tabuleiro
  for (let i = 0; i < 8; i++) {
    // Cria um novo elemento 'div' para a linha
    let rowEl = document.createElement("div");
    // Loop para criar as 8 colunas (células) da linha
    for (let j = 0; j < 8; j++) {
      // Cria um novo elemento 'div' para a célula
      let tileEl = document.createElement("div");
      // Define os atributos de dados para a linha e coluna da célula
      tileEl.dataset.row = i;
      tileEl.dataset.col = j;
      // Anexa a célula à linha
      rowEl.appendChild(tileEl);
    }
    // Anexa a linha ao tabuleiro
    boardEl.appendChild(rowEl);
  }
}

// A função 'highlight' destaca as diagonais maior e menor para a célula fornecida.
function highlight(tileEl) {
  // Seleciona todas as células do tabuleiro
  let allTiles = document.querySelectorAll("#board > div > div");
  // Remove o destaque de todas as células
  allTiles.forEach((tile) => tile.classList.remove("highlighted"));

  // Obtém a linha e coluna da célula fornecida
  let row = parseInt(tileEl.dataset.row);
  let col = parseInt(tileEl.dataset.col);

  // Loop por todas as células
  allTiles.forEach((tile) => {
    // Obtém a linha e coluna da célula atual
    let r = parseInt(tile.dataset.row);
    let c = parseInt(tile.dataset.col);
    // Se a célula está na mesma diagonal maior ou menor que a célula fornecida
    if (r - c === row - col || r + c === row + col) {
      // Adiciona a classe 'highlighted' para destacar a célula
      tile.classList.add("highlighted");
    }
  });
}
