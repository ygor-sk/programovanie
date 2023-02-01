var size = 60;


function stvorec() {
    turtle.penDown(true);
    turtle.forward(size);
    turtle.left(90);
    turtle.penDown(true);
    turtle.forward(size);
    turtle.left(90);
    turtle.penDown(true);
    turtle.forward(size);
    turtle.left(90);
    turtle.penDown(true);
    turtle.forward(size);
    turtle.left(90);
}

for (var i = 0; i < 8; i ++) {
    stvorec();
    turtle.left(45);
    turtle.penDown(false);
    turtle.forward(150);
}
