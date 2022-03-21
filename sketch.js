var bg, bg_image;

function preload() {
    bg_image = loadImage("bg.jpg");
}

function setup() {
    createCanvas(1200, 700);
    bg = createSprite(1000, 350);
    bg.addImage(bg_image);
    bg.scale = 0.32;

    // if scale decrease, then other values such as image length increases

}

function draw() {
    background(0);

    bg.velocityX = -6;

    if (bg.x < 185) {
        bg.x = bg.width / 6;
    }


    drawSprites();
}