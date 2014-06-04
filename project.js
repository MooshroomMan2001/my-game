//Title the game
title("Killer the dog");
//Object for bullets
var dog = {
    x: 50,
    y: 470,
    enemyOne: false
    
};

//Base image variables
var img;
var music;
var audio;
//Actual variables
var screenSize = [ 625, 450 ];
var textY = 300;
var textX = 300;
var barfX = dog.x + 100;
var barfFired = false;
var barfY = 400;
var x = 625;
var y = 225; 
var dog;

//mouseClicked function
var mouseClicked = function(){
    barfFired = true;
    barfX = mouseX + 200;
    barfY = mouseY;
    audio.play();
};

//Enemy objects (Includes x and y)
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





// this code is executed once when the program is started
var setup = function() {
    audio = new Audio("Barf.mp3");
    music = new Audio("Pokemon Blue_Red - Lavender Town.mp3");
    music.controls = true;
    music.loop = true;
    music.autoplay = true;
    document.body.appendChild(music);
    img = loadImage("Background.png");
    dog = loadImage("Untitled.png");
    // set up the size of the canvas (you probably don't want to change this!)
    size(625, 450);
};


//Enemy moving and drawing functions
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
    //call move enemy functions
    moveEnemy(enemyOne);
    moveEnemy(enemyTwo);
    moveEnemy(enemyThree);
    //call images
    image(img, 0, 0);
    image(dog, mouseX, mouseY);
    //barf fired if statement
    if(barfFired){
	fill(166, 255, 0);
	rect(barfX, barfY, 20, 20);
	barfX = barfX + 5;
	//Key pressed if statements
	if(keyIsPressed && keyCode === UP){
	    barfY -= 5;
	} else if(keyIsPressed && keyCode === DOWN){
	    barfY += 5;
	}
    }
    //call draw enemy functions
    drawEnemy(enemyOne);
    drawEnemy(enemyTwo);
    drawEnemy(enemyThree);
    //collision detection of enemies and walls

    if(enemyOne.x < 1){
	enemyOne.x = 625;

    }

    if(enemyTwo.x < 1){
	enemyTwo.x = 700;
    }

    if(enemyThree.x < 1){
	enemyThree.x = 800;

    }
    //collision detection between bullets and enemies

    if((barfX > enemyOne.x)
       && (barfY > enemyOne.y)
       && (barfY < (enemyOne.y + 30))){
	enemyOne.x = 625;
    }

    if((barfX > enemyTwo.x)
       && (barfY > enemyTwo.y)
       && (barfY < (enemyTwo.y + 30))){
	enemyTwo.x = 700;
    }

    if((barfX > enemyThree.x)
	&& (barfY > enemyThree.y)
	&& (barfY < (enemyThree.y + 30))){
	enemyThree.x = 800;
    }
    //To keep the enemies coming if the bullet isnt fired

    if (barfX > 800) {
	barfFired = false;
	barfX = 0;

    }
    //Wall collision detection, with every wall
    if(mouseX > 550){
	fill(255, 0,0);
	textSize(50);
	text("You died!", 312, 312);
	dog = loadImage("Killed.png");
    }
    if(mouseY > 400){
	fill(255, 0, 0);
	textSize(50);
	text("You died!", 312, 312);
	dog = loadImage("Killed.png");
    }
    if(mouseX < 10){
	fill(255, 0, 0);
	textSize(50);
	text("You died!", 312, 312);
	dog = loadImage("Killed.png");
    }

     if(mouseY < 10){
	fill(255, 0, 0);
	textSize(50);
	text("You died!", 312, 312);
	dog = loadImage("Killed.png");
    }
	
}

   
    



    
