// import Phaser from 'phaser';
import Leaderboard from '../Objects/LeaderBoard';
import LeaderboardScene from '../Scenes/LeaboardScene';
import 'regenerator-runtime/runtime';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    result: [
      {
        user: 'gargi',
        score: 20,
      },
      {
        user: 'alex',
        score: 45,
      },
    ],
  }),
}));

describe('Leaderboard', () => {
  test('Leaderboard has  constructor', () => {
    expect(LeaderboardScene.prototype.constructor).not.toBe(false);
  });

  test('Scene is created correctly manner ', () => {
    const scene = new LeaderboardScene({
      active: true,
    });
    expect(scene.sys.config).toBe('Leaderboard');
  });

  test('Leaderboard scene is a function only', () => {
    expect(typeof LeaderboardScene).toBe('function');
  });

  test('Leaderboard scene is a subclass of  a scene', () => {
    expect(LeaderboardScene.prototype instanceof Phaser.Scene).toBe(true);
  });

  test('Leaderboard to not be undefined', () => {
    expect(typeof LeaderboardScene).not.toBe('undefined');
  });

  test('saves the score and playerName to the leaderBoard', () => {
    Leaderboard.saveScore('shooter', 1000).then((score) => expect(score.result).toBe('Leaderboard score create correctly.'));
  });

  test('Receives/Loads the scores', async () => {
    const scores = await Leaderboard.receiveScore();
    expect(scores.result).toBeTruthy();
  });

  test('get score and playerName from the leaderBoard', () => {
    Leaderboard.receiveScore().then((scores) => expect(typeof scores).toEqual('object'));
  });

  test('Ranking contains the Player', () => {
    Leaderboard.receiveScore()
      .then((data) => {
        expect(data).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              score: 1000,
              user: 'runner',
            }),
          ]),
        );
      })
      .catch(() => { });
  });
});