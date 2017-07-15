//Tetris class

class Tetris {
    constructor(canvas) {

        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.context.scale(20, 20);


        this.arena = new Arena(12, 20);

        this.player = new Player(this);

        this.colors = [
    null,
    '#2B1B4B',
    '#FFEBAA',
    '#7DB364',
    '#BF4638',
    '#73C8FF',
    '#ACFBBF',
    '#173D46',
]


        let lastTime = 0;

        const update = (time = 0) => {
            const deltaTime = time - lastTime;
            lastTime = time;

            this.player.update(deltaTime);

            this.Draw();
            requestAnimationFrame(update);
        }

        update();
    }

    Draw() {

        this.context.fillStyle = '#030A0D';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.DrawMatrix(this.arena.matrix, {
            x: 0,
            y: 0
        });
        this.DrawMatrix(this.player.matrix, this.player.pos);

    }

    DrawMatrix(matrix, offset) {

        matrix.forEach((row, y) => {
            row.forEach((value, x) => {

                if (value !== 0) {

                    this.context.fillStyle = this.colors[value];
                    this.context.fillRect(x + offset.x, y + offset.y, 1, 1);
                }
            });
        });
    }

    updateScore(score) {
        document.getElementById('score').innerText = this.player.score;
    }
}
