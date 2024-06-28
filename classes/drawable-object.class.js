class DrawableObject {
    x = 120; // Standardwert
    y = 280; // Standardwert
    img;
    imageCache = {};
    currentImage = 0;

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
}