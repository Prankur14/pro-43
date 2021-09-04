var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;
var x = window.innerWidth / 2;
var y = 800;
var issX = window.innerWidth / 2;
var issY = 300;
let meme;
let memeX = -200;
let myX;
let currenturl = window.location.href;
let soundTimer = 0;

function preload() {
    bg = loadImage("space.jpg");
    issimg = loadImage("iss.png");
    scimg = loadImage("spacecraft1.png");
    scimg1 = loadImage("spacecraft2.png");
    scimg2 = loadImage("spacecraft3.png");
    scimg3 = loadImage("spacecraft4.png");
    memeImage = loadImage('meme.gif');
    meme = loadSound('meme.ogg');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    spacecraft = createSprite(x, y);
    spacecraft.addImage(scimg);
    spacecraft.scale = 0.35;
    iss = createSprite(issX, issY);
    iss.addImage(issimg)
    iss.scale = 0.55;
    timer = createSprite(0, 0, 50, 50);

}

function draw() {
    background(bg);
    if (second() % 5 == 0) {
        fullscreen(true);
    }
    if (!hasDocked) {
        spacecraft.x += (Math.round(random(-1, 1)));
        spacecraft.y += (Math.round(random(-1, 1)));

        if (keyDown("UP_ARROW")) {
            spacecraft.y -= 5;
            spacecraft.addImage(scimg1);
        }

        if (keyDown("LEFT_ARROW")) {
            spacecraft.addImage(scimg3);
            spacecraft.x = spacecraft.x - 5;
        }

        if (keyDown("RIGHT_ARROW")) {
            spacecraft.addImage(scimg2);
            spacecraft.x = spacecraft.x + 5;
        }

        if (keyDown("DOWN_ARROW")) {
            spacecraft.y += 5
        }
    }
    timer.visible = false;

    if (spacecraft.y <= (iss.y + 140) && spacecraft.y >= (iss.y + 30 - 70) && spacecraft.x <= (iss.x - 15) && spacecraft.x >= iss.x - 60) {
        hasDocked = true;
        fill("white")
        textFont("comfortaa");
        push();
        textSize(45);
        text("Docking Successful!", width / 2 - 200, height / 2 + 180);
        pop();
    }

    console.log(timer.x);

    if (hasDocked) {
        image(memeImage, memeX, height / 2);
        if (soundTimer === 0) {
            meme.play();
            soundTimer = 1;
            timer.velocityX = 1;
        }
        if (timer.x > 110) {
            memeX = 10000;
            window.location.reload();
        }

    }

    drawSprites();
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}
