// randomly generated answer for rock paper scissors
function computerPlay(){
    random = Math.random();
    if(random <=0.33333333) return "Rock";
    else if(random >0.33333333 && random <=0.66666666) return "Paper";
    else return "Scissors";
}
// compares the player input and the answer of the computer
function playRound(playerSelection, computerSelection){
        /*/if(playerSelection == "Rock" && computerSelection == "Rock"){
            console.log("It is a tie!")
        }
        if(playerSelection == "Rock" && computerSelection == "Paper"){
            console.log("You lose!")
        }
        if(playerSelection == "Rock" && computerSelection == "Scissors"){
            console.log("You win!")
        }
        if(playerSelection == "Paper" && computerSelection == "Paper"){
            console.log("It is a tie!")
        }
        if(playerSelection == "Paper" && computerSelection == "Scissors"){
            console.log("You lose!")
        }
        if(playerSelection == "Paper" && computerSelection == "Rock"){
            console.log("You win!")
        }
        */
       switch(playerSelection){
            
           case "Rock":
            if(computerSelection == "Rock"){
                
                console.log("It is a tie!")
            }
            else if(computerSelection == "Paper"){
                console.log("You lose!")

            }
            else {
                console.log("You win!")
            }
            break;
            case "Paper":
            if(computerSelection == "Rock"){
                console.log("You win!")
            }
            else if(computerSelection == "Paper"){
                console.log("It is a tie!")
            }
            else {
                console.log("You lose!")
            }
            break;
            case "Scissors":
            if(computerSelection == "Rock"){
                console.log("You lose!")
            }
            else if(computerSelection == "Paper"){
                console.log("You win!")
            }
            else {
                console.log("It is a tie!")
            }
            break;
       }
}


let playerSelection = prompt("Rock, Paper, Scissors?");
let computerSelection = computerPlay();
console.log(`Player picked ${playerSelection}\n` + `Computer picked ${computerSelection}`)
playRound(playerSelection, computerSelection);