var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;
var x = window.innerWidth / 2;
var y = 500;
var issX = window.innerWidth / 2;
var issY = 300;
let reloadButton;
let meme;
let memeX = -200;
let myX;


function preload() {
    bg = loadImage("space.jpg");
    issimg = loadImage("iss.png");
    scimg = loadImage("spacecraft1.png");
    scimg1 = loadImage("spacecraft2.png");
    scimg2 = loadImage("spacecraft3.png");
    scimg3 = loadImage("spacecraft4.png");
    memeImage = loadImage('meme.gif');
    meme = loadSound('meme.ogg');


    // meme= createVideo('meme.mp4');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    spacecraft = createSprite(x, y);
    spacecraft.addImage(scimg);
    spacecraft.scale = 0.35;
    // reloadButton = createButton("reload")
    iss = createSprite(issX, issY);
    iss.addImage(issimg)
    iss.scale = 0.55;
    // meme = createSprite(window.innerWidth / 2, 300);

}

function draw() {
    background(bg);

    if (second() % 5 == 0) {
        fullscreen(true);
    }
    // fullscreen(true);
    spacecraft.addImage(scimg);
    if (!hasDocked) {

        // meme.visible = false;
        spacecraft.x += (Math.round(random(-1, 1)));
        spacecraft.y += (Math.round(random(-1, 1)));

        // reloadButton.position(200 ,1500)

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

//         if (mouseIsPressed) {
//             spacecraft.x = mouseX;
//             spacecraft.y = mouseY;
//         }
        // document.getElementById()


    }

    if (spacecraft.y <= (iss.y + 140) && spacecraft.x <= (iss.x - 15) && spacecraft.x >= iss.x - 60) {
        hasDocked = true;
        fill("white")
        textFont("comfortaa");
        push();
        textSize(45);
        text("Docking Successful!", width / 2 - 200, height / 2 + 180);
        pop();
        // push();
        // textSize(15);
        // // text("This page will reload in 5 seconds.", width / 2 - 200, height / 2 + 250)
        // pop();
        //
        // textSize
        // if (second() % 5 === 0) {
        //     window.location.reload();
        // }
    }

    console.log(myX);

    if (hasDocked) {


        if (meme.isPlaying() === false) {
            meme.play();
            // meme.loop(100000);
            // alert("hi");
            // memeX = 10000;
            // alert("hello");
            console.log("false");
        } else {
            memeX += 1

            console.log("true");
            myX = memeX;


        }


        image(memeImage, memeX, height / 2 + 100);

    }
    if (memeX > -95) {
        window.location.reload();
    }

    drawSprites();
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}
