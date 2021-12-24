
function computerPlay(){
    const months = ["Rock", "Paper" ,"Scissor"];

const random = Math.floor(Math.random() * months.length);
//console.log(random, months[random]);
return months[random];
}
let computer=computerPlay();
console.log(computer);

count_win=0;
count_lost=0;

function playSingleRound(playerSelection, computerSelection){
    let statut="statut";
    switch (playerSelection.toLowerCase()){
        
        case 'rock':
            if(computerSelection.toLowerCase()==='rock'){
                 statut="Equality! Rock equal Rock";
            }else if(computerSelection.toLowerCase()==='paper'){
                 statut="You Lose! Paper beats Rock";
                 count_lost++;
                 console.log(count_lost);
            }else if(computerSelection.toLowerCase()==='scissor'){
                 statut="You Win! Rock beats Scissors";
                 count_win++;
                 console.log(count_win);
            }
        break;
        case 'paper':
            if(computerSelection.toLowerCase()==='rock'){
                 statut="You Win! Paper beats Rock";
                 count_win++;
                 console.log(count_win);
            }else if(computerSelection.toLowerCase()==='paper'){
                 statut="Equality! Paper equal Paper";  
            }else if(computerSelection.toLowerCase()==='scissor'){
                 statut="You Lose! Scissor beats Paper";
                 count_lost++;
                 console.log(count_lost);
            }
        break;
        case 'scissor':
            if(computerSelection.toLowerCase()==='rock'){
                 statut="You Lose! Rock beats Scissor";
                 count_lost++;
                 console.log(count_lost);
            }else if(computerSelection.toLowerCase()==='paper'){
                 statut="You Win! Scissor beats Paper";
                 count_win++;
                 console.log(count_win);
            }else if(computerSelection.toLowerCase()==='scissor'){
                 statut="Equality! Scissor equal Scissor";  
                
            }
        break;
        default:
             statut="Verify your input;Please!";  
            break;
    }
    return statut;
}

function game(){
    let result="result";
    let count=5;
    for (let i = 0; i < count; i++) {
        let player=prompt("Insert your choice:");
        let statut=playSingleRound(player,computer);
        console.log(statut);
        if(statut==="Invalid input, verified your input;Please!!"){
            count=count+1;
        }
        
    }
    if(count_win<count_lost){
        result="You lost the game; the comptuter win";
    }else if(count_win>count_lost){
        result="You win the game; Congratulation !!";
    }else{
        result="Match null; Congratulation !!";
    }
    return result;

}
console.log(game());

