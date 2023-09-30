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
let rounds = 0;

const PUNTAJE_HUMANO = document.querySelector(".jugadores__h span");
const PUNTAJE_COMPUTADORA = document.querySelector(".jugadores__c span");
const BUTTONS = document.querySelectorAll(".botonera__boton");
const CONFIRMACION = document.querySelector(".confirmacion h2");

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

BUTTONS.forEach(button => {
  button.addEventListener("click", () => {
    rounds ++;
    if (rounds > 4) {
      if (computerPoints > playerPoints) {
        CONFIRMACION.innerText = `YOU LOSE THE GAME!!`;
      } else if (playerPoints > computerPoints) {
        CONFIRMACION.innerText = `YOU WIN THE GAME!!`;
      } else {
        CONFIRMACION.innerText = `IS TIE!!`;
      }
      setTimeout(() => {
        CONFIRMACION.innerText = `F5 TO PLAY AGAIN`;
      }, 2000);
      return
    }

    let computerChoice = getComputerChoice();    
    CONFIRMACION.innerText = playRound(button.innerText.toLowerCase(), computerChoice);
    PUNTAJE_HUMANO.innerText = `${button.innerText} - ${playerPoints}`;
    PUNTAJE_COMPUTADORA.innerText = `${computerChoice} - ${computerPoints}`;    
  });
})