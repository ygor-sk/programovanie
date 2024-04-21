/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const ratio = (Math.PI * 2) / 360;
const speed = 10;

class Turtle {
    commands = [];
    commandIndex = 0;

    constructor() {
        this._reset();
    }

    _reset() {
        this.x = 500.0;
        this.y = 400.0;
        this.angle = 0.0;
        this.drawing = true;
        ctx.moveTo(this.x, this.y);
    }

    _drawNext() {
        console.log("drawNext", this.commandIndex);
        this._reset();
        ctx.clearRect(0, 0, canvas.width, canvas.height);


        console.log("running commands");
        for (let i = 0; i <= this.commandIndex; i++) {
            this._runCommand(this.commands[i]);
        }

        let time = no
        console.log("done running commands");
        // draw turtle
        ctx.fillStyle = "green";
        ctx.fillRect(this.x - 10, this.y - 10, 20, 20);

        if (this.commandIndex < this.commands.length - 1) {
            this.commandIndex++;
            setTimeout(() => this._drawNext(), speed);
        }
    }

    _runCommands() {
        console.log("running commands", this.commands.length);
        this._reset();
        for (let command of this.commands) {
            this._runCommand(command);
        }
    }

    _addCommand(command) {
        this.commands.push(command);
        // this._runCommand(command);
    }

    _runCommand(command) {
        switch (command.type) {
            case "left":
                this.angle = this.angle - command.degrees;
                break;
            case "right":
                this.angle = this.angle + command.degrees;
                break;
            case "forward":
                this.x = this.x + command.length * Math.sin(this.angle * ratio);
                this.y = this.y + command.length * Math.cos(this.angle * ratio);
                if (this.drawing) {
                    ctx.lineTo(this.x, this.y);
                    ctx.stroke();
                } else {
                    ctx.moveTo(this.x, this.y);
                }
                break;
            case "penDown":
                this.drawing = command.value;
                break;
        }
    }

    left(degrees) {
        this._addCommand({ type: "left", degrees: degrees });
    }

    right(degrees) {
        this._addCommand({ type: "right", degrees: degrees });
    }

    forward(length) {
        this._addCommand({ type: "forward", length: length });
    }

    penDown(value) {
        this._addCommand({ type: "penDown", value: value });
    }
}

const turtle = new Turtle();

setTimeout(() => turtle._drawNext(), speed);

(function () {
    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        /**
         * Your drawings need to be inside this function otherwise they will be reset when 
         * you resize the browser window and the canvas goes will be cleared.
         */
         // turtle._drawNext();
    }
    resizeCanvas();
})();
