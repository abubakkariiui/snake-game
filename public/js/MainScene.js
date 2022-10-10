import Snake from './Snake.js';


// main scene
export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  create() {
    this.snake = new Snake(this);
  }

  update(time, delta) {
    this.snake.update(time);
  }
}
