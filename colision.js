var obsRadius = 10;
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var playerHeight = 10;
var playerWidth = 75;
var playerX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;

for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}
function drawObstacle() {
  ctx.beginPath();
  ctx.arc(x, y, obstacleRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function drawPlayer() {
  ctx.beginPath();
  ctx.rect(playerX, canvas.height - playerHeight, playerWidth, playerHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawObstacle();
  drawPlayer();
  collisionDetection();

  if (x + dx > canvas.width - obstacleRadius || x + dx < obstacleRadius) {
    dx = -dx;
  }
  if (y + dy < obstacleRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - obstacleRadius) {
    if (x > playerX && x < playerX + playerWidth) {
      if ((y = y - playerHeight)) {
        dy = -dy;
      }
    } else {
      alert("GAME OVER");
      document.location.reload();
      clearInterval(interval); // Needed to end game
    }
  }

  if (rightPressed && playerX < canvas.width - paddleWidth) {
    playerX += 7;
  } else if (leftPressed && playerX > 0) {
    playerX -= 7;
  }

  x += dx;
  y += dy;
}

var interval = setInterval(draw, 10);
 
console.log (collisionDetection)