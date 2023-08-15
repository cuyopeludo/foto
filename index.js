var noseenx=0;
var noseeny=0;

function preload()  {
ymaj3=loadImage("sonrie.png")

    
}


function setup(
){
canvas=createCanvas(600,600);
canvas.position(110,250
    );
video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video, fvcti0ñ);
poseNet.on("pose", uuhaha);
}
function fvcti0ñ(){
console.log("copy")


}




function draw(){
image(video, 0,0, 600, 600);


}

function take_snapshot(){ save('cuyo_gato.png');
 }
 

