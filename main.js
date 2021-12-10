var video;
var canvas;
var poseNet;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(800, 170)

    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on('pose', gotPoses)
}
function draw(){
    background('#636d78')
}

function modelReady(){
    console.log('poseNet is ready');
}

function gotPoses(results){
    if(results.length > 0) {
        console.log(results)
    }
}