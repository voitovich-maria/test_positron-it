<template>
  <div class="slide">
    <img class="slide__img" :src="item.product.img" :alt="item.product.title">

    <h3 class="slide__title">
      {{ item.product.name }}
    </h3>

    <p class="slide__descr">
      {{ item.product.descr }}
    </p>

    <span class="slide__price">
      {{ formattedPriceRange }}
    </span>

    <span class="slide__price-euro">
      {{ formattedPriceRangeEuro }}
    </span>

    <button class="content__btn" type="button">
      Подробнее
    </button>
  </div>
</template>

<script>
import numberFormat from '../helpers/numberFormat';
import numberFormatEuro from '../helpers/numberFormatEuro';

export default {
  name: 'ViewedItem',
  props: ['item'],
  computed: {
    formattedPriceRange() {
      return `
        ${numberFormat(this.item.product.minPrice)} \u2013 ${numberFormat(this.item.product.maxPrice)}
      `;
    },
    formattedPriceRangeEuro() {
      return `
        ${numberFormatEuro(this.item.product.minPriceEuro)} \u2013 ${numberFormatEuro(this.item.product.maxPriceEuro)}
      `;
    },
  },
};
</script>

<style>
.slide {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px;
  border-radius: 5px;
  height: 563px;
  background-color: var(--blueF6);
}

.slide__img {
  margin-bottom: 5px;
}

.slide__title {
  margin: 0 0 5px;
  font-weight: 700;
  font-size: 22px;
}

.slide__descr {
  margin: 0;
}

.slide__price {
  margin-top: auto;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 22px;
}

.slide__price-euro {
  margin-bottom: 20px;
  font-size: 16px;
  color: var(--gray79);
}

.slide .content__btn {
  padding: 15px;
  font-size: 16px;
}
</style>
