// Matriz 3x3 para o tabuleiro
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  // Jogadores
  let currentPlayer = 'X'; // Jogador inicial
  let gameOver = false;
  
  // Função para desenhar o tabuleiro no console
  function printBoard() {
    console.log(board.map(row => row.join(' | ')).join('\n---------\n'));
  }
  
  // Função para fazer uma jogada
  function makeMove(row, col) {
    if (gameOver) {
      console.log("O jogo acabou!");
      return;
    }
    
    if (row < 0 || row > 2 || col < 0 || col > 2 || board[row][col] !== '') {
      console.log("Jogada inválida! Tente novamente.");
      return;
    }
  
    // Realiza a jogada
    board[row][col] = currentPlayer;
    
    // Imprime o tabuleiro
    printBoard();
    
    // Verifica se há um vencedor
    if (checkWinner()) {
      console.log(`Jogador ${currentPlayer} venceu!`);
      gameOver = true;
    } else {
      // Troca o jogador
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
  
  // Função para verificar se há um vencedor
  function checkWinner() {
    // Verificar linhas, colunas e diagonais
    for (let i = 0; i < 3; i++) {
      if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        return true; // Linha
      }
      if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        return true; // Coluna
      }
    }
  
    // Verificar diagonais
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return true; // Diagonal principal
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      return true; // Diagonal secundária
    }
  
    return false; // Não há vencedor
  }
  
  // Função para reiniciar o jogo
  function restartGame() {
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    currentPlayer = 'X';
    gameOver = false;
    console.log("Jogo reiniciado.");
    printBoard();
  }
  
  // Exemplo de jogadas
  makeMove(0, 0); // Jogador X
  makeMove(1, 1); // Jogador O
  makeMove(0, 1); // Jogador X
  makeMove(1, 0); // Jogador O
  makeMove(0, 2); // Jogador X vence!
  