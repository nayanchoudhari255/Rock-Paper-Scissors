let userscore=0;
let comscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const genCompchoice =()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}


const drawgame=()=>{
    console.log("game was draw.");
    msg.innerText="Game was Draw.Play again";
    msg.style.backgroundColor="#081b31";
}

const showwinner=(userwin,userchoice,compchoice)=>{
if(userwin){
    userscore++;
    userscorepara.innerText=userscore;
    msg.innerText=`You win! your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
}else{
 comscore++;
 compscorepara.innerText=comscore;
    msg.innerText=`You lose. ${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";
}
};


const playgame=(userchoice)=>{
console.log("user choice =",userchoice);

//generate computer choice
const compchoice =genCompchoice();
console.log("comp choice =",compchoice);

if(userchoice===compchoice){
    //draw game
    drawgame();
}else{
    let userwin=true;
    if(userchoice==="rock"){
        userwin= compchoice==="paper"?false:true;
    }else if(userchoice==="paper"){
        userwin=compchoice==="scissor"?false:true;
    }else {
        userwin=compchoice==="rock"?false:true;    }
        showwinner(userwin,userchoice,compchoice);
}
};



choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
       
 playgame(userchoice);
    });
});