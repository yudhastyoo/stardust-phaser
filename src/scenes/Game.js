import { Player } from "../gameObjects/Player.js";
export class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.add.image(400, 300, "sky");
    // this.add.image(400, 300, 'star');

    this.platforms = this.physics.add.staticGroup();

    this.platforms.create(400, 568, "ground").setScale(2).refreshBody();

    this.platforms.create(600, 400, "ground");
    this.platforms.create(50, 250, "ground");
    this.platforms.create(750, 220, "ground");

    this.player = new Player(this, 100, 450);

    this.physics.add.collider(this.player, this.platforms);
  }

  update() {}
}
