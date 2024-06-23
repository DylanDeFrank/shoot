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

const humanScore = 0
const computerScore = 0 

const ComputerChoice = getComputerChoice()
const HumanChoice = getHumanChoice()
function playRound (HumanChoice, ComputerChoice) {
    if (HumanChoice == 'rock' && ComputerChoice == 'paper') {
        return 'You lose. Paper beats rock.'
    } else if (HumanChoice == 'rock' && ComputerChoice == 'scissors') {
        return 'You win. Rock beats scissors.'
    } else {
        return 'You tied.'
    }


    }

console.log(playRound())