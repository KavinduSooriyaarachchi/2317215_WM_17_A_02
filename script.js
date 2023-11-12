// Generate a random number from 1-6

const firstRandomNumber =
  Math.floor(Math.random()*6)+1

// Random dice image
const firstDiceImage = 'assets/dice' + firstRandomNumber + '.svg';


document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage);


// Generate a random number from 1-6

const secondRandomNumber =
  Math.floor(Math.random()*6)+1

// Random dice image
const secondDiceImage = 'assets/dice' + secondRandomNumber + '.svg';


document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);