import { actions } from '@/store/modules/cart/actions';
import { Cart } from '@/store/types';

const { UPDATE_CART } = Cart.MutationType;

describe('CartActions', () => {
  describe('#ADD_TO_CART', () => {
    test('commits to update the cart after call resolves', async () => {
      const commitMock = () => {};
      Cart.commit = jest.fn();
      // @ts-ignore
      await actions.ADD_TO_CART({ commit: commitMock }, 'XYZ');
      expect(Cart.commit).toHaveBeenCalledWith(commitMock, UPDATE_CART, {
        operation: 'ADD',
        item: 'XYZ',
      });
    });
  });
});
