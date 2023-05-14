let radioButtons = document.querySelectorAll(".radio");
let outputRoundCount = document.querySelector(".radiobuttons");
let playIcon = document.querySelector(".play-icon");
let handsContainer = document.querySelector(".fake-buttons");
let outputEnd = document.querySelector(".output-result-text");
let userDesc = document.querySelector(".which-one-user");
let compDesc = document.querySelector(".which-one-comp");

let resetButton = document.querySelector("#reset");
let myMin = 1;
let myMax = 3;
let numRounds = 0;

let rounds = 1;
let userCount = 0;
let computerCount = 0;

let userOption = ["rock", "paper", "scissors"];
let computerOptions = ["rock", "paper", "scissors"];

let userDisplay = document.querySelector("p.user-count");
let computerDisplay = document.querySelector("p.comp-count");

let userIcon = document.querySelector("img#usericon");

let compIcon = document.querySelector("img#compicon");

function letsPlay(userOption) {
  radioButtons.forEach(function(radio) {
    if (radio.checked) {
      numRounds = radio.value;
      console.log("Du hast " + radio.value + " ausgewählt");
      outputRoundCount.innerHTML = rounds++ + " / " + numRounds;
      if (rounds > radio.value) {
        handsContainer.style.display = "none";
      }
    //   outputRoundCount.innerHTML = rounds++ + " / " + numRounds;
    }
  });
  
  let randomComputerIndex = Math.floor(Math.random() * computerOptions.length);
  let computerOption = computerOptions[randomComputerIndex];

  console.log(`User: ${userOption}`);
  console.log(`Computer: ${computerOption}`);

  userDesc.innerHTML = userOption;
  compDesc.innerHTML = computerOption;

  if (userOption === computerOption) {
    console.log("Tie");
    compIcon.style.border = "rgb(255 188 110) solid 1rem";
    userIcon.style.border = "rgb(255 188 110) solid 1rem";
  } else if (
    (userOption === "rock" && computerOption === "scissors") ||
    (userOption === "paper" && computerOption === "rock") ||
    (userOption === "scissors" && computerOption === "paper")
  ) {
    console.log("User wins!");
    userCount++;
    userDisplay.innerHTML = userCount;
    console.log(userCount);
    userIcon.style.border = "rgb(88 217 181) solid 1rem";
    compIcon.style.border = "rgb(255 110 110) solid 1rem";
  } else {
    console.log("Computer wins!");
    computerCount++;
    computerDisplay.innerHTML = computerCount;
    console.log(computerCount);
    compIcon.style.border = "rgb(88 217 181) solid 1rem";
    userIcon.style.border = "rgb(255 110 110) solid 1rem";
  }
  // new code from here
  if (rounds > numRounds) {
    if (userCount > computerCount) {
      console.log("Ultimate Winner: User");
      outputEnd.innerHTML = "User won!"
    } else if (userCount < computerCount) {
      console.log("Ultimate Winner: Computer");
      outputEnd.innerHTML = "Computer won!"
    } else {
      console.log("No winner");
      outputEnd.innerHTML = "Nobody won, lol!"
    }
  }
}

document.querySelectorAll(".fake-buttons .play-icon").forEach(function(btn) {
  btn.addEventListener("click", function() {
    letsPlay(this.getAttribute("data-value"));
  });
});
