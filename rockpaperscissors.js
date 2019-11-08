//function to decide computer's choice
function computerPlay() {
  let computerChoice = Math.floor(Math.random() * 3);
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


document.addEventListener('DOMContentLoaded', function () {
  const rock = document.querySelector('#rock');
  const paper = document.querySelector('#paper');
  const scissors = document.querySelector('#scissors');

  rock.addEventListener('click', () => {playRound("rock", computerPlay())});
  paper.addEventListener('click', () => {playRound("paper", computerPlay())});
  scissors.addEventListener('click', () => {playRound("scissors", computerPlay())});
});


function endGame() {
  document.getElementById("playerSelect").innerHTML = "";
  document.getElementById("computerSelect").innerHTML = "";
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;

}


//play 1 round
function playRound(playerSelection, computerSelection) {
  document.getElementById("playerSelect").innerHTML = playerSelection;
  document.getElementById("computerSelect").innerHTML = computerSelection;

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      document.getElementById("computerScore").innerHTML = computerScore;
      document.getElementById("roundScore").innerHTML = "Lose Round"
      return("You lose this round!");
    }
      else if (computerSelection === "scissors") {
        playerScore++;
        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("roundScore").innerHTML = "Win Round"
        return("You win this round!");
      }
      else (draw++);
        document.getElementById("tieScore").innerHTML = draw;
        document.getElementById("roundScore").innerHTML = "Tie"
        return("It's a tie!");
  }

  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      document.getElementById("computerScore").innerHTML = computerScore;
      document.getElementById("roundScore").innerHTML = "Lose Round"
      return("You lose this round!");
      }
      else if (computerSelection === "rock") {
        playerScore++
        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("roundScore").innerHTML = "Win Round"
        return("You win this round!");
    }
      else (draw++);
        document.getElementById("tieScore").innerHTML = draw;
        document.getElementById("roundScore").innerHTML = "Tie"
        return("It's a tie!");
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      document.getElementById("computerScore").innerHTML = computerScore;
      document.getElementById("roundScore").innerHTML = "Lose Round"
      return("You lose this round!");
      }
      else if (computerSelection === "paper") {
        playerScore++;
        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("roundScore").innerHTML = "Win Round"
        return("You win this round!");
    }
      else (draw++);
        document.getElementById("tieScore").innerHTML = draw;
        document.getElementById("roundScore").innerHTML = "Tie"
        return("It's a tie!");
  }
}


function playGame(playerScore, computerScore, draw) {
  if (computerScore === 3) {
    endGame();
    document.getElementById("roundScore").innerHTML = "Computer wins the game!"

  } else if (playerScore === 3) {
    endGame();
    document.getElementById("roundScore").innerHTML = "You win the game!"

  } else if (draw === 3) {
    endGame();
    document.getElementById("roundScore").innerHTML = "Nobody wins the game!"

  } else playRound();
}
