class BilGame {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.bil = new Bil(this);
        this.track = new Track(this);

        new BilInputHandler(this.bil, this);
    }

    draw(ctx) {
        this.bil.draw(ctx);
        this.track.draw(ctx);
    }

    update(deltaTime) {
        this.bil.update(deltaTime)
    }
}