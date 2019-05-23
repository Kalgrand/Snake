window.onload = function () {
    const cvs = document.getElementById("snake");
    const ctx = cvs.getContext("2d");

    const snakeW = 20;
    const snakeH = 20;

    function draw(x,y) {
        ctx.fillStyle = "#FFDEAD";
        ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
    }

    draw(10,10);
}