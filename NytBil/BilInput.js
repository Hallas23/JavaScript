class BilInputHandler {
    constructor(bil, game) {
        document.addEventListener("keydown", event => {
            switch (event.keyCode) {
                case 37:
                    if (game.bil.moveAngle > -4)
                    game.bil.moveAngle -= 2;
                    break;

                case 38:
                    game.bil.bilboolean = true;
                    break;

                case 39:
                    if (game.bil.moveAngle < 4)
                    game.bil.moveAngle += 2;
                    break;

                case 40:
                        game.bil.bakboolean = true;

                    break;
            }
        });

        document.addEventListener("keyup", event => {
            switch (event.keyCode) {
                case 40:
                        game.bil.bakboolean = false;
                    if (game.bil.speed < 0) {
                        game.bil.speed = 0;
                    }
                    break;
                case 38:
                        bil.bilboolean = false;
                    break;
                case 39:
                    game.bil.moveAngle = 0;
                    break;
                case 37:
                    game.bil.moveAngle = 0;
                    break;
            }
        });
    }
}
