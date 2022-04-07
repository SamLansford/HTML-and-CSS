class Snake {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.tail = [{x:this.x, y:this.y, size:this.size}];
        this.rotateX = 0;
        this.rotateY = 1;
    }

    move() {
        let newRect;
        if (this.rotateX === 1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x + this.size,
                Y: this.tail[this.tail.length - 1].y
            }
        } else if (this.rotateX === -1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x - this.size,
                Y: this.tail[this.tail.length - 1].y
            }
        } else if (this.rotateY === 1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x,
                Y: this.tail[this.tail.length - 1].y + this.size
            }
        } else if (this.rotateY === -1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x,
                Y: this.tail[this.tail.length - 1].y - this.size
            }
        }

        this.tail.shift()
        this.tail.push(newRect)
    }
}

class Apple {
    constructor() {
        let isTouching;
        while (true) {
            isTouching = false;
            this.x = Math.floor(Math.random() * canvas.width / snake.size) * snake.size
            this.y = Math.floor(Math.random() * canvas.height / snake.size) * snake.size
            for (let i = 0; i < snake.tail.length; i++) {
                if (this.x === snake.tail[i].x && this.y === snake.tail[i].y) {
                    isTouching = true
                }
            }
            if (!isTouching) {
                break;
            }
            this.color = "red"
            this.size = snake.size;
        }
    }
}

let canvas = document.getElementById("canvas");

let snake = new Snake();

let apple = new Apple();

let canvasContext = canvas.getContext('2d');

window.onload = ()=> {
    gameLoop();
}

function gameLoop() {
    setInterval(show, 1000/15);
}

function show() {
    update();
    draw();
}