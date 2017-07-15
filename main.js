const canvas = document.getElementById('tetris');

const tetris = new Tetris(canvas);

tetris.Draw();


function createPiece(type) {
    if (type === 'T') {
        return [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0],
        ];
    } else if (type === 'S') {
        return [
            [0, 2, 2],
            [2, 2, 0],
            [0, 0, 0]
        ];
    } else if (type === 'I') {
        return [
            [0, 3, 0, 0],
            [0, 3, 0, 0],
            [0, 3, 0, 0],
            [0, 3, 0, 0],
        ];
    } else if (type === 'Z') {
        return [
            [4, 4, 0],
            [0, 4, 4],
            [0, 0, 0],
        ];
    } else if (type === 'L') {
        return [
            [0, 5, 0],
            [0, 5, 0],
            [0, 5, 5],
        ];
    } else if (type === 'J') {
        return [
            [0, 6, 0],
            [0, 6, 0],
            [6, 6, 0],
        ];
    } else if (type === 'O') {
        return [
            [7, 7],
            [7, 7],
        ];
    }
}



document.addEventListener('keydown', event => {
    const player = tetris.player;
    if (event.keyCode === 37) {
        player.Move(-1);
        //left key = move left
    } else if (event.keyCode === 39) {
        player.Move(+1);
        //right key = move right
    } else if (event.keyCode === 40) {
        player.Drop()
        //down key = drop
    } else if (event.keyCode === 32) {
        player.Rotate(-1);
        //space key = rotate left
    } else if (event.keyCode === 38) {
        player.Rotate(+1);
        //up arrow = rotate right
    }
});
