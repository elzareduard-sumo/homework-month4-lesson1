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
  if (positionX < maxPosition) {
    positionX++;
    childBlock.style.left = `${positionX}px`;
    requestAnimationFrame(moveBlock);
  }
};
moveBlock();
