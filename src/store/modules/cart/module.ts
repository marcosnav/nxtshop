import { Module } from 'vuex';
import { initialState } from './initialState';
import { mutations } from './mutations';
import { actions } from './actions';
import { Root, Cart } from '@/store/types';

export const CartModule: Module<Cart.State, Root.State> = {
  namespaced: true,
  state: initialState,
  mutations,
  actions,
};
