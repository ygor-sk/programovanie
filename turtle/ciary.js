/**
 * @type {HTMLCanvasElement}
 */
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "red";
for (var i = 0; i < 1024; i = i + 10) {
    ctx.moveTo(0, 0);
    ctx.lineTo(i, 768);
    ctx.stroke();
}
ctx.beginPath();
ctx.strokeStyle = "blue";
for (var i = 0; i < 1024; i = i + 10) {
    ctx.moveTo(1024, 0);
    ctx.lineTo(i, 768);
    ctx.stroke();
}


