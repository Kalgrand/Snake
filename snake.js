window.onload = function () {
    const cvs = document.getElementById("snake");
    const ctx = cvs.getContext("2d");

    const snakeW = 20;
    const snakeH = 20;

   // var score = 0;
    var control = "RIGHT";

    document.addEventListener("keydown",direction);

    function direction(event){
        if(event.keyCode == 37 && control != "RIGHT"){
            control = "LEFT";
        }else if(event.keyCode == 38 && control != "DOWN"){
            control = "UP";
        }else if(event.keyCode == 39 && control != "LEFT"){
            control = "RIGHT";
        }else if(event.keyCode == 40 && control != "UP"){
            control = "DOWN";
        }
    }


    function Snake(x, y) {
        ctx.fillStyle = "#FFDEAD";
        ctx.fillRect(x * snakeW, y * snakeH, snakeW, snakeH);
    }

    var length = 2;
    var snake = [];

    for (var i = length - 1; i >= 0; i--) {
        snake.push(
            {
                x: i,
                y: 0
            }
        );
    }
    function Draw() {

        ctx.clearRect(0,0, cvs.width, cvs.height);

        for (var j = 0; j < snake.length; j++) {
            var x = snake[j].x;
            var y = snake[j].y;
            Snake(x, y);
        }

        var snakeX = snake[0].x;
        var snakeY = snake[0].y;

        snake.pop();

        if (control == "LEFT") snakeX--;
        if (control == "UP") snakeY--;
        if (control == "RIGHT") snakeX++;
        if (control == "DOWN") snakeY++;

        var newHead = {
            x: snakeX,
            y: snakeY
        }

        snake.unshift(newHead);

    }
    setInterval(Draw,60);
}