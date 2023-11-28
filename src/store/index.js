import Vue from 'vue';
import Vuex from 'vuex';
import products from '../data/products';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [
      {
        id: 2,
        count: 1,
      },
      {
        id: 1,
        count: 2,
      },
      {
        id: 3,
        count: 1,
      },
    ],
    needInstall: false,
    viewedProducts: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
    ],
    userAccessKey: 'qwerty',
  },
  mutations: {
    updateCartProductCount(state, { id, count }) {
      const item = state.cartProducts.find((elem) => elem.id === id);
      if (item) {
        item.count = count;
      }
    },
    deleteCartProduct(state, id) {
      state.cartProducts = state.cartProducts.filter((elem) => elem.id !== id);
    },
    deleteAllCartProducts(state) {
      state.cartProducts = [];
    },
    changeNeedInstall(state, needInstall) {
      state.needInstall = needInstall;
    },
  },
  getters: {
    cartDetailProducts(state) {
      return state.cartProducts.map((item) => ({
        ...item,
        product: products.find((elem) => elem.id === item.id),
      }));
    },
    cartTotalCount(state) {
      return state.cartProducts.reduce(
        (acc, item) => item.count + acc,
        0,
      );
    },
    cartTotalPrice(state, getters) {
      return getters.cartDetailProducts.reduce(
        (acc, item) => (item.product.price * item.count) + acc,
        0,
      );
    },
    viewedDetailProducts(state) {
      return state.viewedProducts.map((item) => ({
        ...item,
        product: products.find((elem) => elem.id === item.id),
      }));
    },
  },
});
