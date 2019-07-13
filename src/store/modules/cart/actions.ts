import { ActionTree } from 'vuex';
import { Root, Cart } from '@/store/types';

const { ADD_TO_CART } = Cart.ActionType;
const { UPDATE_CART } = Cart.MutationType;

export const actions: ActionTree<Cart.State, Root.State> = {
  async [ADD_TO_CART]({ commit }, item: string) {
    // Simulate cart persistance HTTP call to a back-end service with a timeout
    // Here we would use an API instance/service with a lib like axios
    await new Promise(resolve => setTimeout(() => resolve(), 2000));
    Cart.commit(commit, UPDATE_CART, { operation: 'ADD', item });
  },
};
