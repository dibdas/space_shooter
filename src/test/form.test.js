import Form from '../Objects/PlayerForm';

const scene = {
  sys: {
    game: {
      globals: {
        playerName: 'Dip',
      },
    },
  },
};

describe('Help for scenes', () => {
  test('form is built correctly', () => {
    Form.createForm(scene);
    const Forms = document.querySelector('form');
    expect(Forms.children.length).toBe(2);
    expect(Forms.children[0].placeholder).toBe('Please Enter Name');
    expect(Forms.children[0].getAttribute('type')).toBe('text');
    expect(Forms.children[1].getAttribute('type')).toBe('submit');
  });
});