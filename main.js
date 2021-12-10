var video;
var canvas;
var poseNet;
var noseX = 0;
var noseY = 0;
var leftWristX = 0;
var rightWristX = 0;
var differece = 0;

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
    textSize(differece);
    fill('#FFE787');
    text('Code', noseX, noseY)
}

function modelReady(){
    console.log("Model ready")
}

function gotPoses(results){
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        differece = floor(leftWristX - rightWristX)
    }
}