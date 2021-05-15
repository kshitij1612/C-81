canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

colour = "red";
ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    colour = document.getElementById("color").value;
    console.log(colour);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("X=" + mouse_x);
    console.log("Y=" + mouse_y);
    circle(mouse_x, mouse_y);
}

function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = 2;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

