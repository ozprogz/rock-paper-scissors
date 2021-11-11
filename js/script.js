/*First Javascript project - little coding experience through university 
 This project is part of the The Odin Project curriculum*/

// randomly generated answer for rock paper scissors
function computerPlay(){
    random = Math.random();
    if(random <=0.33333333) return "rock";
    else if(random >0.33333333 && random <=0.66666666) return "paper";
    else return "scissors";
}
// compares the player input and the answer of the computer
function playRound(button){
        
    let computerSelection= computerPlay();

    const playerScore = document.querySelector("#player-score");
    const computerScore = document.querySelector("#computer-score");
    const result = document.querySelector("#result");
    playerScore.textContent = `Player score: ${playerWins}`;
    computerScore.textContent = `Computer score: ${computerWins}`;
      
    while(playerWins < 5 && computerWins <5){
       switch(button.target.id){
            
            case "rock":
                if(computerSelection == "paper"){
                    computerWins++;
                    result.textContent="Computer wins this round!";
                    computerScore.textContent = `Computer score: ${computerWins}`;
                    return computerWins;
                                   
            }
                else if (computerSelection == "scissors"){
                    playerWins++;
                    result.textContent="Player wins this round!";
                    playerScore.textContent = `Player score: ${playerWins}`;
                    return playerWins;
                    
            }
                else {
                    result.textContent="Draw!";
                    return;
                    
            }
            
            case "paper":
                if(computerSelection == "rock"){
                    playerWins++;
                    result.textContent="Player wins this round!";
                    playerScore.textContent = `Player score: ${playerWins}`;
                    return playerWins;
                }
                else if(computerSelection == "scissors"){
                    computerWins++;
                    result.textContent="Computer wins this round!";
                    computerScore.textContent = `Computer score: ${computerWins}`;
                    return computerWins;
                }
                else {
                    result.textContent="Draw!";
                    return;}
            case "scissors":
        
                if(computerSelection == "rock"){
                    computerWins++;
                    result.textContent="Computer wins this round!";
                    computerScore.textContent = `Computer score: ${computerWins}`;
                    return computerWins;
                }
                else if(computerSelection == "paper"){
                    playerWins++;
                    result.textContent="Player wins this round!";
                    playerScore.textContent = `Player score: ${playerWins}`;
                    return playerWins; 
                }
                else {result.textContent="Draw!";
                return;}
        }
        
        }
         
    }     
    


const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>{
    button.addEventListener("click", game)
    
});

let playerWins = 0;
let computerWins = 0;


function game(button){
    let counter = playRound(button);
    if(counter == 5){
        if(playerWins>computerWins){
            alert("Congratulations!!! You won the game")
        }
        else alert("You lost, Clown!"); 
        const playAgain = document.createElement("button");
        const content = document.querySelector('body');
        playAgain.textContent ="Play again";
        content.appendChild(playAgain);
        playAgain.addEventListener("click", refreshPage);
    }
    
}

function refreshPage(){
    window.location.reload()
}