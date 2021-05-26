import 'phaser';
import Entity from './Entities';
import PlayerLaser from './PlayerLaser';
class Player extends Entity{
    constructor(scene,x,y,key){
        super(scene,x,y,key,'player');
        this.setData("speed",200);
        this.play("sprPlayer.png");
        this.setData("isShooting", false);
        this.setData("timerShootDelay", 10);
        this.setData("timerShootTick", this.getData("timerShootDelay") - 1);
      }
    
    
moveUp() {
    this.body.velocity.y = -this.getData("speed");

}

moveDown() {
    this.body.velocity.y = this.getData("speed");

}

moveLeft() {
    this.body.velocity.x = -this.getData("speed");

}

moveRight() {
    this.body.velocity.x = this.getData("speed");

}
update(){
    this.body.setVelocity(0, 0);

this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);

}

onDestroy() {
    this.scene.time.addEvent({ // go to game over scene
      delay: 1000,
      callback: function() {
        this.scene.scene.start("SceneGameOver");
      },
      callbackScope: this,
      loop: false
    });
  }
    
}
export default Player


