// Modules
import authReducer from 'reducers/auth';
import { USER_LOGGED_IN, LOG_OUT } from 'shared/constants/actionTypes';

describe('auth reducer', () => {
  const initialState = {
    isLoggedIn: false,
    user: null,
  };

  it('returns initial state if action not matched', async () => {
    const state = authReducer(initialState, { type: 'ANOTHER_ACTION' });
    expect(state).toEqual(initialState);
  });

  it('logs in user', async () => {
    const user = {
      id: 1,
      name: 'A user',
    };
    const state = authReducer(initialState, {
      type: USER_LOGGED_IN,
      user,
    });
    expect(state).toEqual({ isLoggedIn: true, user });
  });

  it('logs out a user', async () => {
    const state = authReducer(initialState, { type: LOG_OUT });
    expect(state).toEqual(initialState);
  });
});
