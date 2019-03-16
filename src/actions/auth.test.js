// Modules
import { login, logout } from 'actions/auth';
import { USER_LOGGED_IN, LOG_OUT } from 'shared/constants/actionTypes';

describe('auth', () => {
  it('returns login action', async () => {
    const user = {
      name: 'Me',
      id: 3,
    };
    const result = login(user);
    expect(result).toEqual({ type: USER_LOGGED_IN, user });
  });

  it('returns logout action', async () => {
    const result = logout();
    expect(result).toEqual({ type: LOG_OUT });
  });
});
