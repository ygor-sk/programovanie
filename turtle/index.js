const size = 60;

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

for (let i = 0; i < 80; i ++) {
    stvorec();
    turtle.left(46);
    turtle.penDown(false);
    turtle.forward(150);
}
