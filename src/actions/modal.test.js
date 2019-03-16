// Modules
import { showModal, hideModal } from 'actions/modal';
import { SHOW_MODAL, HIDE_MODAL } from 'shared/constants/actionTypes';

describe('modal action', () => {
  it('returns showModal action', async () => {
    const result = showModal(1);
    expect(result).toEqual({ type: SHOW_MODAL, id: 1 });
  });

  it('returns hideModal action', async () => {
    const result = hideModal(1);
    expect(result).toEqual({ type: HIDE_MODAL, id: 1 });
  });
});
