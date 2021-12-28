
const container=document.querySelector('#container');
const div_head=document.createElement('div');
const h1_head=document.createElement('h1');

div_head.setAttribute('style','background:black;color:green;text-align:center');
h1_head.textContent='ROCK-PAPER-SCISSOR';
div_head.appendChild(h1_head);
container.appendChild(div_head);

const div_body=document.createElement('div');
const h3_body=document.createElement('h3');
const h5_body=document.createElement('h5');

h3_body.textContent='Make your choice';
h5_body.textContent="5 points first win; Let's go";

div_body.setAttribute('style','color:green;text-align:center');
div_body.appendChild(h3_body);
div_body.appendChild(h5_body);


const div_put=document.createElement('div');
div_put.setAttribute('id','players_put');
const div_player_put=document.createElement('div');
const div_computer_put=document.createElement('div');
div_player_put.textContent='PLAYER';
div_player_put.setAttribute('id','player_put');

div_computer_put.textContent='COMPUTER';
div_computer_put.setAttribute('id','computer_put');
div_put.appendChild(div_player_put);
div_put.appendChild(div_computer_put);
div_put.setAttribute('style','display:flex;justify-content:center;gap:30px');

div_body.appendChild(div_put);

const div_score=document.createElement('div');
const div_player_score=document.createElement('div');
const div_computer_score=document.createElement('div');
div_player_score.setAttribute('id','player_score') ;
div_player_score.textContent="0";
div_computer_score.setAttribute('id','computer_score') ;
div_computer_score.textContent="0";
div_score.appendChild(div_player_score);
div_score.appendChild(div_computer_score);
div_score.setAttribute('id','players_score');
div_score.setAttribute('style','display:flex;justify-content:center;gap:30px');
div_body.appendChild(div_score);

const div_choice=document.createElement('div');
const div_rock=document.createElement('div');
const img_rock=document.createElement('img');
const div_paper=document.createElement('div');
const img_paper=document.createElement('img');
const div_scissor=document.createElement('div');
const img_scissor=document.createElement('img');

div_rock.setAttribute('id','btn_rock');
img_rock.setAttribute('src','rock.jpg');
div_rock.appendChild(img_rock);
//div_paper.setAttribute('style','background-image:url("paper.jpg");background-size: "auto"');
div_paper.setAttribute('id','btn_paper');
img_paper.setAttribute('src','paper.jpg');
div_paper.appendChild(img_paper);
div_scissor.setAttribute('id','btn_scissor');
img_scissor.setAttribute('src','scissors.jpg');
div_scissor.appendChild(img_scissor);


div_choice.appendChild(div_rock);
div_choice.appendChild(div_paper);
div_choice.appendChild(div_scissor);
div_choice.setAttribute('id','game_btn');
div_choice.setAttribute('style','display:flex;justify-content:center;gap:8px;border:8px');
div_body.appendChild(div_choice);

const div_result=document.createElement('div');
div_result.setAttribute('style','text-align:center;color:blue');
div_body.appendChild(div_result);

const div_restart=document.createElement('div');
div_restart.setAttribute('style','text-align:center;color:blue');
const btn_restart=document.createElement('button');
btn_restart.textContent="Restart the game";
div_restart.appendChild(btn_restart);
div_body.appendChild(div_restart);

container.appendChild(div_body);

btn_restart.addEventListener('click',()=> {
    div_player_put.textContent="Player";
    div_computer_put.textContent="Computer";
    div_player_score.textContent="0";
    div_computer_score.textContent="0";
    div_result.textContent="";
    count_win=0;
    count_lost=0;
});

//Event part
//let computer=computerPlay();

div_rock.addEventListener('click', () => {
    //alert("Hello World");
    let computer=computerPlay();
    div_player_put.textContent="Rock";
    div_computer_put.textContent=computer+"";
   
    let result=game('rock',computer,div_result);
    if(count_win===5 || count_lost===5 ){
        alert(result);   
        div_result.textContent=result;
        div_player_score.textContent=count_win+"";
        div_computer_score.textContent=count_lost+"";
    }else if(result==="Restart the game"){
        alert(result);   
        div_result.textContent=result;
    }else{
        div_result.textContent=result;
        div_player_score.textContent=count_win+"";
        div_computer_score.textContent=count_lost+"";
    }

  });
div_paper.addEventListener('click', () => {
    //alert("Hello World");
    let computer=computerPlay();
    div_player_put.textContent="Paper";
    div_computer_put.textContent=computer+"";
    
    let result=game('paper',computer,div_result);
    if(count_win===5 || count_lost===5 ){
        alert(result);   
        div_result.textContent=result;
        div_player_score.textContent=count_win+"";
        div_computer_score.textContent=count_lost+"";
    }else if(result==="Restart the game"){
        alert(result);   
        div_result.textContent=result;
    }else{
        div_result.textContent=result;
        div_player_score.textContent=count_win+"";
        div_computer_score.textContent=count_lost+"";
    }
  });
div_scissor.addEventListener('click', () => {
    //alert("Hello World");
    let computer=computerPlay();
    div_player_put.textContent="Scissor";
    div_computer_put.textContent=computer+"";
    let result=game('scissor',computer,div_result);
    if(count_win===5 || count_lost===5 ){
        alert(result);   
        div_result.textContent=result;
        div_player_score.textContent=count_win+"";
        div_computer_score.textContent=count_lost+"";
    }else if(result==="Restart the game"){
        alert(result);   
        div_result.textContent=result;
    }else{
        div_result.textContent=result;
        div_player_score.textContent=count_win+"";
        div_computer_score.textContent=count_lost+"";
    }
  });

function computerPlay(){
    const months = ["Rock", "Paper" ,"Scissor"];

const random = Math.floor(Math.random() * months.length);
//console.log(random, months[random]);
return months[random];
}

//console.log(computer);

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

function game(player,computer,div_result){
    let result=null;
   
    //let count=5;
    //for (let i = 0; i < count; i++) {
        //let player=prompt("Insert your choice:");
        let statut=playSingleRound(player,computer);
        //div_result.textContent=statut;
        result=statut;
        console.log(statut);
        /*if(statut==="Invalid input, verified your input;Please!!"){
            count=count+1;
        }*/
        
    //}
    if(count_win<count_lost && count_lost===5){
        result="You lost the game; the comptuter win";
    }else if(count_win>count_lost && count_lost===5){
        result="You win the game; Congratulation !!";
    }else if(count_lost===5 && count_win===5){
        result="Match null; Congratulation !!";
    }
    if(count_lost>5 || count_win>5){
        result="Restart the game";
        return result;
    }
    return result;

}
//console.log(game());

