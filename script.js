const spanS = document.getElementById("span-s");
const spanL = document.getElementById("span-l");
const divPlayerS = document.getElementById("player-s");
const divPlayerL = document.getElementById("player-l");

function startGame() {}
const startGameButton = document.getElementById("start-btn");
const timeInput = document.getElementById("timer");
spanS.style.display = "none";
spanL.style.display = "none";
// function stop() {
//   clearInterval(timeInput);
// }
startGameButton.addEventListener("click", gameTimer);
function gameTimer() {
  spanS.style.display = "initial";
  spanL.style.display = "initial";
  let timerInterval = setInterval(gameTimer, 1000);
  if (timeInput.value > 0) {
    timeInput.value--;
  }
}
let counterS = 0;
let counterL = 0;

function keyBoardEvents(e) {
  if (e.keyCode === 115 && timeInput.value !== null && timeInput.value > 0) {
    counterS += 1;
  } else if (e.keyCode === 108 && timeInput.value > 0) {
    counterL += 1;
  }
  const sumOfS = counterS;
  const sumOfL = counterL;
  spanS.innerHTML = sumOfS;
  spanL.innerHTML = sumOfL;

  if (sumOfS > sumOfL && timeInput.value < 1) {
    divPlayerS.style.backgroundColor = "green";
    divPlayerL.style.backgroundColor = "red";
    const winnerS = document.getElementById("winner-one");
    winnerS.textContent = "Player 1 has won the game";
  } else if (sumOfL > sumOfS && timeInput.value < 1) {
    divPlayerS.style.backgroundColor = "red";
    divPlayerL.style.backgroundColor = "green";
    const winnerL = document.getElementById("winner-two");
    winnerL.textContent = "Player 2 has won the game";
    divPlayerL.appendChild(winnerL);
  }
}

document.addEventListener("keypress", keyBoardEvents);
