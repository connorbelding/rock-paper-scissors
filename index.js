const results = {
  wins: 0,
  losses: 0,
  draws: 0,
};

function getComputerChoice() {
  const randNum = Math.random();
  if (randNum <= 0.33) return "Rock";
  if (randNum > 0.33 && randNum <= 0.66) return "Paper";
  return "Scissors";
}

function determineResult(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) return "draw";

  if (playerSelection === "rock") {
    if (computerSelection === "scissors") return "win";
    if (computerSelection === "paper") return "lose";
  }

  if (playerSelection === "paper") {
    if (computerSelection === "scissors") return "lose";
    if (computerSelection === "rock") return "win";
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") return "lose";
    if (computerSelection === "paper") return "win";
  }
}

