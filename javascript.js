function getRandomInt() {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(3);
    return Math.floor(Math.random() * (maxFloored - minCeiled)) 
}
function getComputerChoice() {
    const choiceCheck = getRandomInt()
    if (choiceCheck== 0) {
    return 'rock'
    } else if (choiceCheck == 1) {
    return 'paper'
    } else {
    return 'scissors'  
    }
}
function getHumanChoice() {
  let answer = prompt('Choose rock, paper, or scissors') 
    if (answer == 'rock') {
        return 'rock'
    } else if (answer == 'paper') {
            return 'paper'
    } else if (answer == 'scissors') {
            return  'scissors'
        } else {
            return  ('Not recognized. Please input value exactly how it appears.')
        }
}

let humanScore = 0
let computerScore = 0 

function playRound() {
    const humanChoice = getHumanChoice() 
    const computerChoice = getComputerChoice()
    if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore++ 
        alert('You lose. Paper covers rock.')
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        humanScore++
        alert('You win. Rock beats scissors.')
    } else if (humanChoice == 'rock' && computerChoice == 'rock') {
        alert('You tied.')
    } 
    if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore++
        alert('You win. Paper covers rock.')
    } else  if (humanChoice == 'paper' && computerChoice == 'paper') {
        alert('You tied.')
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        computerScore++
        alert('You lose. Scissors cuts paper.')
    }
    if (humanChoice == 'scissors' && computerChoice == 'rock') {
        computerScore++
        alert('You lose. Rock beats scissors.')
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        humanScore++
        alert('You win. Scissors cuts paper.')
    } else if (humanChoice == 'scissors' && computerChoice == 'scissors') {
        alert('You tied.')
    } return
 }

 function playGame() {
    playRound()
      alert('Your score is ' + humanScore + ' and the computer score is ' + computerScore)
    playRound()
      alert('Your score is ' + humanScore + ' and the computer score is ' + computerScore)
    playRound()
      alert('Your score is ' + humanScore + ' and the computer score is ' + computerScore)
    playRound()
      alert('Your score is ' + humanScore + ' and the computer score is ' + computerScore)
    playRound()
      alert('Your score is ' + humanScore + ' and the computer score is ' + computerScore)
    if (humanScore > computerScore)
        alert('You win the game!')
    else
       alert('You lose the game!')
 }