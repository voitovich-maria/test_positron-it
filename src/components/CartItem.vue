<template>
  <li class="product">
    <img class="product__img" :src="item.product.img" :alt="item.product.title">

    <div class="product__info">
      <h3 class="product__title">
        {{ item.product.title }}
      </h3>

      <p class="product__specs">
        {{ item.product.specs }}
      </p>

      <span class="product__code">
        Артикул: {{ item.product.code }}
      </span>
    </div>

    <div class="product__counter">
      <button
        class="product__minus-btn"
        type="button"
        aria-label="Убрать один товар"
        @click="count > 1 ? count.set(count--) : deleteProduct(item.id)"
      >
        <svg width="10" height="2" fill="none">
          <use xlink:href="@/assets/sprite.svg#minus-icon"></use>
        </svg>
      </button>

      <input
        class="product__count-input"
        type="text"
        v-model.number="count"
        name="count"
        @keydown.enter.prevent="handleEnter"
      >

      <button
        class="product__plus-btn"
        type="button"
        aria-label="Добавить один товар"
        @click="count.set(count++)"
      >
        <svg width="10" height="10" fill="none">
          <use xlink:href="@/assets/sprite.svg#plus-icon"></use>
        </svg>
      </button>

      <span class="product__price-for-one" v-show="item.count > 1">
        {{ formattedPriceForOne }}/шт.
      </span>
    </div>

    <b class="product__price">
      {{ formattedPrice }}
    </b>

    <button class="product__del-btn" type="button" aria-label="Удалить товар" @click.prevent="deleteProduct(item.id)">
      <svg width="14" height="14" fill="none">
        <use xlink:href="@/assets/sprite.svg#close-icon"></use>
      </svg>
    </button>
  </li>
</template>

<script>
import { mapMutations } from 'vuex';
import numberFormat from '../helpers/numberFormat';

export default {
  name: 'CartItem',
  props: ['item'],
  computed: {
    count: {
      get() {
        return this.item.count;
      },
      set(value) {
        this.$store.commit('updateCartProductCount', {
          id: this.item.id,
          count: parseInt(value, 10) || 0,
        });
      },
    },
    formattedPriceForOne() {
      return numberFormat(this.item.product.price);
    },
    formattedPrice() {
      return numberFormat(this.item.count * this.item.product.price);
    },
  },
  methods: {
    ...mapMutations({
      deleteProduct: 'deleteCartProduct',
    }),
    handleEnter(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
      }
    },
  },
};
</script>

<style>
.product {
  position: relative;
  display: flex;
  align-items: center;
  padding: 25px 53px 20px 15px;
}

.product__img {
  margin-right: 31px;
  width: 100px;
  height: 100px;
}

.product__info {
  max-width: 265px;
}

.product__title {
  margin: 0;
  font-weight: 600;
  font-size: 16px;
}

.product__specs {
  margin: 7px 0 7px;
  font-size: 12px;
  color: var(--black2C);
}

.product__code {
  color: var(--gray79);
}

.product__counter {
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;
}

.product__minus-btn,
.product__plus-btn,
.product__count-input {
  padding: 0;
  border: none;
  width: 34px;
  flex-shrink: 0;
  height: 34px;
  background-color: var(--blueF6);
  text-align: center;
}

.product__minus-btn,
.product__plus-btn {
  cursor: pointer;
}

.product__minus-btn {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.product__plus-btn {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.product__minus-btn,
.product__count-input {
  margin-right: 2px;
}

.product__minus-btn svg {
  margin-top: -3px;
  vertical-align: middle;
}

.product__minus-btn:focus,
.product__count-input:focus,
.product__plus-btn:focus {
  outline: none;
  background-color: var(--blueEE);
}

.product__minus-btn:hover,
.product__count-input:hover,
.product__plus-btn:hover {
  background-color: var(--blueEE);
}

.product__price-for-one {
  position: absolute;
  top: calc(100% + 10px);
  width: 100%;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 12px;
  text-align: center;
}

.product__price {
  margin-left: auto;
  margin-right: 0;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 500;
}

.product__del-btn {
  position: absolute;
  top: 21px;
  right: 0;
  padding: 5px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.product__del-btn:focus {
  outline: none;
}
</style>
