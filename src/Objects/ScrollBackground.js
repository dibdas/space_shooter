import 'phaser';

class ScrollingBackground {
    constructor(scene, key, velocityY) {
//         this.scene = scene;
// this.key = key;
// this.velocityY = velocityY;
// this.layers = this.scene.add.group();
// this.createLayers();

      
    }
   createLayers(){
    for (var i = 0; i < 2; i++) {
        // creating two backgrounds will allow a continuous scroll
        var layer = this.scene.add.sprite(0, 0, this.key);
        layer.y = (layer.displayHeight * i);
        var flipX = Phaser.Math.Between(0, 10) >= 5 ? -1 : 1;
        var flipY = Phaser.Math.Between(0, 10) >= 5 ? -1 : 1;
        layer.setScale(flipX * 2, flipY * 2);
        layer.setDepth(-5 - (i - 1));
        this.scene.physics.world.enableBody(layer, 0);
        layer.body.velocity.y = this.velocityY;
  
        this.layers.add(layer);
      }

   }
}
export default ScrollingBackground
  