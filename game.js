let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user_score");
const comp_score = document.querySelector("#comp_score");

const genCompChoice = () =>{
    const options = ["rock" , "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame = ( userChoice,compChoice) =>{
    console.log("game was draw.");
    msg.innerText=`game was DRAW ! your choice = ${userChoice} & bot's choice= ${compChoice}`;
    msg.style.backgroundColor = "blue";
}
const showWinner = (userWin , userChoice, compChoice) => {
    if(userWin)
    {   
        console.log("you won");
        msg.style.backgroundColor = "green";
        msg.innerText=`you WON ! your ${userChoice} beats  ${compChoice}`;
        userScore++;
        user_score.innerText = userScore;
        
    }
    else{
        console.log("you loose ");
        msg.innerText=`you LOST !  ${compChoice} beats your  ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        comp_score.innerText = compScore;
    }
};
const playGame = (userChoice) => {
    console.log("user choice =" , userChoice);
    const compChoice = genCompChoice();
    console.log ("comp choice =", compChoice);
    if(userChoice === compChoice){
        drawGame( userChoice, compChoice);
    }
    else{
     let userWin = true;
     if(userChoice === "rock")
     {
        userWin = compChoice === "paper"? false : true ;
     }
     else if(userChoice === "paper")
     {
        userWin = compChoice ==="scissor"? false: true;
     }
     else
     {
        userWin = compChoice ==="rock"? false:true;
     }
     showWinner(userWin , userChoice,compChoice);
  }
};
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})