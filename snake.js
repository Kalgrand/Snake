window.onload = function () {
    var gameStarted = false;
    const cvs = document.getElementById("snake");
    const ctx = cvs.getContext("2d");

    const snakeW = 20;
    const snakeH = 20;

    //var score = 0;
    var control = "RIGHT";

    document.addEventListener("keydown",direction);

    function direction(event){
        if((event.keyCode == 37 || event.keyCode == 65) && control != "RIGHT"){
            control = "LEFT";
        }else if((event.keyCode == 38 || event.keyCode == 87) && control != "DOWN"){
            control = "UP";
        }else if((event.keyCode == 39 || event.keyCode == 68) && control != "LEFT"){
            control = "RIGHT";
        }else if((event.keyCode == 40 || event.keyCode == 83) && control != "UP"){
            control = "DOWN";
        }
    }

    function gamerun() {
        init();
    }

    this.onkeypress = function(e) {
        if (gameStarted == false && e.keyCode == 32) {
            gameStarted = true;
            gamerun();
        }
    }

   // function Score(x) {
   //     ctx.fillStyle = "black";
   //     ctx.font = '15px serif';
   //     ctx.fillText("SCORE : " + x, 5 , cvs.height - 10 );
   // }

    function Start(x) {
             ctx.fillStyle = "black";
             ctx.font = '45px serif';
             ctx.fillText("Press Spacebar ", 180 , 310 );
         }

    function Snake(x, y) {
        //ctx.fillStyle = "#FFDEAD";
        var my_gradient = ctx.createLinearGradient(0,0, 310,310);
        my_gradient.addColorStop(1, "Khaki");
        my_gradient.addColorStop(0.5, "DarkOrange");
        my_gradient.addColorStop(1, "SandyBrown");
        ctx.fillStyle = my_gradient;
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

    var food = {
        x : Math.round(Math.random()*(1+6+5)),
        y : Math.round(Math.random()*(5+8+4))
    }

    var stone = {
        x : Math.round(Math.random()*(Math.PI * 8)),
        y : Math.round(Math.random()*(Math.PI * 8))
    }

    var stone2 = {
        x : Math.round(Math.random()*(Math.PI * 8)),
        y : Math.round(Math.random()*(Math.PI * 8))
    }

    var stone3 = {
        x : Math.round(Math.random()*(Math.PI * 8)),
        y : Math.round(Math.random()*(Math.PI * 8))
    }

    var stone4 = {
        x : Math.round(Math.random()*(Math.PI * 8)),
        y : Math.round(Math.random()*(Math.PI * 8))
    }

    var stone5 = {
        x : Math.round(Math.random()*(Math.PI * 8)),
        y : Math.round(Math.random()*(Math.PI * 8))
    }

    var stone6 = {
        x : Math.round(Math.random()*(Math.PI * 8)),
        y : Math.round(Math.random()*(Math.PI * 8))
    }

    var stone7 = {
        x : Math.round(Math.random()*(Math.PI * 8)),
        y : Math.round(Math.random()*(Math.PI * 8))
    }

    var stone8 = {
        x : Math.round(Math.random()*(Math.PI * 8)),
        y : Math.round(Math.random()*(Math.PI * 8))
    }

    var stone9 = {
        x : Math.round(Math.random()*(Math.PI * 8)),
        y : Math.round(Math.random()*(Math.PI * 8))
    }

    var stone10 = {
        x : Math.round(Math.random()*(Math.PI * 8)),
        y : Math.round(Math.random()*(Math.PI * 8))
    }

    function Food(x,y) {
        ctx.fillStyle = "red";
        ctx.fillRect(x * snakeW, y * snakeH, snakeW, snakeH);
    }

    function Stone(x,y) {
        ctx.fillStyle = "silver";
        ctx.fillRect(x * snakeW, y * snakeH, snakeW, snakeH);
    }

    Start();

    function Draw() {
        if (gameStarted) {
            ctx.clearRect(0, 0, cvs.width, cvs.height);

            for (var j = 0; j < snake.length; j++) {
                var x = snake[j].x;
                var y = snake[j].y;
                Snake(x, y);
            }

            Food(food.x, food.y);
            Stone(stone.x, stone.y);
            Stone(stone2.x, stone2.y);
            Stone(stone3.x, stone3.y);
            Stone(stone4.x, stone4.y);
            Stone(stone5.x, stone5.y);
            Stone(stone6.x, stone6.y);
            Stone(stone7.x, stone7.y);
            Stone(stone8.x, stone8.y);
            Stone(stone9.x, stone9.y);
            Stone(stone10.x, stone10.y);

            var snakeX = snake[0].x;
            var snakeY = snake[0].y;

            if (snakeX < 0 || snakeY < 0 || snakeX >= cvs.width / snakeW || snakeY >= cvs.height / snakeH) {
                location.reload();
            }

            if (control == "LEFT") snakeX--;
            if (control == "UP") snakeY--;
            if (control == "RIGHT") snakeX++;
            if (control == "DOWN") snakeY++;

            if (snakeX == food.x && snakeY == food.y) {
                //score++;
                food = {
                    x: Math.round(Math.random() * (1 + 6 + 5)),
                    y: Math.round(Math.random() * (5 + 8 + 4))
                }
            } else {
                snake.pop();
            }

            if (snakeX == stone.x && snakeY == stone.y || snakeX == stone2.x && snakeY == stone2.y || snakeX == stone3.x && snakeY == stone3.y
                || snakeX == stone4.x && snakeY == stone4.y || snakeX == stone5.x && snakeY == stone5.y || snakeX == stone6.x && snakeY == stone6.y
                || snakeX == stone7.x && snakeY == stone7.y || snakeX == stone8.x && snakeY == stone8.y || snakeX == stone9.x && snakeY == stone9.y
                || snakeX == stone10.x && snakeY == stone10.y) {
                //score++;
                stone = {
                    x: Math.round(Math.random() * (Math.PI * 8)),
                    y: Math.round(Math.random() * (Math.PI * 8))
                }
                location.reload();
            }

            var newHead = {
                x: snakeX,
                y: snakeY
            }

            snake.unshift(newHead);
            //Score(score);
        }
    }
    setInterval(Draw,60);
}