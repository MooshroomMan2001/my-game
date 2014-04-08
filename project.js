title("My game");
//Put variables anywhere
var img;
var music;
var audio;
var dog;
var textY = 300;
var textX = 300;
var barfX = 1;
var barfFired = false;
var barfY = 150;
var x = 625;
var y = 225; 

var enemyOne = {
    x: 625,
    y: 225
};

var enemyTwo = {
    x: 700,
    y: 225
};

var enemyThree = {
    x: 800,
    y: 225
};

var keyPressed = function() {
}


// this code is executed once when the program is started
var setup = function() {
    audio = new Audio("Barf.mp3");
    music = new Audio("mixdown.wav");
    music.controls = true;
    music.loop = true;
    music.autoplay = true;
    document.body.appendChild(music);
    img = loadImage("Background.png");
    dog = loadImage("Untitled.png");
    // set up the size of the canvas (you probably don't want to change this!)
    size(625, 450);
};

//mouse clicked function
var mouseClicked = function(){
    barfFired = true;
    barfX = 1;
    audio.play();
};

var moveEnemy = function(enemy) {
    enemy.x = enemy.x - 1;
}

var drawEnemy = function(enemy) {
    fill(255, 0, 0);
    rect(enemy.x, enemy.y, 30, 30);
}

// override draw function, by default it will be called 60 times per second
var draw = function() {  
    background(200, 255, 100);
    moveEnemy(enemyOne);
    moveEnemy(enemyTwo);
    moveEnemy(enemyThree);
    image(img, 0, 0);
    image(dog, mouseX, mouseY);
    if(barfFired){
	fill(166, 255, 0);
	rect(barfX, barfY, 20, 20);
	barfX = barfX + 5;
	if(keyIsPressed && keyCode === UP){
	    barfY -= 5;
	} else if(keyIsPressed && keyCode === DOWN){
	    barfY += 5;
	}
    }

    drawEnemy(enemyOne);
    drawEnemy(enemyTwo);
    drawEnemy(enemyThree);

    if(enemyOne.x < 1){
	enemyOne.x = 625;

    }

    if(enemyTwo.x < 1){
	enemyTwo.x = 700;
    }

    if(enemyThree.x < 1){
	enemyThree.x = 800;

    }

    if((barfX > enemyOne.x)
       && (barfY > enemyOne.y)
       && (barfY < (enemyOne.y + 30))){
	enemyOne.x = 625;
    }

    if(barfX > enemyTwo.x){
	enemyTwo.x = 700;
    }

    if(barfX > enemyThree.x){
	enemyThree.x = 800;
    }

    if (barfX > 800) {
	barfFired = false;
	barfX = 0;
    }

    if (barfY > enemyTwo.y){
	enemyTwo.y = 225;
    }

    if (barfY > enemyThree.y){
	enemyThree.y = 225;
    }
};

