const button = document.getElementById("button");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const result = document.getElementById("result");

const min = 1;
const max = 6;
let diceValue1;
let diceValue2;



button.onclick = function roll(){
diceValue1 = Math.floor(Math.random() * max) + min;
dice1.textContent = diceValue1;

diceValue2 = Math.floor(Math.random() * max) + min;
dice2.textContent = diceValue2;

if (diceValue1<diceValue2 ){
    result.textContent = "dice 2 wins"
    }
     else if (diceValue1>diceValue2){
    result.textContent = "dice 1 wins"
       }
       else if (diceValue1 == diceValue2){
        result.textContent = "Both Dice Tie"
       }

}
