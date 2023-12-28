NoseX = 0;
NoseY = 0;
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/Fzs4vfXm/Clownnose2-removebg-preview.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if (results.length > 0)
    {
        console.log(results);
        NoseX = results[0].pose.nose.x - 12;
        NoseY = results[0].pose.nose.y - 12;
        console.log("Nose X =" + NoseX);
        console.log("Nose Y = " + NoseY);
    }
}

function modelLoaded(){
    console.log("Posenet is initiallized")
}

function draw(){ 
    image(video, 0, 0, 300, 300);
    image(clown_nose, NoseX, NoseY, 30, 30)
}
function take_snapshot(){
    save('meWithClownNose.png');
    
}