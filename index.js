// Get the DOM elements and initialize the game
const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button")
   replay = document.querySelector(".replay")

// Set the focus on input field
input.focus();

let randomNum = Math.floor(Math.random() * 100); 
console.log(randomNum);

// Listen for the click event on the check button
checkButton.addEventListener("click", () => {


  // Get the value from the input field
  let inputValue = input.value;
  // Check if the input value is equal to the random number
  if (inputValue == randomNum) {
   // disable input, check button text and color.
    [guess.textContent, input.disabled] = ["Congratulations", true];
    [checkButton.textContent, guess.style.color] = ["You Win! 😉", "#333"];

  

    //Check if input value is > random number and within 1-99 range.
  } else if (inputValue > randomNum && inputValue < 100) {
 
    [guess.textContent] = ["Your guess is high 😲",];
    guess.style.color = "#333";
    //Check if input value is < random number and within 1-99 range.
  } else if (inputValue < randomNum && inputValue > 0) {
 
    [guess.textContent] = ["Your guess is low 😒",];
    guess.style.color = "#333";
  
  } else {
    
    [guess.textContent] = ["Your number is invalid 😑",];
    guess.style.color = "#DE0611";
  }

 
});
replay.addEventListener("click",()=>{
    window.location.reload()
 });