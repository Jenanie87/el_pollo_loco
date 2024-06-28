class Cloud extends MovableObject {
    y = 10;
    height = 250;
    width = 500;
    x = 500;

    constructor(imagePath) {
        super().loadImage(imagePath);
        this.x = 125 + Math.floor(Math.random() * 719*3); 
        this.animateClouds(); 
    }

    animateClouds() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60) // 60fps
    }
}

