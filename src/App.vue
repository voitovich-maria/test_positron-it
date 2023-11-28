<template>
  <div id="app">
    <header class="header">
      <div class="header__top container"></div>
      <div class="header__bottom container">
        <HeaderCart />
      </div>
    </header>
    <CartPage />
  </div>
</template>

<script>
import HeaderCart from './components/HeaderCart.vue';
import CartPage from './pages/CartPage.vue';

export default {
  name: 'App',
  components: {
    HeaderCart,
    CartPage,
  },
};
</script>

<style>
#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.45;
  color: var(--black1F);
}

.container {
  box-sizing: border-box;
  margin: 0 auto;
  padding-right: 80px;
  padding-left: 80px;
  max-width: 1440px;
}

.header__top {
  min-height: 45px;
}

.header__bottom {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 95px;
}
</style>
