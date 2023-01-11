let min=0
let max=3
function getRndHand(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
let computerHandNum = getRndHand(min,max);
console.log(computerHandNum)

function getComputerChoice(handNum) {
    if (handNum==0) {
        return "Paper"
    }
  else if (handNum==1){
    return "Rock"
 }
 else {
    return "Scissors"
 }
}
let computerHand = getComputerChoice(computerHandNum)
console.log (computerHand)
