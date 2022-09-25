lWrist = 0;
rWrist = 0;
difference = 0;


function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(550, 500)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function draw () {
    background ("#ffffff");
    textSize(difference);
    fill("#a12325")
    text('Darshini', 100, 150);


}

function modelLoaded () {

    console.log("PoseNet Loaded Successfully :)")

}

function gotPoses (results) {
    if (results.length > 0) {
        console.log(results);
    }

    lWrist = results[0].pose.leftWrist.x;
    rWrist = results[0].pose.rightWrist.x;
    difference = Math.floor(lWrist - rWrist);

    console.log("L = " + lWrist +  " / R = " + rWrist + " / Diff = " + difference);
}