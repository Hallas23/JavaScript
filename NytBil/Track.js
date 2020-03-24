class Track {
    constructor(game) {
        this.track = [{X: 50, Y: 50, WIDTH: 5, HEIGHT: 200},
                    {X: 50, Y: 50, WIDTH: 200, HEIGHT: 5}];
    }

    track() {
    }

    draw(ctx) {
        this.track.forEach(t => ctx.fillRect(t.X, t.Y, t.WIDTH, t.HEIGHT));
    }
}