var pixelSize = 14;
var total_row = 30; //row total
var total_col = 30; //column total
var snakeBlock;
var canves;

var snakeX = pixelSize * 5;
var snakeY = pixelSize * 5;

var speedX = 0;  //x coordinate speed.
var speedY = 0;  //y coordinate speed.

var snakeBody = [];

var foodX;
var foodY;

var gameOver = false;

window.onload = function () {
    // Set board height and width
    snakeBlock = document.getElementById("snakeBlock");
    snakeBlock.height = total_row * pixelSize;
    snakeBlock.width = total_col * pixelSize;
    canves = snakeBlock.getContext("2d");

    // game score
    score = 0;


    dropFood();
    document.addEventListener("keyup", navigateSnake);  //for movements
    // Set snake speed
    setInterval(update, 1000 / 10);
}

function update() {
    if (gameOver) {
        return;
    }

    // Background of the Game canvas
    canves.fillStyle = "black";
    canves.fillRect(0, 0, snakeBlock.width, snakeBlock.height);

    // food color and position
    canves.fillStyle = "red";
    canves.fillRect(foodX, foodY, pixelSize, pixelSize);

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        dropFood();
    }

    // food will be added to snake body
    for (let i = snakeBody.length - 1; i > 0; i--) {
        // this will add previous body of snake to current one
        snakeBody[i] = snakeBody[i - 1];
        score = snakeBody.length;

    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
        //game score
        document.getElementById('score').innerText = "Current Score: " + (score + 1);
    }



    canves.fillStyle = "#20B2AA";
    snakeX += speedX * pixelSize; //update x.
    snakeY += speedY * pixelSize;  //update y.
    canves.fillRect(snakeX, snakeY, pixelSize, pixelSize);
    for (let i = 0; i < snakeBody.length; i++) {
        canves.fillRect(snakeBody[i][0], snakeBody[i][1], pixelSize, pixelSize);
    }

    if (snakeX < 0
        || snakeX > total_col * pixelSize
        || snakeY < 0
        || snakeY > total_row * pixelSize) {

        // hit the wall
        gameOver = true;
        alert("Game Over! Your score is: " + (score + 1));
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {

            // when you hit your own body
            gameOver = true;
            alert("Game Over");
        }
    }
}

// snake moving
function navigateSnake(e) {
    if (e.code == "ArrowUp" && speedY != 1) {

        speedX = 0;
        speedY = -1;
    }
    else if (e.code == "ArrowDown" && speedY != -1) {

        speedX = 0;
        speedY = 1;
    }
    else if (e.code == "ArrowLeft" && speedX != 1) {

        speedX = -1;
        speedY = 0;
    }
    else if (e.code == "ArrowRight" && speedX != -1) {

        speedX = 1;
        speedY = 0;
    }
}

// put food anywhere
function dropFood() {

    // x.
    foodX = Math.floor(Math.random() * total_col) * pixelSize;

    //y.
    foodY = Math.floor(Math.random() * total_row) * pixelSize;
}