class Bil {
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeigt = game.gameHeight;
        this.width = 20;
        this.height = 40;
        this.speed = 0;
        this.angle = 0;
        this.moveAngle = 0;
        this.x = 300;
        this.y = 300;
        this.bilboolean = false;
        this.bakboolean = false;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillStyle = "red";
        ctx.fillRect(this.width / -2, this.height / -2, this.width, this.height);
        ctx.restore();
    }

    update(deltaTime) {
        if (this.bilboolean === false && this.bakboolean !== true && this.speed > 0)
            this.speed -= 0.3;
        if (this.bilboolean === false && this.bakboolean === true && this.speed > -3)
            this.speed -= 0.1;
        if (this.bilboolean)
            if (this.speed < 8)
                this.speed += 0.1;
        this.angle += this.moveAngle * Math.PI / 180;
        this.x += this.speed * Math.sin(this.angle)
        this.y -=  this.speed * Math.cos(this.angle);
    }
}