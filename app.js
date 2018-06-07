//Selecting and adding event listener to the show dice button
let diceRoll = document.getElementById('generateDie');
diceRoll.addEventListener("click", createDie);
//Adding global array
let dieNumbers = [];
//Class creates div, give it a class, call its own method, displays the div to the body
class Die {
    constructor() {
        this.div = document.createElement('div');
        this.div.classList.add('dice');
        this.roll();
        document.body.appendChild(this.div);
        dieNumbers.push(this);
    }
    //Generates random number between 1-6, and display the value on the div
    roll() {
        let value = Math.floor(Math.random() * 6) + 1;
        this.div.innerText = value;
    }
}
//creates new object die 1 which inherits from the class Die
function createDie(){
    let die1 = new Die();
}
//Selects and add event listener in for the roll button which changes all the valus of the die with 1 click
let rollbtn = document.getElementById('Roll');
rollbtn.addEventListener('click', function(){
    for(let i = 0; i < dieNumbers.length; i++){
        dieNumbers[i].roll();
    }
})