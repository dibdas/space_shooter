

import Phaser from 'phaser'; // eslint-disable-line 

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', 'dist/assets/logo.png');
  }

  create() {
    this.scene.start('Preloader');
  }
}
