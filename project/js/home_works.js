const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^[a-zA-Z0-9][a-zA-Z0-9._]{4,28}[a-zA-Z0-9]@gmail\.com$/;

gmailButton.addEventListener("click", () => {
  if (regExp.test(gmailInput.value)) {
    gmailResult.innerHTML = "OK";
    gmailResult.style.color = "green";
  } else {
    gmailResult.innerHTML = "not OK";
    gmailResult.style.color = "red";
  }
});

const childBlock = document.querySelector(".child_block");
let positionX = 0;
const maxPosition = 449;

const moveBlock = () => {
  if (positionX < maxPosition && positionY === 0) {
    positionX++;
    // childBlock.style.left = `${positionX}px`;
    // requestAnimationFrame(moveBlock);
  } else if (positionX >= maxPosition && positionY < maxPosition) {
    positionY++;
  } else if (positionX > 0 && positionY >= maxPosition) {
    positionX--;
  } else if (positionX === 0 && positionY > 0) {
    positionY--;
  }
  childBlock.style.left = `${positionX}px`;
  childBlock.style.top = `${positionY}px`;
  requestAnimationFrame(moveBlock);
};
moveBlock();

// основы асинхроности 
// синхронный код 
// console.log (1)
// console.log (2)
// console.log (3)



const secondsBlock = document.querySelector("#seconds");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let count = 0;

let intervalId = null;

startBtn.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      count++;
      secondsBlock.innerHTML = count;
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);

  intervalId = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;

  count = 0;

  secondsBlock.innerHTML = count;
});


