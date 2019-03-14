// Modules
import { selectImage, removeImage } from 'actions/image';
import { REMOVE_IMAGE, SELECT_IMAGE } from 'shared/constants/actionTypes';

describe('image action', () => {
  it('returns selectImage action', async () => {
    const result = selectImage('imageUrl.com');
    expect(result).toEqual({ type: SELECT_IMAGE, imageUrl: 'imageUrl.com' });
  });

  it('returns removeImage action', async () => {
    const result = removeImage();
    expect(result).toEqual({ type: REMOVE_IMAGE });
  });
});
