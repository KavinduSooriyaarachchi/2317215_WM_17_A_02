// Generate a random number from 1-6

const firstRandomNumber =
  Math.floor(Math.random()*6)+1

// Random dice image
const firstDiceImage = 'assets/dice' + firstRandomNumber + '.svg';


function btn1click(){
document.querySelector(".dice1").setAttribute('src',firstDiceImage);

}

// Generate a random number from 1-6

const secondRandomNumber =
  Math.floor(Math.random()*6)+1

// Random dice image
const secondDiceImage = 'assets/dice' + secondRandomNumber + '.svg';

function btn2click(){
document.querySelector(".dice2").setAttribute('src',secondDiceImage);


// logic for winner
if(firstRandomNumber>secondRandomNumber){
  document.querySelector('.title').innerHTML = 'The Winner is User 1';
}else if(firstRandomNumber<secondRandomNumber){
  document.querySelector('.title').innerHTML = 'The Winner is User 2';
}else{
  document.querySelector('.title').innerHTML = 'It is a Draw!';
}
}

// let player1 = window.prompt("Enter Player 01 Name");
// let player2 = window.prompt("Enter Player 02 Name");

