<template>
  <a class="header-cart" href="" aria-label="Корзина">
    <svg width="32" height="32" fill="none">
      <use xlink:href="@/assets/sprite.svg#cart-icon"></use>
    </svg>

    <div class="header-cart__info">
      <span class="header-cart__title">
        Ваша корзина
      </span>

      <span class="header-cart__count" aria-label="Количество товаров">
        {{ formattedTotalCount }}
      </span>

      <span class="header-cart__price" aria-label="Стоимость товаров">
        {{ formattedTotalPrice }}
      </span>
    </div>
  </a>
</template>

<script>
import { mapGetters } from 'vuex';
import numberFormat from '../helpers/numberFormat';
import stringFormat from '../helpers/stringFormat';

export default {
  name: 'HeaderCart',
  computed: {
    ...mapGetters({
      totalCount: 'cartTotalCount',
      totalPrice: 'cartTotalPrice',
    }),
    formattedTotalCount() {
      return `${this.totalCount} ${stringFormat(this.totalCount, ['товар', 'товара', 'товаров'])}`;
    },
    formattedTotalPrice() {
      return numberFormat(this.totalPrice);
    },
  },
};
</script>

<style>
.header-cart {
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
}

.header-cart:focus {
  outline: none;
}

.header-cart svg {
  margin-right: 10px;
}

.header-cart:focus .header-cart__title,
.header-cart:hover .header-cart__title {
  color: var(--blue00);
}

.header-cart__info {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.header-cart__title {
  margin: -3px 0 3px;
}

.header-cart__count {
  margin-bottom: 3px;
  font-size: 12px;
  color: var(--gray79);
}

.header-cart__price {
  font-size: 12px;
}
</style>
