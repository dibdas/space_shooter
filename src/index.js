import 'phaser'
import config from './Config/config'
import GameScene from './Scenes/GameScene'
import BootScene from './Scenes/BootScene'
import PreloaderScene from './Scenes/PreloaderScene'
import TitleScene from './Scenes/TitleScene'

import CreditsScene from './Scenes/CreditsScene'
import Model from './Model'
import InputNameScene from './Scenes/InputNameScene'
import GameOver from './Scenes/GameOver'

class Game extends Phaser.Game {
    constructor () {
        super(config)
        const model = new Model()
        this.globals = { model, bgMusic: null }
        this.scene.add('Boot', BootScene)
        this.scene.add('Preloader', PreloaderScene)
        this.scene.add('Title', TitleScene)
  
        this.scene.add('Credits', CreditsScene)
        this.scene.add('InputName',InputNameScene)
        this.scene.add('Game', GameScene)
        this.scene.add('GameOver',GameOver)
        this.scene.start('Boot')
    }
}

window.game = new Game()