function getComputerChoice() {
  const randNum = Math.random();
  if (randNum <= 0.33) return "Rock";
  if (randNum > 0.33 && randNum <= 0.66) return "Paper";
  return "Scissors";
}
