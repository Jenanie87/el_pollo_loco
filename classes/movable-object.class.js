class MovableObject {
    x = 120; // Standardwert
    y = 280; // Standardwert
    img;
    height = 150; // Standardwert
    width = 100; // Standardwert
    speed = 0.15;
    otherDirection = false;
    imageCache = {};
    currentImage = 0;
    offsetY = 0;
    speedY = 0;
    acceleration = 2.5;
    onCollisionCourse = true;
    healthPoints = 100;
    lastHit = 0;

    applyGravity() {
        setInterval(() => {
            if(this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 165;
    }

    isDead() {
        return this.healthPoints == 0;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawRectangle(ctx) {

        if(this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '1';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('img')<img id="img">
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 25;
    }

    playAnimations(array) {
        let i = this.currentImage % array.length;
        let path = array[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    isColliding (mo) {
        return  (this.x + this.width) >= mo.x && this.x <= (mo.x + mo.width) && 
                (this.y + this.offsetY + this.height) >= mo.y &&
                (this.y + this.offsetY) <= (mo.y + mo.height) && 
                mo.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
    }

    hit() {
        this.healthPoints -=2;
        if(this.healthPoints < 0) {
            this.healthPoints = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    checkIfHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // Differenz in Millisekunden
        timePassed = timePassed / 1000; // Differenz in sekunden
        return timePassed < 0.75;
    }
}