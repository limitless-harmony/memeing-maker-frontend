// Modules
import modalReducer from 'reducers/modal';
import { SHOW_MODAL, HIDE_MODAL } from 'shared/constants/actionTypes';

describe('modal reducer', () => {
  const initialState = {
    id: '',
    show: false,
  };

  it('returns initial state if action not matched', async () => {
    const state = modalReducer(initialState, { type: 'ANOTHER_ACTION' });
    expect(state).toEqual(initialState);
  });

  it('shows a modal', async () => {
    const state = modalReducer(initialState, { type: SHOW_MODAL, id: 'auth' });
    expect(state).toEqual({ id: 'auth', show: true });
  });

  it('hides a modal', async () => {
    const state = modalReducer(initialState, { type: HIDE_MODAL, id: 'auth' });
    expect(state).toEqual({ id: 'auth', show: false });
  });
});
