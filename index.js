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
  console.log(`${playerChoice} (you) vs ${computerChoice} (cpu)`);
  if (playerChoice === computerChoice) {
    results = { ...results, draws: results.draws + 1 };
  }

  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      results = { ...results, wins: results.wins + 1 };
    }
    if (computerChoice === "paper") {
      results = { ...results, losses: results.losses + 1 };
    }
  }

  if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      results = { ...results, wins: results.wins + 1 };
    }
    if (computerChoice === "scissors") {
      results = { ...results, losses: results.losses + 1 };
    }
  }

  if (playerChoice === "scissors") {
    if (computerChoice === "paper") {
      results = { ...results, wins: results.wins + 1 };
    }
    if (computerChoice === "rock") {
      results = { ...results, losses: results.losses + 1 };
    }
  }
  console.log(results);
}

