class Chicken extends MovableObject {
    height = 60;
    width = 50;
    y = 360;
    IMAGES_WALK = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
  /*   clucking_sound = new Audio('audio/chicken_clucking.mp3'); */

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALK);
        this.x = 175 + Math.floor(Math.random() * 525); // random start position of an enemy on the x-acis
        this.speed = 0.15 + Math.random();
        this.animate();
    }

    animate() {
        setInterval( () => {
            this.playAnimations(this.IMAGES_WALK);
        }, 100);
/*         this.clucking_sound.play(); */
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60) // 60fps
    }
    }
