import { MutationTree } from 'vuex';
import { Cart } from '@/store/types';

const { UPDATE_CART } = Cart.MutationType;

export const mutations: MutationTree<Cart.State> = {
  [UPDATE_CART](state, payload: Cart.UpdatePayload) {
    const { operation, item } = payload;
    if (operation === 'ADD') {
      state.products = [item];
    } else {
      state.products = [];
    }
  },
};
