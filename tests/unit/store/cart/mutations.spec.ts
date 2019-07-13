import { mutations } from '@/store/modules/cart/mutations';
import { Cart } from '@/store/types';

describe('CartMutations', () => {
  describe('#UPDATE_CART', () => {
    test('adds items to cart', () => {
      const stateMock: Cart.State = { products: new Set() };
      mutations.UPDATE_CART(stateMock, {
        operation: 'ADD',
        item: 'SmartWatch-xyz-3',
      });
      expect(stateMock.products.size).toBe(1);
      expect(stateMock.products.has('SmartWatch-xyz-3')).toBeTruthy();
    });

    test('removes items to cart', () => {
      const stateMock: Cart.State = {
        products: new Set([
          'SmartWatch-xyz-3',
          'BlackPad-pro-3100',
          'TinkerSet-blue-version',
        ]),
      };
      mutations.UPDATE_CART(stateMock, {
        operation: 'REMOVE',
        item: 'BlackPad-pro-3100',
      });
      expect(stateMock.products.size).toBe(2);
      expect(stateMock.products.has('BlackPad-pro-3100')).toBeFalsy();
    });
  });
});
