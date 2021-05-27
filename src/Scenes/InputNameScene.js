import 'phaser'
import config from '../Config/config'
import Button from '../Objects/Button'

export default class InputNameScene extends Phaser.Scene {
    constructor(){
        super('InputName')
    }
    
    create(){
        this.gameButton = new Button(this, config.scale.width/2, config.scale.height/2 - 100, 'blueButton1', 'blueButton2', 'Start', 'Game')

    this.userName = '';

    const div = document.createElement('div');
    div.innerHTML = `
    <div class='input-box'>
    <input type='text' id='name' placeholder='Enter your name'/'</br>
    <input type='button' name='submitBtn' value='Submit Score' />
    </div>
    `;

    // const element = this.add.dom(
    //   this.game.config.width * 0.5,
    //   this.game.config.height * 0.5,
    //   div,
    // );
    // element.addListener('click');

    // element.on('click', (event) => {
    //     if (event.target.name === 'submitBtn') {
    //       const inputText = document.getElementById('name');
    //       if (inputText.value !== '') {
    //         element.removeListener('click');
    //         element.setVisible(false);
    //         this.userName = inputText.value;
    //         this.submit = setData(this.userName, this.scores[0]);
    //         this.submit.then(() => {
    //           this.scene.start('Game');
    //         });
    //       }
    //     }
    //   });

    
    }

    centerButton (gameObject, offset = 0) {
        Phaser.Display.Align.In.Center(
            gameObject,
            this.add.zone(config.scale.width/2, config.scale.height/2 - offset * 100, config.scale.width, config.scale.height)
        )
    }

    centerButtonText (gameText, gameButton) {
        Phaser.Display.Align.In.Center(
            gameText,
            gameButton
        )
    }

}