let box=document.querySelectorAll('.box');
let restart=document.querySelector('.reset');
let msg=document.querySelector('.msg');
let hide=document.querySelector('.hide');

let turnO=true;
const winCombos=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
box.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(box.innerHTML==='X' || box.innerHTML==='O'){
            return;
        }
        if(turnO){
            box.innerHTML='O';
        }
        else{
            box.innerHTML='X';
        }
        turnO=!turnO;
        checkWin();
    });
}
);
const showWin=(winner)=>{
    if(winner === "Draw"){
        msg.innerText=`It's a Draw!`;
    }else{
    msg.innerText=`Winner is ${winner}`;}
    hide.classList.remove('hide');
};

const checkWin=()=>{
        for(let pattern of winCombos){
            let val1=box[pattern[0]].innerText;
            let val2=box[pattern[1]].innerText;
            let val3=box[pattern[2]].innerText;
            if(val1 !=''&& val2 !=''&& val3 !=''){
                if(val1===val2 && val2===val3){
                    console.log('winner',val1);
                    showWin(val1);
                    return;

            }}}
            let isDraw = true;
            box.forEach((box) => {
                if (box.innerHTML === '') {
                    isDraw = false;
                }
            });
            if (isDraw) {
                showWin('Draw');
            }
        };
        
        
restart.addEventListener('click',()=>{
    box.forEach((box)=>{
        box.innerHTML='';
    });
    turnO=true;
    hide.classList.add('hide');
});

 