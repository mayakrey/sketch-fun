function setup() {
    createCanvas(800, 600);
    line(640, 360, 100, 100);
    fill(126);
    background(30, 30, 10);
}

function draw() {
    stroke(50,200,40);
    line(mouseX-30, mouseY-30, mouseX+30, mouseY+30);
    line(mouseX+30, mouseY-30, mouseX-30, mouseY+30);
}