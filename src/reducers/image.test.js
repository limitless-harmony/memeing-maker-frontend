// Modules
import imageReducer from 'reducers/image';
import { REMOVE_IMAGE, SELECT_IMAGE } from 'constants/actionTypes';

describe('modal reducer', () => {
  const initialState = {
    imageUrl: 'defaultImage',
  };

  it('returns initial state if action not matched', async () => {
    const state = imageReducer(initialState, { type: 'ANOTHER_ACTION' });
    expect(state).toEqual(initialState);
  });

  it('adds a selected image to store', async () => {
    const state = imageReducer(initialState, {
      type: SELECT_IMAGE,
      imageUrl: 'auth.com',
    });
    expect(state).toEqual({ imageUrl: 'auth.com' });
  });

  it('hides a modal', async () => {
    const state = imageReducer(initialState, { type: REMOVE_IMAGE });
    expect(state).toEqual({ imageUrl: '' });
  });
});
