//The following generates a random number between 0 and 2 to i can use it to make the computer "play" the game
let min=0
let max=3
function getRndHand(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
let computerHandNum = getRndHand(min,max);
console.log(computerHandNum)

function getComputerChoice(handNum) {
    if (handNum==0) {
        return "paper"
    }
  else if (handNum==1){
    return "rock"
 }
 else {
    return "scissors"
 }
}
let computerHand = getComputerChoice(computerHandNum)
console.log (computerHand)
//Here i use a prompt to make the player chose the option they want to play and then make a simple switch  statment to play the game
let choice = prompt ("What do you chose? Rock, Paper or Scissors?")
playerSelec= choice.toLowerCase()
console.log(playerSelec)
function playRound(playerSelection,computerSelection){
    
    switch (playerSelection){
        case "paper":
            if (computerSelection === "paper"){
                return "It's a draw!"
                
            } 
            else if (computerSelection ==="rock"){
                return "You win! Paper beats Rock"
            
            }
            else {
                return "You lose! Scissors beat Paper"
            }
        case "rock":
            if (computerSelection === "rock"){
                return "It's a draw!"
                
            } 
            else if (computerSelection === "scissors"){
                return "You win! Rock beats Scissors"
            
            }
            else {
                return "You lose! Paper beat Rock"
            }
        case "scissors":
            if (computerSelection === "scissors"){
                return "It's a draw!"
                
            } 
            else if (computerSelection === "paper"){
                return "You win! Scissors beats Paper"
            
            }
            else {
                return "You lose! Rock beat Scissors"    
            }
}
}
console.log (playRound(playerSelec,computerHand))
//Here i make the game function where the game will be played 5 times 
let roundCount=0
function game(){
for (let i=0 ;i<5; i++ ){
    function getRndHand(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
    let computerHandNum = getRndHand(min,max);
    console.log(computerHandNum)
    
    function getComputerChoice(handNum) {
        if (handNum==0) {
            return "paper"
        }
      else if (handNum==1){
        return "rock"
     }
     else {
        return "scissors"
     }
    }
    let computerHand = getComputerChoice(computerHandNum)
    console.log (computerHand)
    
    let choice = prompt ("What do you chose? Rock, Paper or Scissors?")
    playerSelec= choice.toLowerCase()
    console.log(playerSelec)
    function playRound(playerSelection,computerSelection){
        
        switch (playerSelection){
            case "paper":
                if (computerSelection === "paper"){
                    return "It's a draw!"
                    
                } 
                else if (computerSelection ==="rock"){
                    return "You win! Paper beats Rock"
                
                }
                else {
                    return "You lose! Scissors beat Paper"
                }
            case "rock":
                if (computerSelection === "rock"){
                    return "It's a draw!"
                    
                } 
                else if (computerSelection === "scissors"){
                    return "You win! Rock beats Scissors"
                
                }
                else {
                    return "You lose! Paper beat Rock"
                }
            case "scissors":
                if (computerSelection === "scissors"){
                    return "It's a draw!"
                    
                } 
                else if (computerSelection === "paper"){
                    return "You win! Scissors beats Paper"
                
                }
                else {
                    return "You lose! Rock beat Scissors"    
                }
    }
    }

    console.log (playRound(playerSelec,computerHand))
    roundCount++
    console.log(`We just played round number ${roundCount}`)
}
}
console.log (game())