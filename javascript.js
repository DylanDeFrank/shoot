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