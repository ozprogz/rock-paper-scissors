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
function playRound(playerSelection, computerSelection){
        let player=0;
        let computer=0;
       switch(playerSelection){
            
           case "rock":
            
            if(computerSelection == "paper"){
                return "Computer wins"
            }
            else if (computerSelection == "scissors"){
                return "Player wins"
            }
            break;

            case "paper":
            if(computerSelection == "rock"){
                return "Player wins"
            }
            else if(computerSelection == "scissors"){
                return "Computer wins"
            }
            break;

            case "scissors":
            if(computerSelection == "rock"){
                return "Computer wins"
            }
            else if(computerSelection == "paper"){
                return "Player wins"
            }
            break;
            default:
                console.log("invalid input");
       }
}
//playing one game for 5 rounds
function game(){
    
        while(playerWins < 5 && computerWins <5){
            let playerSelection = prompt("Rock, Paper, Scissors?");
            //putting the input in lowercase and checking if the input is valid. Could make a new function for this segment
            if(playerSelection==null) continue;
            let computerSelection = computerPlay();
            playerSelection = playerSelection.toLowerCase();
            if(playerSelection=="rock" || playerSelection== "paper" || playerSelection== "scissors"){
            console.log(`Player picked ${playerSelection}\n` + `Computer picked ${computerSelection}`)
            //checking who won the round. Could also be a function by itself to declutter, make it more readable
            if(playRound(playerSelection, computerSelection)=="Player wins"){
                playerWins++;
                console.log(`You won the round! The score is now: \nPlayer:${playerWins} - Computer:${computerWins}`)
            }
            else if(playRound(playerSelection, computerSelection)=="Computer wins"){
                computerWins++;
                console.log(`You lost the round! The score is now: \nPlayer:${playerWins} - Computer:${computerWins}`)
            }
            else console.log(`It is a tie! The score is now: \nPlayer:${playerWins} - Computer:${computerWins}`)
        }
        
        else alert("Invalid answer!"); 
        }
        if(playerWins>computerWins){
            console.log("Congratulations!!! You won the game")
        }
        else console.log("You lost, Clown!");
}

let playerWins = 0;
let computerWins = 0;
game();