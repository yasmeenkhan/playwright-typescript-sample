// const bg = document.querySelector('#stop').

// generate a randome color
  const hex = "0123456789ABCDEF"
  let intervalId
const randDomColor = function(){
  let color = '#'
    for(let i=0; i<6; i++){
        color += hex[(Math.floor(Math.random() * 16))];
        
    }
    return color
    
}

const startChangingColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000)
    }
    
    function changeBgColor(){
        const c = randDomColor();
        console.log('tick', c);
        document.body.style.backgroundColor = c;
    }

};
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null
};
document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);