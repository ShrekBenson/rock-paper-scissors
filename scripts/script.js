function getComputerChoice() {
  let randomChoice = Math.floor(Math.random()*100) + 1;
  
  if (randomChoice > 0 && randomChoice <= 33) {
    return "Rock";
  } else if (randomChoice > 33 && randomChoice <= 66) {
    return "Paper";
  } else if (randomChoice > 66){
    return "Scissors";
  }
}

let playerPoints = 0;
let computerPoints = 0;

function playRound(playerChoice, computerChoice) {  
  if (computerChoice === "Rock" && playerChoice.toLowerCase() === "scissors") {
    computerPoints ++;
    return `You lose! ${computerChoice.toLowerCase()} beats ${playerChoice.toLowerCase()}`;
  }
  if (computerChoice === "Rock" && playerChoice.toLowerCase() === "paper") {
    playerPoints ++;
    return `You win! ${playerChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}`;
  }  
  if (computerChoice === "Paper" && playerChoice.toLowerCase() === "rock") {
    computerPoints ++;
    return `You lose! ${computerChoice.toLowerCase()} beats ${playerChoice.toLowerCase()}`;
  }
  if (computerChoice === "Paper" && playerChoice.toLowerCase() === "scissors") {
    playerPoints ++;
    return `You win! ${playerChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}`;
  }  
  if (computerChoice === "Scissors" && playerChoice.toLowerCase() === "paper") {
    computerPoints ++;
    return `You lose! ${computerChoice.toLowerCase()} beats ${playerChoice.toLowerCase()}`;
  }
  if (computerChoice === "Scissors" && playerChoice.toLowerCase() === "rock") {
    playerPoints ++;
    return `You win! ${playerChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}`;
  } else {
    return `${playerChoice.toLowerCase()} vs ${computerChoice.toLowerCase()} is tie!`
  }
}

function game(){
  let round = 1;
  while (round <= 5) {
    let playerChoice = prompt("Rock, Paper or Scissors?");

    if (playerChoice === null) {
      alert("Recarga la pagina para volver al juego");
      round = 6;
    } else if (playerChoice.toLowerCase() !== "rock" && playerChoice.toLowerCase() !== "paper" && playerChoice.toLowerCase() !== "scissors") {
      alert("Valor ingresado invalido");     
    } else{
      console.log(playRound(playerChoice, getComputerChoice()));
      console.log(`Your points: ${playerPoints}     |     computer points: ${computerPoints}`);
      round ++;
    }
  }
  
  if (playerPoints > computerPoints) {
    return "\nYOU WIN THE GAME!";
  } else if (computerPoints > playerPoints) {
    return "\nYOU LOSE THE GAME!";
  } else if (computerPoints === playerPoints){
    return "TIE??!!";
  } else{
    return;
  }
}
console.log(game());