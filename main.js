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
}

function modelLoaded () {

    console.log("PoseNet Loaded Successfully :)")

}

function gotPoses (results) {
    if (results.length > 0) {
        console.log(results);
    }
}