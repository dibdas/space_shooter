import Phaser from 'phaser';
import Form from '../Objects/PlayerForm';
import Leaderboard from '../Objects/LeaderBoard';
import Button from '../Objects/Button';

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
  }

  create() {
    Form.removeForm(this);
    Leaderboard.displayScore(this);
    this.add.text(540, 25, 'Leaderboard', {
      fontSize: 35,
      color: '#000',
      fontStyle: 'bold',
      padding: 5,
      
    }).setOrigin(0.5);

    this.backButton = new Button(this, 540, 300, 'blueButton1', 'blueButton2', 'Back', 'Title');
  }
}
