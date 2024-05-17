// generating Random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) { 
        color += hex[Math.floor(Math.random()* 16)] // esse color ki random value ko add krenge
    }
    return color;   // yaha pe generated color return hogi
};
//console.log(randomColor()); // yaha se finally random color generated

/*  
.......... usecase of Math.random()...........
1. math.random.... used for generating random value
2.console.log(Math.random());  //generate random no
3. console.log(Math.random()*16);// generate 16 random no starting from 0
4. console.log(Math.random()*16 +1);//  generate 16 random no starting from 1
5.console.log(Math.floor(Math.random() * 16)); //esse floor value mil jayega 0 to 15 

*/
// now working for 'start' and 'stop'button ki reference
let intervalId;  //yaha pr global scope me intervalId ko define kiy hai stop function k access k liy 
const startChangingColor = function () {
    if (!intervalId) {
         intervalId = setInterval(changeBgColor, 1300);
    }
    /* 
    / setInterval(changeBgColor, 1300); // setInterval() method calls a function:changeBgColor at specified intervals of 1second. ... esse app "stop" ki action ko nhi lga sakte hai ..q ki uske liy ak referenceId ki jarurat padti hai....as done below👇
    
    //intervalId = setInterval(changeBgColor, 1300); // setInterval() method ko 'stop' krne ke ak reference Id ki jarurat hoti hai esliy yaha pe "intervalId" ka reference bnaya gatya hai
    
    */
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor(); // esse styling kr diy hai pure body m 
    }
};

const stopChangingColor = function () {
    clearInterval(intervalId);                 // stop krne k liy 
    intervalId = null;   //esse memory ki space save rahega 
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);