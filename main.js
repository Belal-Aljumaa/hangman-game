const letters = "abcdefghijklmnopqrstuvwxyz";
const lettersArray = Array.from(letters);
const lettersContainer = document.querySelector(".letters");

lettersArray.forEach(letter => {
  let span = document.createElement("span");
  span.innerHTML = letter
  span.className = "letter-box";
  lettersContainer.appendChild(span);
});