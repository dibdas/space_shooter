import 'phaser';
import ScrollingBackground from '../Objects/ScrollBackground';

class GameOver extends Phaser.Scene {
    constructor() {
      super({ key: "SceneGameOver" });
    }
    create() {
  
      this.title = this.add.text(this.game.config.width * 0.5, 128, "GAME OVER", {
        fontFamily: 'monospace',
        fontSize: 48,
        fontStyle: 'bold',
        color: 'black',
        align: 'center'
      });
      this.title.setOrigin(0.5);
  
      this.sfx = {
        btnOver: this.sound.add("sndBtnOver"),
        btnDown: this.sound.add("sndBtnDown")
      };
  
      this.btnRestart = this.add.sprite(
        this.game.config.width * 0.5,
        this.game.config.height * 0.5,
        "sprBtnRestart"
      );
  
      this.btnRestart.setInteractive();
  
      this.btnRestart.on("pointerover", function() {
        this.btnRestart.setTexture("sprBtnRestartHover"); // set the button texture to sprBtnPlayHover
        this.sfx.btnOver.play(); // play the button over sound
      }, this);
  
      this.btnRestart.on("pointerout", function() {
        this.setTexture("sprBtnRestart");
      });
  
      this.btnRestart.on("pointerdown", function() {
        this.btnRestart.setTexture("sprBtnRestartDown");
        this.sfx.btnDown.play();
      }, this);
  
      this.btnRestart.on("pointerup", function() {
        this.btnRestart.setTexture("sprBtnRestart");
        this.scene.start("Game");
      }, this);
  
      this.backgrounds = [];
      for (var i = 0; i < 5; i++) {
        var keys = ["sunny", "sun"];
        var key = keys[Phaser.Math.Between(0, keys.length - 1)];
        var bg = new ScrollingBackground(this, key, i * 10);
        this.backgrounds.push(bg);
      }
    
    
    this.userName = '';

    const div = document.createElement('div');
    div.innerHTML = `
    <div class='input-box'>
    <input type='text' id='name' placeholder='Enter your name'/'</br>
    <input type='button' name='submitBtn' value='Submit Score' />
    </div>
    `;

    const element = this.add.dom(
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      div,
    );
    element.addListener('click');

    element.on('click', (event) => {
      if (event.target.name === 'submitBtn') {
        const inputText = document.getElementById('name');
        if (inputText.value !== '') {
          element.removeListener('click');
          element.setVisible(false);
          this.userName = inputText.value;
          this.submit = setData(this.userName, this.scores[0]);
          this.submit.then(() => {
            this.scene.start('Game');
          });
        }
      }
    });
  }
  
    update() {
      for (var i = 0; i < this.backgrounds.length; i++) {
        this.backgrounds[i].update();
      }
    }
  }

  export default GameOver;