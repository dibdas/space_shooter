import Phaser from 'phaser';
import config from './Config/config';
import GameScene from './Scenes/GameScene';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import LeaderboardScene from './Scenes/LeaboardScene';

import CreditsScene from './Scenes/CreditsScene';
import Model from './Model';

import GameOver from './Scenes/GameOver';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    const playerName = 'User';
    this.globals = { model, playerName, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('LeaderBoard', LeaderboardScene);

    this.scene.add('Credits', CreditsScene);

    this.scene.add('Game', GameScene);
    this.scene.add('GameOver', GameOver);
    this.scene.start('Boot');
  }
}

window.game = new Game();