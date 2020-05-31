import { ActionTree } from 'vuex';
import { StoreInterface } from '../index';
import { AuthStateInterface } from './state';

const actions: ActionTree<AuthStateInterface, StoreInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
