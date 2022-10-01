const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const scores = {
  player: 0,
  cpu: 0
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();

  if (computerChoice === playerChoice) return showRoundResult('DRAW!!!!')

  if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      scores.cpu++;
      showRoundResult('YOU LOSE!!!!')
    } else {
      scores.player++;
      showRoundResult('YOU WIN!!!!')
    }
  }

  if (playerChoice === 'paper') {
    if (computerChoice === 'scissors') {
      scores.cpu++;
      showRoundResult('YOU LOSE!!!!')
    } else {
      scores.player++;
      showRoundResult('YOU WIN!!!!')
    }
  }

  if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      scores.cpu++;
      showRoundResult('YOU LOSE!!!!')
    } else {
      scores.player++;
      showRoundResult('YOU WIN!!!!')
    }
  }

  updateScores();



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

rockButton.addEventListener('click', () => {
  playRound('rock')
})
paperButton.addEventListener('click', () => {
  playRound('paper')
})
scissorsButton.addEventListener('click', () => {
  playRound('scissors')
})

/* let resultsObj = {
  wins: 0,
  losses: 0,
  draws: 0,
};

function getComputerChoice() {
  const randNum = Math.random();
  if (randNum <= 0.33) return "rock";
  if (randNum > 0.33 && randNum <= 0.66) return "paper";
  return "scissors";
}

function determineResult(playerChoice, computerChoice) {
  let message;
  if (playerChoice === computerChoice) {
    resultsObj = { ...resultsObj, draws: resultsObj.draws + 1 };
    message = `Draw!  ${playerChoice} matches ${computerChoice}.`;
  }

  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      resultsObj = { ...resultsObj, wins: resultsObj.wins + 1 };
      message = `You win!  ${playerChoice} beats ${computerChoice}.`;
    }
    if (computerChoice === "paper") {
      resultsObj = { ...resultsObj, losses: resultsObj.losses + 1 };
      message = `You lose!  ${playerChoice} loses to ${computerChoice}.`;
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      resultsObj = { ...resultsObj, wins: resultsObj.wins + 1 };
      message = `You win!  ${playerChoice} beats ${computerChoice}.`;
    }
    if (computerChoice === "scissors") {
      resultsObj = { ...resultsObj, losses: resultsObj.losses + 1 };
      message = `You lose!  ${playerChoice} loses to ${computerChoice}.`;
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      resultsObj = { ...resultsObj, wins: resultsObj.wins + 1 };
      message = `You win!  ${playerChoice} beats ${computerChoice}.`;
    }
    if (computerChoice === "rock") {
      resultsObj = { ...resultsObj, losses: resultsObj.losses + 1 };
      message = `You lose!  ${playerChoice} loses to ${computerChoice}.`;
    }
  }
  return message;
}

function playRound() {
  const computerChoice = getComputerChoice();
  const playerChoice = prompt(
    `Choose 'rock', 'paper', or 'scissors'.`
  ).toLowerCase();

  if (
    playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"
  ) {
    alert(`Answer must be 'rock', 'paper', or 'scissors'.`);
    playRound();
  } else {
    const result = determineResult(playerChoice, computerChoice);
    alert(result);
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  if (resultsObj.wins > resultsObj.losses) {
    return alert("YOU WON THE SET!!!!!");
  }
  if (resultsObj.losses > resultsObj.wins) {
    return alert("YOU LOST THE SET....:(");
  }
  if (resultsObj.losses === resultsObj.wins) {
    return alert("TIED SET!!!!  THERE IS NO WINNER....");
  }
}

game(); */