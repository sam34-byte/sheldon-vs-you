let options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
var rulesEffect = document.querySelector("h3");
var rulesImg = document.querySelector("#rules-img");
var sheldonMove = document.querySelector("#sheldon-move");
var yourMove = document.querySelector("#your-move");
var n = document.querySelectorAll("button").length;

rulesEffect.addEventListener("click", function () {
  if (rulesImg.style.display == "inline-block") rulesImg.style.display = "none";
  else rulesImg.style.display = "inline-block";
});

for (var i = 0; i < n; i++) {
  document.querySelectorAll(".btn")[i].addEventListener("click", function () {
    var yourChoice = this.innerHTML;
    var sheldonChoice = Math.floor(Math.random() * 5);
    sheldonMove.innerHTML = options[sheldonChoice];
    yourMove.innerHTML = yourChoice;
    whoWins(yourChoice, sheldonChoice);
  });
}
function sheldonWins() {
  document.querySelector("#result").innerHTML = "Bazinga! You Lose";
}

function youWin(yourChoice, sheldonChoice) {
  document.querySelector("#result").innerHTML = "You win";
}

function whoWins(yourChoice, sheldonChoice) {
  if (yourChoice == options[sheldonChoice]) {
    document.querySelector("#result").innerHTML = "Draw";
  } else if (yourChoice == "Rock") {
    if (sheldonChoice == 2 || sheldonChoice == 3) {
      youWin(yourChoice, sheldonChoice);
    } else {
      sheldonWins(yourChoice, sheldonChoice);
    }
  } else if (yourChoice == "Paper") {
    if (sheldonChoice == 0 || sheldonChoice == 4) {
      youWin(yourChoice, sheldonChoice);
    } else {
      sheldonWins(yourChoice, sheldonChoice);
    }
  } else if (yourChoice == "Scissors") {
    if (sheldonChoice == 1 || sheldonChoice == 3) {
      youWin(yourChoice, sheldonChoice);
    } else {
      sheldonWins(yourChoice, sheldonChoice);
    }
  } else if (yourChoice == "Lizard") {
    if (sheldonChoice == 1 || sheldonChoice == 4) {
      youWin(yourChoice, sheldonChoice);
    } else {
      sheldonWins(yourChoice, sheldonChoice);
    }
  } else if (yourChoice == "Spock") {
    if (sheldonChoice == 0 || sheldonChoice == 2) {
      youWin(yourChoice, sheldonChoice);
    } else {
      sheldonWins(yourChoice, sheldonChoice);
    }
  }
}
