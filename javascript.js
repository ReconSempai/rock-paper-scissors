 //The following generates a random number between 0 and 2 to i can use it to make the computer "play" the game
 let min=0
 let max=3
 function getRndHand(min, max) {
     return Math.floor(Math.random() * (max - min) ) + min;
 }
 let computerHandNum ;
 
//Function to make the pc make a choice
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
 let computerHand 
//this function plays the game
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection,computerSelection){
    switch (playerSelection){
        case "paper":
            if (computerSelection === "paper"){
               
                return "It's a draw!"
                
            } 
            else if (computerSelection ==="rock"){
                playerScore+=1
                return "You win! Paper beats Rock"
                
            }
            else {
                computerScore+=1
                return "You lose! Scissors beat Paper"
            }
            case "rock":
                if (computerSelection === "rock"){
                    
                    return "It's a draw!"
                    
                } 
                else if (computerSelection === "scissors"){
                    playerScore+=1;
                    return "You win! Rock beats Scissors"
                    
                }
                else {
                    computerScore+=1;
                    return "You lose! Paper beat Rock"
                }
                case "scissors":
                if (computerSelection === "scissors"){
                   
                    return "It's a draw!"
                    
                } 
                else if (computerSelection === "paper"){
                    playerScore+=1;
                    return "You win! Scissors beats Paper"
                    
                }
                else {
                    computerScore+=1;
                    return "You lose! Rock beat Scissors"    
                }
            }
        }
//Add a function to give a winner at 5 points
function winCondition(playerWin,computerWin){
    if (playerWin === 5){
        return `You are the winner, the score is: PLAYER:${playerWin}  COMPUTER:${computerWin}`;
    }
    else if (computerWin === 5){
        return `You lose, the score is: COMPUTER:${computerWin}  PLAYER:${playerWin}`;
    }
    else{
        return `The current score is: PLAYER /// ${playerWin} /// || COMPUTER /// ${computerWin} ///`;
    }
}



//Add an event listener for the choice
    let playerSelec;    
    const btn = document.querySelectorAll('.choice');
    btn.forEach((choice) => {
        choice.addEventListener('click', () =>{
            playerSelec = choice.id;
            const select = document.querySelector('.selection');
            select.textContent = `You have selected ${playerSelec}, you wish to play the round?`
        })})
        
        const playGame = document.querySelector('.playGame');
        playGame.addEventListener('click',()=>{
            computerHandNum = getRndHand(min,max);
            computerHand = getComputerChoice(computerHandNum);
            alert(playRound(playerSelec,computerHand))
            
        const result = document.querySelector('.result');
            result.textContent = `${winCondition(playerScore,computerScore)}`
    })
    
        
        
        

        
