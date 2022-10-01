const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const scores = {
  player: 0,
  cpu: 0
}

let gameOver = false;

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  if (computerChoice === playerChoice) return showRoundResult('DRAW!!!!')

  if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      scores.cpu++;
      showRoundResult('YOU LOSE THE ROUND!!!!')
    } else {
      scores.player++;
      showRoundResult('YOU WIN THE ROUND!!!!')
    }
  }

  if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
      scores.cpu++;
      showRoundResult('YOU LOSE THE ROUND!!!!')
    } else {
      scores.player++;
      showRoundResult('YOU WIN THE ROUND!!!!')
    }
  }

  if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      scores.cpu++;
      showRoundResult('YOU LOSE THE ROUND!!!!')
    } else {
      scores.player++;
      showRoundResult('YOU WIN THE ROUND!!!!')
    }
  }

  updateScores();
  isGameOver();


}

function showRoundResult(message) {
  const resultsDiv = document.getElementById('results')
  resultsDiv.textContent = message
}

function getComputerChoice() {
  const randNum = Math.random();
  if (randNum <= 0.33) return "rock";
  if (randNum > 0.33 && randNum <= 0.66) return "paper";
  return "scissors";
}

function updateScores() {
  const playerScoreSpan = document.getElementById('player-score');
  const cpuScoreSpan = document.getElementById('cpu-score');

  playerScoreSpan.textContent = scores.player;
  cpuScoreSpan.textContent = scores.cpu;
}

function isGameOver() {
  if (scores.player >= 5) {
    showRoundResult('YOU WIN THE SET!!!!  CONGRATULATIONS.');
    gameOver = true;
  }

  if (scores.cpu >= 5) {
    showRoundResult('YOU LOSE THE SET!!!!  BETTER LUCK NEXT TIME.');
    gameOver = true;
  }
}

function resetGame() {
  scores.player = 0;
  scores.cpu = 0;

  updateScores();

  gameOver = false;
}

rockButton.addEventListener('click', () => {
  if (gameOver) resetGame()
  playRound('rock')
})
paperButton.addEventListener('click', () => {
  if (gameOver) resetGame()
  playRound('paper')
})
scissorsButton.addEventListener('click', () => {
  if (gameOver) resetGame()
  playRound('scissors')
})
