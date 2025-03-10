const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let snake = [{x: 150, y: 150}];
let food = {x: 200, y: 200};
let dx = 10;
let dy = 0;
let score = 0;

// Draw a part of the snake
function drawSnakePart(part) {
    ctx.fillStyle = "green";
    ctx.fillRect(part.x, part.y, 10, 10);
}

// Draw the entire snake
function drawSnake() {
    snake.forEach(drawSnakePart);
}

// Draw the food on the canvas
function drawFood() {
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, 10, 10);
}

// Move the snake by adding a new head based on the direction
function moveSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    // If snake eats food, increase score and generate new food; otherwise, remove tail
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        generateFood();
    } else {
        snake.pop();
    }
}

// Generate new food at a random location on the canvas
function generateFood() {
    food = {
        x: Math.floor(Math.random() * canvas.width / 10) * 10,
        y: Math.floor(Math.random() * canvas.height / 10) * 10
    };
}

// Clear the canvas for the next frame
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Update the game state
function updateGame() {
    clearCanvas();
    moveSnake();
    drawSnake();
    drawFood();
}

// Handle arrow key presses for controlling the snake
document.addEventListener("keydown", event => {
    const key = event.key;
    if (key === "ArrowRight" && dx === 0) {
        dx = 10;
        dy = 0;
    } else if (key === "ArrowLeft" && dx === 0) {
        dx = -10;
        dy = 0;
    } else if (key === "ArrowUp" && dy === 0) {
        dx = 0;
        dy = -10;
    } else if (key === "ArrowDown" && dy === 0) {
        dx = 0;
        dy = 10;
    }
});

// Start the game loop
setInterval(updateGame, 100);
