import 'phaser';

export default {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,

  width: 700,
  height: 600
  },
    physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  },
  pixelArt: true,
  roundPixels: true
  
};
