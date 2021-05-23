import 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,

  width: 800,
  height: 600
  },
  backgroundColour: "orange",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  }
    
  
};
