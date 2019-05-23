window.onload = function () {
    const cvs = document.getElementById("snake");
    const ctx = cvs.getContext("2d");

    const snakeW = 20;
    const snakeH = 20;

    ctx.fillStyle = "#FFDEAD";
    ctx.fillRect(20,20,snakeW,snakeH);
};