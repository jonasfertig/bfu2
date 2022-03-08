//basic parameters
var y = 600;
var x = 500;
var y_vel = 0;
var x_accel = 0;
var y_accel=0;
var velocity = 10;
var points=0;
var highscore=0;
var canvas = document.querySelector('canvas');
canvas.width = 3500;
canvas.height =1300;
var c = canvas.getContext('2d');
let image = new Image();
image.src = "paul-side-walk.png";
let imageBus = new Image();
imageBus.src="fertig-bus.png";
let background = new Image();
background.src="back.png";
//initialize
//Object Spawn
class Spawner{
    constructor(){
        this.hinderniss=getSpawnObject(1);
        this.hinderniss2 =new Nothing(1200,2);
        this.hinderniss3= new Nothing(2400,3);
    }
    setPosition(){
        this.hinderniss.setPosition();
        this.hinderniss2.setPosition();
        this.hinderniss3.setPosition();
    }
    newhinderniss(hindernissnummer){
        if(hindernissnummer===1){
            this.hinderniss=getSpawnObject(1);
        }
        if(hindernissnummer===2){
            this.hinderniss2= getSpawnObject(2);
        }
        if(hindernissnummer===3){
        this.hinderniss3 = getSpawnObject(3);
        }
    }
}
class Rock{
    constructor(){
        this.hoehe=100;
        this.weite=100;
        this.positionx = 4000;
        this.positiony = 700;
        this.pointgiven=false;
    }
    setPosition(){
        this.positionx-=10;
        if(this.positionx<(-100)){Spawn.newhinderniss()}
        if(this.positionx<600&&this.positionx>400){this.pass()}
    }
    getImage(){
        return image;
    }
    pass(){
        if(y>500){
            if(highscore<points){
                highscore=points;
            }
            clearCanvas();
        }else{
            if(this.pointgiven===false){points+=1;this.pointgiven=true}
        }
    }
}
var spawn = new Spawner();
//Gamestart
var audio = document.querySelector('audio');
var audiotest=false;


//Draw
function draw(){
    //Background
    c.fillStyle ="black";
    c.fillRect(0,0,4500,4500);
    drawBackground();
    //Umgebung
    c.fillStyle = "grey";
    c.fillRect(0,800,4500,50);

    //Player
    c.fillStyle ="black";
    y_vel = y_vel+y_accel;
    y = y-y_vel;
    getPlayermodel();
 //   c.fillRect(x,y,100,200);
    
    //points
    c.font = "30px Comic Sans MS";
    c.fillStyle = "#DC7000";
    c.fillText(points, 10, 50);
c.fillText('Highscore: ' + highscore,10,100);
    //Objects

    //c.fillStyle="black";
    //c.fillRect(Spawn.hinderniss.positionx, Spawn.hinderniss.positiony, Spawn.hinderniss.weite, Spawn.hinderniss.hoehe);
    spawn.hinderniss.drawhinderniss(c);
    spawn.hinderniss2.drawhinderniss(c);
    spawn.hinderniss3.drawhinderniss(c);

    spawn.setPosition();
    if(y>600){
        y=600;
        y_accel=0;
        y_vel=0;
    }
    drawBus();
}
//SpaceBarPressed
function onspace(){
if(y_vel===0 && y_accel===0){y_accel=-0.9; y_vel=30}
}
//Background
function drawBackground(){
    c.drawImage(background,0,0,1920,1920,0,0,4500,4500);

}

//Bus
var busimage = 0;
var busx = 2000
var busy=600;
var busveloy = 3;
var busvelox = 0;
var busaccelx=0.01;
function drawBus(){
   
   //hier kommt ein image hin
    getBusmodel();
    
    //wackeln nach oben und unten
    busveloy = busveloy - 0.15;
    busy = busy-busveloy;
    if(busy>=600){
        busy=600;
        busveloy=3;
    }

    //wackeln nach links und rechts
    busvelox = busvelox + busaccelx;
    busx = busx + busvelox;
    if(busx<=1980 && busaccelx<0 || busx>=2020 && busaccelx>0){
        busaccelx = busaccelx*(-0.2);
    }
    if(busx<1950){busvelox=0; busaccelx=0.01;}
    if(busx>2050){busvelox=0; busaccelx=-0.01;}

}





function line(cv, a, b, c,d){
cv.beginPath();
cv.moveTo(a,b);
cv.lineTo(c,d);
cv.stroke();
}

function clearCanvas(){
    y = 700;
    x = 500;
    y_vel = 0;
    x_accel = 0;
    y_accel=0;
    points=0;
    randomA=0;
    randomObject=3
    spawn = new Spawner;

}
var timer =1;
function getPlayermodel(){
    if(y<600){
        c.drawImage(image,64,64,64,64,500,y,200,200);
    }else{
        timer+=1;
        if(timer>=20){timer=1;}
        if(timer < 5){
            c.drawImage(image,0,0,64,64,500,y,200,200)
        }else if(timer<10){
            c.drawImage(image,64,0,64,64,500,y,200,200)
        }else if(timer<15){
            c.drawImage(image,0,64,64,64,500,y,200,200)
        }else{
            c.drawImage(image,64,64,64,64,500,y,200,200)
        }
    }
}

function getBusmodel(){
    if(timer<10){
        c.drawImage(imageBus,0,0,360,360,busx,busy-400,1000,1000)
    }else{
        c.drawImage(imageBus,0,360,360,360,busx,busy-400,1000,1000)
    }
}