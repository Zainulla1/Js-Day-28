//Question
// create  a game where you start with any random game number.
//ask the user to keep guessing the game number until the user enters
//correct value

let gameNum = 25;

let userNum = prompt("Guess the game Number : ");

while(userNum != gameNum) {
    //game
    userNum = prompt("You Entered wrong Number. Guess again : ");
}
console.log("Congratulations you entered correct number")