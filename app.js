  let userScore = 0;
  let compScore = 0;
  
  const choices = document.querySelectorAll(".choice");
  const msg = document.querySelector("#msg");

  const userScorepara = document.querySelector("#user-score");
  const compScorepara = document.querySelector("#comp-score");


  
  const genComputeChoice = () => {
    const options = ["rock", "paper","scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];

  }

const drawGame = () =>{
    msg.innerText = "Game was draw! play again";
    msg.style.backgroundColor = "#081b31";

}
 

const showWinner = (userWin , userChoice , compChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You win!, your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText =`You lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
}

   //game logic
   
   const playGame = (userChoice) =>{
         
        // generate computer choice --> modular
        const compChoice = genComputeChoice();
       


        if(userChoice === compChoice){
            //Draw Game
            drawGame();
        }else{
            let userWin = true;
            if(userChoice === "rock"){
                // scissors,paper
                userWin = compChoice ==="paper" ? false:true;
            } else if(userChoice === "paper"){
                //rock, scissors
               userWin = compChoice === "scissors" ? false : true;
            }else{
                //rock , paper
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin,userChoice , compChoice);
        }
   }


   // for user choice
  choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        // console.log('choice was clicked' , userChoice);
        playGame(userChoice);
    })
  })