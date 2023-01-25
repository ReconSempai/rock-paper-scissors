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

//this function plays the game
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
//Add an event listener for the choice

const btn = document.querySelectorAll('.choice');
    btn.forEach((choice) => {
        choice.addEventListener('click', () =>{
            let playerSelec = choice.id;
             
            alert(playRound(playerSelec,computerHand));
        })
        
    })
   
    if (typeof playerSelec !== 'undefined'){
        alert(`esta definida,${playerSelec}`)
    };
    
        
        
        

        
