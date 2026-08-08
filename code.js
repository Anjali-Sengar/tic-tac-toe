let boxes=document.querySelectorAll(".box");

let reset_btn =document.querySelector("#reset-btn");

let new_game =document.querySelector("#new-game");

let msg_container=document.querySelector(".msg-container");

let msg=document.querySelector("#msg");

let emoji=document.querySelector(".emoji");


let turnO=true;
 let count=0;

const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


 const resetGame =()=>{
    turnO=true;
    count =0;
    enableBoxes();
 msg_container.classList.add("hide");

 };
  




boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
      box.innerText="O";
        // box.style.color=" #8dbfc0";
         box.style.color=" cyan";
      turnO=false;
    
      box.style.textShadow=" 0 0 10px blue,0 0 30px blue";
    }
    
    else{
     box.innerText="X";
    turnO=true;
     box.style.color="pink";
     box.style.textShadow=" 0 0 10px red,0 0 40px red";
    }
     
    count++;
    box.disabled=true;

   let isWinner= checkWinner();
   if(count===9 && !isWinner){
    drawgame();
   }

    });
});



const enableBoxes=()=>{
   for(let box of boxes){
    box.disabled=false;
    box.innerText="";
   }
    
  };


 const disabledBoxes=()=>{
for(let box of boxes){
      box.disabled=true;
}
};





const showWinner =(winner)=>{
  msg.innerText=`Congratulation winner is ${winner}`;
  emoji.innerText=`🎉`;
  msg_container.classList.remove("hide");
  disabledBoxes();

    
};


const drawgame=()=>{
     msg.innerText=`Game was Draw`;
     msg_container.classList.remove("hide");
     emoji.innerText="";
      disabledBoxes();

};




const checkWinner=()=>{
  for(let  pattern of winPattern) {
     let val1 =boxes[pattern[0]].innerText;
    let  val2 =boxes[pattern[1]].innerText;
     let val3=boxes[pattern[2]].innerText;

    if(val1 !="" && val2 !="" && val3 !=""){
      if(val1===val2 && val2===val3){
        showWinner(val1)
          return true;
        
      }
    }

    }
};


reset_btn.addEventListener("click", resetGame);
new_game.addEventListener("click",resetGame);

