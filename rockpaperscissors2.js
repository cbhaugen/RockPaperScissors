//computer's choice
function computerPlay(){
  let computerChoice = Math.floor(Math.random()*3);
    switch (computerChoice) {
      case 0:
      return "rock";
      break;

      case 1:
      return "paper";
      break;

      case 2:
      return "scissors";
    }
};

let playerScore = 0;
let computerScore = 0;
let draw = 0;
let round = 0;

document.addEventListener('DOMContentLoaded', function() {
  const rock = document.querySelector('#rock');
  const paper = document.querySelector('#paper');
  const scissors = document.querySelector('#scissors');

  rock.addEventListener('click', () => {playGame("rock", computerPlay())});
  paper.addEventListener('click', () => {playGame("paper", computerPlay())});
  scissors.addEventListener('click', () => {playGame("scissors", computerPlay())});
});



function playGame (playerSelection, computerSelection) {
  document.getElementById("playerSelect").innerHTML = playerSelection;
  document.getElementById("computerSelect").innerHTML = computerSelection;
  while (round < 5) {
    if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        computerScore++;
        round++;
        document.getElementById("computerScore").innerHTML = computerScore;
        document.getElementById("roundScore").innerHTML = "Lose Round";
        return ("You lose this round!");
      } else if (computerSelection === "scissors") {
        playerScore++;
        round++;
        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("roundScore").innerHTML = "Win Round";
        return ("You win this round!");
      } else {
        draw++;
        round++;
        document.getElementById("tieScore").innerHTML = draw;
        document.getElementById("roundScore").innerHTML = "Tie";
        return("It's a tie!");
      }
    }
    if (playerSelection === "paper") {
      if (computerSelection === "scissors") {
        computerScore++;
        round++;
        document.getElementById("computerScore").innerHTML = computerScore;
        document.getElementById("roundScore").innerHTML = "Lose Round";
        return ("You lose this round!");
      } else if (computerSelection === "rock") {
        playerScore++;
        round++;
        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("roundScore").innerHTML = "Win Round";
        return ("You win this round!");
      } else {
        draw++;
        round++;
        document.getElementById("tieScore").innerHTML = draw;
        document.getElementById("roundScore").innerHTML = "Tie";
        return("It's a tie!");
      }
    }
    if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        computerScore++;
        round++;
        document.getElementById("computerScore").innerHTML = computerScore;
        document.getElementById("roundScore").innerHTML = "Lose Round";
        return ("You lose this round!");
      } else if (computerSelection === "paper") {
        playerScore++;
        round++;
        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("roundScore").innerHTML = "Win Round";
        return ("You win this round!");
      } else {
        draw++;
        round++;
        document.getElementById("tieScore").innerHTML = draw;
        document.getElementById("roundScore").innerHTML = "Tie";
        return("It's a tie!");
      }
    }
  }
  scoreGame(playerScore, computerScore, draw);
}




function scoreGame (playerScore, computerScore, draw) {
  if ((playerScore === 3) || (playerScore > computerScore)) {
    document.getElementById("pick").innerHTML = "You are the winner!";
  } else if ((computerScore === 3) || (computerScore > playerScore)) {
    document.getElementById("pick").innerHTML = "The computer wins!";
  } else if (draw === 3) {
    document.getElementById("pick").innerHTML = "It's a tie!";
  };
  document.getElementById("pick").style.color = "#0c4a60";
  document.getElementById("playerSelect").innerHTML = "";
  document.getElementById("computerSelect").innerHTML = "";
  document.getElementById("roundPicks").innerHTML = "";
  document.getElementById("rock").style.display = "none";
  document.getElementById("scissors").style.display = "none";
  document.getElementById("paper").style.width = "200px";
  document.getElementById("paper").innerHTML = "Try Again!";
  document.getElementById("paper").onclick = function() {reloadGame()};
}

function reloadGame() {
  location.reload();
}
