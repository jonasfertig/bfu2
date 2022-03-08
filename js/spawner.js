
let imagebierkiste = new Image();
imagebierkiste.src = "object-bierkiste.png";
let imageflaschen = new Image();
imageflaschen.src="object-flaschen.png";
var randomA=0;
var randomObject=3

function getSpawnObject(hindernissnummer){
    
    if(randomObject<=1){
        randomObject=Math.random()*3;
        return new Nothing(0,hindernissnummer);
    }
    if(randomObject<=2){
        randomObject=Math.random()*3;
        return new Bierkiste(hindernissnummer);
    }
    if(randomObject<=3){
        randomObject=Math.random()*3;
        return new Flaschen(hindernissnummer);
    }
    return new Flaschen(hindernissnummer);
}
class Nothing{
    constructor(aufschlag, hindernissnummer){
        this.hoehe=100;
        this.weite=100;
        this.positionx = 3300+randomA+aufschlag;
        this.positiony = 700;
        this.pointgiven=false;
        this.number = hindernissnummer;
        randomA=Math.random()*200;
    }
    setPosition(){
        this.positionx-=10;
        if(this.positionx<(-100)){spawn.newhinderniss(this.number)}
        if(this.positionx<600&&this.positionx>400){this.pass()}
    }
    drawhinderniss(space){
    }
    pass(){
        if(this.pointgiven===false){points+=1;this.pointgiven=true}
    }
}
class Bierkiste{
    constructor(hindernissnummer){
        this.hoehe=100;
        this.weite=100;
        this.positionx = 3600+randomA;
        this.positiony = 700;
        this.pointgiven=false;
        this.number=hindernissnummer;
        randomA= Math.random()*200;
    }
    setPosition(){
        this.positionx-=10;
        if(this.positionx<(-100)){spawn.newhinderniss(this.number)}
        if(this.positionx<600&&this.positionx>400){this.pass()}
    }
    drawhinderniss(space){
        space.drawImage(imagebierkiste,80,180,65,55,this.positionx,600,200,200);
    }
    pass(){
        if(y>500){
            if(highscore<points){
                highscore=points;
            }
            death();
        }else{
            if(this.pointgiven===false){points+=1;this.pointgiven=true}
        }
    }
}

class Flaschen{
    constructor(hindernissnummer){
        this.hoehe=100;
        this.weite=100;
        this.positionx = 3600+randomA;
        this.positiony = 700;
        this.pointgiven=false;
        this.number=hindernissnummer;
        randomA= Math.random()*200;
    }
    setPosition(){
        this.positionx-=10;
        if(this.positionx<(-100)){spawn.newhinderniss(this.number)}
        if(this.positionx<600&&this.positionx>400){this.pass()}
    }
    drawhinderniss(space){
        space.drawImage(imageflaschen,120,140,90,90,this.positionx,600,200,200);
    }
    pass(){
        if(y>500){
            if(highscore<points){
                highscore=points;
            }
            death();
        }else{
            if(this.pointgiven===false){points+=1;this.pointgiven=true}
        }
    }
}