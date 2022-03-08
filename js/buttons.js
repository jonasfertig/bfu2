var intervall = 20;
var animation;
var fasteningAnimation;
var dead=true;
function pressStart(){
    if(dead){
    dead=false;
    clearInterval(animation);
    clearInterval(fasteningAnimation);
    clearCanvas();
    animation = setInterval(draw,20);
    fasteningAnimation = setInterval(fastenUp,10000);
    }
}
function fastenUp(){
    clearInterval(animation);
    animation = setInterval(draw,intervall);
    if(intervall>8){
        intervall -=  1;
    }
}
function death(){
    randomA=0;
    randomObject=3
    dead=true;
    intervall=20;
    clearInterval(animation);
    clearInterval(fasteningAnimation);
    clearCanvas();
}
var button1=document.querySelector('#start');
var button2=document.querySelector('#sound');
function pressMusic(){
    if(audiotest===false){
        audio.play();
        audiotest=true;
        button2.style.color='black';
    }else{
        audio.pause();
        audiotest=false;
        button2.style.color='red';
    }
}
draw();