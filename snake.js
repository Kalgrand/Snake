window.onload = function () {
    const cvs = document.getElementById("snake");
    const ctx = cvs.getContext("2d");

    const snakeW = 20;
    const snakeH = 20;

    function drawSnake(x, y) {
        ctx.fillStyle = "#FFDEAD";
        ctx.fillRect(x * snakeW, y * snakeH, snakeW, snakeH);
    }

    var len = 2;
    var snake = [];

    for (var i=len-1; i>=0; i--){
        snake.push(
            {
                x : i,
                y : 0
            }
        );
    }

    function draw() {
        for (var i = 0; i < snake.length; i++) {
            var x = snake[i].x;
            var y = snake[i].y;
            drawSnake(x, y);
        }
    }
    draw();

}