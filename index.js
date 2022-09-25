let roundsPlayed = 0;

let results = {
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
    results = { ...results, draws: results.draws + 1 };
    message = `Draw!  ${playerChoice} matches ${computerChoice}.`;
  }

  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      results = { ...results, wins: results.wins + 1 };
      message = `You win!  ${playerChoice} beats ${computerChoice}.`;
    }
    if (computerChoice === "paper") {
      results = { ...results, losses: results.losses + 1 };
      message = `You lose!  ${playerChoice} loses to ${computerChoice}.`;
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      results = { ...results, wins: results.wins + 1 };
      message = `You win!  ${playerChoice} beats ${computerChoice}.`;
    }
    if (computerChoice === "scissors") {
      results = { ...results, losses: results.losses + 1 };
      message = `You lose!  ${playerChoice} loses to ${computerChoice}.`;
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      results = { ...results, wins: results.wins + 1 };
      message = `You win!  ${playerChoice} beats ${computerChoice}.`;
    }
    if (computerChoice === "rock") {
      results = { ...results, losses: results.losses + 1 };
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
    console.log(result);
    roundsPlayed++;
    if (roundsPlayed < 5) playRound();
  }
}

playRound();
