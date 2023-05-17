var x=0;
var y=0;
var rectangulo="";
var circulo="";
var SpeechRecognition=window.webkitSpeechRecognition;
var voz=new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="la computadora te esta escuchando habla para que dibuje";
    voz.start();
}
voz.onresult=function(event){
    console.log(event);
    var resultado=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="La computadora te entendio: "+resultado;
    if (resultado=="Circle."){
        circulo="dibujar";
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
    }
    if (resultado=="Rectangle."){
        rectangulo="dibujar";
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
    }
}
function setup(){
    canvas=createCanvas(900,600);
}
function draw(){
    if (circulo=="dibujar"){
        var radio=Math.floor(Math.random()*100);
        circle(x,y,radio);
        circulo="";
        document.getElementById("status").innerHTML="termine de dibujar";
    }
    if (rectangulo=="dibujar"){
        var ancho=Math.floor(Math.random()*100);
        var alto=Math.floor(Math.random()*100);
        rect(x,y,ancho,alto);
        rectangulo="";
        document.getElementById("status").innerHTML="termine de dibujar";

    }
}