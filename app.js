let diceRoll = document.getElementById('generateDie');
diceRoll.addEventListener("click", createDie);

class Die {
    constructor() {
        this.div = document.createElement('div');
        this.div.classList.add('dice');
    }
    roll() {
        return Math.floor(Math.random() * 6) + 1;
    }
}

function createDie(){
    let die1 = new Die();
}