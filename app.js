class Die {
    constructor(value, xcords, ycords, square) {
        this.value = value;
        this.div = document.createElement('div');
        this.div.classList.add('dice');
        this.div.style.height = xcords;
        this.div.style.width = ycords;
        this.div.style.border = square;
    }
    roll() {
        return Math.floor(Math.random() * 6) + 1;
    }
}

let diceRoll = document.getElementById('generateDie');
diceRoll.addEventListener("click", createDie);



function createDie(){
    
}