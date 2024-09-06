"use strict";
/*
console.log(document.querySelector('.message').textContent); //gets the class and read only the contents

document.querySelector('.message').textContent = '🎉Correct Number'
*/

let secretNumber = Math.trunc(Math.random() * 30 + 1);
// document.querySelector(".number").textContent = secretNumber;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess);

  //When there's no input//
  if (!guess) {
    document.querySelector(".message").textContent = "⛔No NUmber";

    //when player wins//
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🎉Correct Number";
    displayMessage("🎉Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "35rem";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector('h1').textContent = 'Yo! you are topnotch🎉'


    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈Too High" : "📉Too Low";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      //   document.querySelector(".message").textContent = "💥You lost the game😭";
      displayMessage("💥You lost the game😭");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector("h1").textContent = "You are a Looser😭😢";
    }
    //   } else if (guess > secretNumber) {
    //     //when guess is too low
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector(".message").textContent = "📉Too Low";
    //       score = score - 1;
    //       document.querySelector(".score").textContent = score;
    //     } else {
    //       document.querySelector(".message").textContent = "💥You lost the game😭";
    //       document.querySelector(".score").textContent = 0;
    //     }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 30 + 1);
  // document.querySelector(".number").textContent = secretNumber;


  //   document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector('h1').textContent = 'Guess My Number!'
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const guess = Number(document.querySelector(".guess").value);
    // console.log(guess);

    //When there's no input//
    if (!guess) {
      document.querySelector(".message").textContent = "⛔No NUmber";

      //when player wins//
    } else if (guess === secretNumber) {
      // document.querySelector(".message").textContent = "🎉Correct Number";
      displayMessage("🎉Correct Number");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "35rem";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector('h1').textContent = 'Yo! you are topnotch🎉'


      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }

      //when guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent =
          guess > secretNumber ? "📈Too High" : "📉Too Low";
        score = score - 1;
        document.querySelector(".score").textContent = score;
      } else {
        //   document.querySelector(".message").textContent = "💥You lost the game😭";
        displayMessage("💥You lost the game😭");
        document.querySelector(".score").textContent = 0;
        document.querySelector("body").style.backgroundColor = "red";
        document.querySelector("h1").textContent = "You are a Looser😭😢";
      }
      //   } else if (guess > secretNumber) {
      //     //when guess is too low
      //   } else if (guess < secretNumber) {
      //     if (score > 1) {
      //       document.querySelector(".message").textContent = "📉Too Low";
      //       score = score - 1;
      //       document.querySelector(".score").textContent = score;
      //     } else {
      //       document.querySelector(".message").textContent = "💥You lost the game😭";
      //       document.querySelector(".score").textContent = 0;
      //     }
    }
  }
});
