import 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';

export default class InputNameScene extends Phaser.Scene {
    constructor(){
    super('InputName');
    }
    
    create(){
        this.gameButton = new Button(this, config.scale.width/2, config.scale.height/2 - 100, 'blueButton1', 'blueButton2', 'Start', 'Game');
    }

  centerButton (gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(config.scale.width/2, config.scale.height/2 - offset * 100, config.scale.width, config.scale.height)
    );
  }

  centerButtonText (gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton
    );
  }

}