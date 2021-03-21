function setup() {
    createCanvas(800, 600);
    background(30, 30, 10);
}

function draw() {
    if (mouseIsPressed) {
        stroke(createRandomNumber(0, 255), createRandomNumber(0, 255), createRandomNumber(0, 255));
    } else {
        stroke(255, 255, 255);
    }
    line(mouseX-30, mouseY-30, mouseX+30, mouseY+30);
    line(mouseX+30, mouseY-30, mouseX-30, mouseY+30);
}

function createRandomNumber(min, max) {
    return Math.random() * (max - min);
}