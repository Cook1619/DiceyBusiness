let diceRoll = document.getElementById('generateDie');
diceRoll.addEventListener("click", createDie);

let dieNumbers = [];

class Die {
    constructor() {
        this.div = document.createElement('div');
        this.div.classList.add('dice');
        this.roll();
        document.body.appendChild(this.div);
    }
    roll() {
        let value = Math.floor(Math.random() * 6) + 1;
        this.div.innerText = value;
    }
}

function createDie(){
    let die1 = new Die();
}