import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { CartModule } from './modules';
import { Root } from './types';

Vue.use(Vuex);

const store: StoreOptions<Root.State> = {
  state: {
    version: '0.1.0',
  },
  modules: {
    cart: CartModule,
  },
};

export default new Vuex.Store<Root.State>(store);
