import Phaser from 'phaser';
import config from '../Config/config';

class Entity extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key, type) {

this.scene = scene;
this.scene.add.existing(this);
this.scene.physics.world.enableBody(this, 0);
this.setData("type", type);
this.setData("isDead", false);

    }

  class PlayerLaser extends Entity {
    constructor(scene, x, y) {
      super(scene, x, y, 'sprLaserPlayer');
      this.body.velocity.y = -200;
    }
  }
class EnemyLaser extends Entity {
    constructor(scene, x, y) {
      super(scene, x, y, "sprLaserEnemy0");
      this.body.velocity.y = 200;
    }
  }
  

  
}