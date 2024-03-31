let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
let msg =document.querySelector("#msg");
let dcomscore=document.querySelector("#computerscore");
let duserscore=document.querySelector("#usescore");
console.log(msg.textContent);
// msg.textContent="new";

const drawGame=()=>{
    console.log("this was a draw");
}

const getcompChoice=()=>{
    //rock paper scissors
    let options=[ "rock", "paper","scissor"] 
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}


const playGame=(userChoice)=>{
    console.log("user choice = " ,userChoice);
    //generate comp choice
    const compChoice=getcompChoice();
    console.log("cmp choice is ", compChoice);
    if (userChoice===compChoice) {
        drawGame();
        msg.textContent="this was a draw";
    }else{
        if (userChoice==="rock") {
            if (compChoice!=="paper") {
                userscore=userscore+1;
                msg.textContent="you won!";
            }else{
                 compscore=compscore+1;
                 msg.textContent=" opps! you lost"; 
            }
        }else if (userChoice==="paper") {
            if (compChoice!=="scissor") {
                userscore=userscore+1;
                msg.textContent="you won!";
            }else{ 
                compscore=compscore+1;
                msg.textContent=" opps! you lost"; 
            }
        }else if (userChoice==="scissor") {
            if (compChoice!=="rock") {
                userscore=userscore+1;
                msg.textContent="you won!";
            }else{ 
                compscore=compscore+1;
                msg.textContent=" opps! you lost"; 
            }
        }
    }

    console.log("user score",userscore);
    console.log("com score",compscore);
    dcomscore.textContent=compscore;
    duserscore.textContent=userscore;


}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
       console.log("choice was clicked",userChoice); 
       playGame(userChoice);
    })
})