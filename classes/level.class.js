class Level {
    enemies;
    clouds;
    backgroundObjects;
    statusbars;
    level_end_x = 719 * 3;

    constructor(enemies, clouds, backgroundObjects, statusbars) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.statusbars = statusbars;
    }
}