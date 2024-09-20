"use strict";

const score0Te = document.getElementById("score--0");
const score1Te = document.getElementById("score--1");
const diceIm = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
score0Te.textContent = 0;
score1Te.textContent = 0;
diceIm.classList.add("hidden");

const playerActive0 = document.querySelector(".player--0");
const playerActive1 = document.querySelector(".player--1");

const changePlayerAct = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentN = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerActive0.classList.toggle("player--active");
  playerActive1.classList.toggle("player--active");
};
let scores, currentN, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  currentN = 0;
  activePlayer = 0;
  playing = true;
  score0Te.textContent = 0;
  score1Te.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  playerActive0.classList.remove("player--winner");
  playerActive1.classList.remove("player--winner");
  playerActive0.classList.add("player--active");
  playerActive1.classList.remove("player--active");
};
init()
btnRoll.addEventListener("click", function () {
  if (playing) {
    activePlayer;
    diceIm.classList.remove("hidden");
    const randomN = Math.floor(Math.random() * 6 + 1);
    console.log(randomN);
    const url = "./src/dice-" + randomN + ".png";
    diceIm.src = url;
    if (randomN !== 1) {
      currentN += randomN;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentN;
    } else {
      changePlayerAct();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentN;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceIm.classList.add("hidden");
    } else {
      changePlayerAct();
    }
  }
});

btnNew.addEventListener("click", init);
