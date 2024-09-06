"use strict";

let secretNumber = Number(Math.trunc(Math.random() * 30 + 1));
document.querySelector(".number").textContent = secretNumber;

let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  console.log("Btn check cliked!");

  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //when there's no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";

    //when the guess is correct
  } else if (guess === secretNumber) {
    document.querySelector("h1").textContent = "Yo! That was correct";
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "35rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }

    //when the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber
        ? (document.querySelector(".message").textContent = "Too High")
        : (document.querySelector(".message").textContent = "too low");
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector("h1").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  console.log("Btn again clicked");

  secretNumber = Number(Math.trunc(Math.random() * 30 + 1));
  document.querySelector(".number").textContent = secretNumber;
  console.log(secretNumber);

  score = 20;

  const guess = Number(document.querySelector(".guess").value);

  //   if (!guess) {
  //     document.querySelector(".message").textContent = "No Number";

  //     //guess being correct
  //   } else if (guess === secretNumber) {
  //     document.querySelector("h1").textContent = "Yo! That was correct";
  //     document.querySelector(".message").textContent = "Correct Number";
  //     document.querySelector("body").style.backgroundColor = "green";
  //     document.querySelector(".number").style.width = "35rem";
  //   }

  //   const guess = Number(document.querySelector(".guess").value);
  //   console.log(guess);

  document.querySelector(".guess").value = "";
  document.querySelector("h1").textContent = "Guess My Number";
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").style.width = "15rem";
});
