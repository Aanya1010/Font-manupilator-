noseX=0;
noseY=0;
differnce= 0;
rigthWristX =0;
leftWristY =0;



function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
  
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
  
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log('PoseNet is Initalized');
}

function poseNet(results) {
if(results.length > 0)
{
console.log(results);
noseX= results[0].pose.nose.x;
noseY= results[0].pose.nose.y;
console.log("noseX = " + noseX +" noseY  = " + noseY);

leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;

differnce = floor(leftWristX - rightWrist);

console.log("leftWristX =" + leftWristX + "rightWristX ="+ rightWristX + " difference =" + differce);
}
  }

  function draw() { 
  background('#969A97');

  document.getElementById("square_side").innerHTML = "Width And Height of a square will be =" + differnce +"px";
  fill('F90093');
  stroke('F90093');
  square(noseX, noseY, differnce);
  }