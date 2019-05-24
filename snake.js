window.onload = function () {
    const cvs = document.getElementById("snake");
    const ctx = cvs.getContext("2d");

    const snakeW = 20;
    const snakeH = 20;

    function Snake(x, y) {
        ctx.fillStyle = "#FFDEAD";
        ctx.fillRect(x * snakeW, y * snakeH, snakeW, snakeH);
    }

    function Draw() {
        var length = 2;
        var snake = [];

        for (var i=length-1; i>=0; i--){
            snake.push(
                {
                    x : i,
                    y : 0
                }
            );
        }
        for (var j = 0; j < snake.length; j++) {
            var x = snake[j].x;
            var y = snake[j].y;
            Snake(x, y);
        }
    }
    Draw();

}