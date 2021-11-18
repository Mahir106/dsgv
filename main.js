function preload(){

}

function setup(){
canvas = createCanvas(600, 480);
canvas.position(110, 200);
Video = createCapture(VIDEO);
Video.hide();
}

function draw(){
    image(Video, 110, 85, 350, 300);
    rect(61, 75, 20, 320);
    rect(500, 75, 20, 320);
    fill(21, 3, 255);
    circle(70, 50, 50);
    circle(70, 420, 50);
    circle(510, 50, 50);
    circle(510, 420, 50);
    
    circle(120, 50, 50);
    circle(170, 50, 50);
    circle(220, 50, 50);
    circle(270, 50, 50);
    circle(320, 50, 50);
    circle(370, 50, 50);
    circle(420, 50, 50);
    circle(470, 50, 50);

    circle(120, 420, 50);
    circle(170, 420, 50);
    circle(220, 420, 50);
    circle(270, 420, 50);
    circle(320, 420, 50);
    circle(370, 420, 50);
    circle(420, 420, 50);
    circle(470, 420, 50);

}

function take_snapshot(){
    save("birthday.png");
}
