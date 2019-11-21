const choices = ["Lapis", "Papyrus", "Scalpellus"];

const computerChooses = () => {
    return Math.floor(Math.random() * choices.length);
}

var player = {
    playerChoice: choices[1]
}

const computer = {
    computerChoice: choices[0]
}

const compareChoices = (player, computer) => {

    if (computer.computerChoice === choices[0]) {
        if (player.playerChoice === choices[1]) {
            return ("The player wins! The computer chose " + choices[0] + " and the player chose " + choices[1] + ".")
        }
        else if (player.playerChoice === choices[2]) {
            return ("The player loses! The computer chose " + choices[0] + " and the player chose " + choices[2] + ".")
        }
        else {
            return ("The player and computer tied! The computer chose " + choices[0] + " and the player chose " + choices[0] + ".")
        }
    }
    else if (computer.computerChoice === choices[1]) {
        if (player.playerChoice === choices[2]) {
            return ("The player wins! The computer chose " + choices[1] + " and the player chose " + choices[2] + ".")
        }
        else if (player.playerChoice === choices[0]) {
            return ("The player loses! The computer chose " + choices[1] + " and the player chose " + choices[0] + ".")
        }
        else {
            return ("The player and computer tied! The computer chose " + choices[1] + " and the player chose " + choices[1] + ".")
        }
    }
    else if (computer.computerChoice === choices[2]) {
        if (player.playerChoice === choices[0]) {
            return ("The player wins! The computer chose " + choices[2] + " and the player chose " + choices[0] + ".")
        }
        else if (player.playerChoice === choices[1]) {
            return ("The player loses! The computer chose " + choices[2] + " and the player chose " + choices[1] + ".")
        }
        else {
            return ("The player and computer tied! The computer chose " + choices[2] + " and the player chose " + choices[2] + ".")
        }
    }

}

const displayWinner = () => {
    const winner = document.getElementById('result');
    winner.innerHTML = compareChoices(player, computer);
}

const playerChooses = (event) => {
    player.playerChoice = event.target.getAttribute('id');
    computer.computerChoice = choices[computerChooses()]
    return displayWinner();
}

document.querySelector('#Lapis').onclick = playerChooses;
document.querySelector('#Papyrus').onclick = playerChooses;
document.querySelector('#Scalpellus').onclick = playerChooses;
