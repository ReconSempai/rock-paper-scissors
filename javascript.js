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