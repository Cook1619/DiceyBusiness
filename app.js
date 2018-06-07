let diceRoll = document.getElementById('generateDie');
diceRoll.addEventListener("click", createDie);

class Die {
    constructor(value){
        this.value = value;
    }
    roll(){
        return Math.floor(Math.random() * 6) + 1;
    }
}

function createDie(){
    alert('Clicked!!')
}