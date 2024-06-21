function getRandomInt() {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(3);
    return Math.floor(Math.random() * (maxFloored - minCeiled)) 
  
  }
function getComputerChoice() {
    if (getRandomInt()== 0) {
    return 'rock'
    } else if (getRandomInt() == 1) {
    return 'paper'
    } else {
    return 'scissors'  
    }
}
  let answer = prompt('Choose rock, paper, or scissors') 
    if (answer == 'rock') {
        alert('You have chosen rock!')
    } else if (answer == 'paper') {
        alert('You have chosen paper!')
    } else if (answer == 'scissors') {
        alert ('You have chosen scissors!')
    } else {
        alert ('Not recognized. Please input value exactly how it appears.')
    }
