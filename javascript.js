let min=0
let max=3
function getRndHand(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
let computerHandNum = getRndHand(min,max);
console.log(computerHandNum)
