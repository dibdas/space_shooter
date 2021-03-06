import 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';
import Form from '../Objects/PlayerForm';
import '../../assets/css/style.css';

export default class TitleScene extends Phaser.Scene { // eslint-disable-line 
  constructor() {
    super('Title');
  }

  create() {
    Form.showForm();

    // Game
    this.gameButton = new Button(this, config.scale.width / 2, config.scale.height / 2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');

    // Credits
    this.creditsButton = new Button(this, config.scale.width / 2, config.scale.height / 2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');

    this.leaderboardButton = new Button(this, config.scale.width / 2, config.scale.height / 2 + 200, 'blueButton1', 'blueButton2', 'Board', 'Leaderboard');

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center( // eslint-disable-line 
      gameObject, // eslint-disable-line 
      this.add.zone(config.scale.width / 2, config.scale.height / 2 - offset * 100,
        config.scale.width, config.scale.height),
    );
  }

  centerButtonText(gameText, gameButton) { // eslint-disable-line 
    Phaser.Display.Align.In.Center( // eslint-disable-line 
      gameText,
      gameButton,
    );
  }
}
