import 'phaser';
import config from '../Config/config';

export default class InputNameScene extends Phaser.Scene {
    constructor(){
    super('InputName');
    }
    preload(){

    }
    create(){

    this.message = this.add.text(640, 250, "Hello, --", {
        color: "#FFFFFF",
        fontSize: 60,
        fontStyle: "bold"
    }).setOrigin(0.5);
    this.input = this.add.dom(200, 235, 'input', {
        type: 'text',
        name: 'name',
        fontSize: '30px',
        backgroundColor: '#fff',
      });

    }

}