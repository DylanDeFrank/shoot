let humanScore = 0
let computerScore = 0 

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore++ 
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        humanScore++
    }     
    if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore++
    }  else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        computerScore++
    }
    if (humanChoice == 'scissors' && computerChoice == 'rock') {
        computerScore++
        
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        humanScore++
    }
    return
 }

function getHumanChoice(answer) {
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

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const humanChoice = button.id
        const computerChoice = getComputerChoice()
        choice.textContent = 'You have chosen ' + humanChoice + ' and the computer has chosen ' + computerChoice
        playRound(humanChoice, computerChoice)
        result.textContent = 'The score is computer: ' + computerScore + ' and your score is ' + humanScore
        if (humanScore == 5) {
            result.textContent = 'You win!'
        } else if (computerScore == 5) {
            result.textContent = 'The computer wins!'
        } })

})
const div = document.querySelector('div')
let choice = document.createElement('p')
let result = document.createElement('p')

div.appendChild(choice)
div.appendChild(result)

