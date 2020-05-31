import { GetterTree } from 'vuex';
import { StoreInterface } from '../index';
import { AuthStateInterface } from './state';

const getters: GetterTree<AuthStateInterface, StoreInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default getters;
