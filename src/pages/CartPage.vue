<template>
  <main class="content container">
    <BreadCrumbs class="content__breadcrumbs"/>

    <section class="content__cart cart">
      <form class="cart__form" method="post" @submit.prevent="order">
        <div class="cart__left">
          <div class="cart__info">
            <h1 class="cart__title">
              Ваша корзина
            </h1>

            <span class="cart__count" aria-label="Количество">
              {{ formattedTotalCount }}
            </span>

            <button class="cart__clear-btn" type="button" @click="deleteAllProducts">
              Очистить корзину
            </button>
          </div>

          <ul class="cart__list">
            <CartItem class="cart__item" v-for="item in products" :key="item.id" :item="item" />
          </ul>

          <div class="cart__checkbox checkbox">
            <input class="checkbox__input" type="checkbox" v-model="needInstall" name="installation">

            <svg class="checkbox__img" width="30" height="30" fill="none">
              <use xlink:href="@/assets/sprite.svg#tools-icon"></use>
            </svg>

            <div class="checkbox__info">
              <h3 class="checkbox__title">
                Установка
              </h3>

              <p class="checkbox__descr">
                Отметьте, если Вам необходима консультация профессионала по&nbsp;монтажу выбранных товаров.
              </p>
            </div>
          </div>
        </div>

        <div class="cart__right total">
          <h2 class="total__title">
            Итого
          </h2>

          <ul class="total__list">
            <li class="total__item">
              <span class="total__label">
                Сумма заказа
              </span>

              <span class="total__spec">
                {{ formattedTotalPrice }}
              </span>
            </li>

            <li class="total__item">
              <span class="total__label">
                Количество
              </span>

              <span class="total__spec">
                {{ totalCount }} шт
              </span>
            </li>

            <li class="total__item">
              <span class="total__label">
                Установка
              </span>

              <span class="total__spec">
                {{ needInstall ? 'Да' : 'Нет' }}
              </span>
            </li>

            <li class="total__item">
              <span class="total__label">
                Стоимость товаров
              </span>

              <span class="total__spec">
                {{ formattedTotalPrice }}
              </span>
            </li>
          </ul>

          <button class="content__btn total__btn" type="submit">
            Оформить заказ
          </button>

          <button class="content__btn content__btn_light total__btn" type="submit">
            Купить в&nbsp;1&nbsp;клик
          </button>
        </div>
      </form>
    </section>
    <ViewedProducts class="content__swiper" />
  </main>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import axios from 'axios';
import BreadCrumbs from '../components/BreadCrumbs.vue';
import CartItem from '../components/CartItem.vue';
import ViewedProducts from '../components/ViewedProducts.vue';
import numberFormat from '../helpers/numberFormat';
import stringFormat from '../helpers/stringFormat';

export default {
  name: 'CartPage',
  components: {
    BreadCrumbs,
    CartItem,
    ViewedProducts,
  },
  computed: {
    ...mapGetters({
      products: 'cartDetailProducts',
      totalCount: 'cartTotalCount',
      totalPrice: 'cartTotalPrice',
    }),
    formattedTotalCount() {
      return `${this.totalCount} ${stringFormat(this.totalCount, ['товар', 'товара', 'товаров'])}`;
    },
    formattedTotalPrice() {
      return numberFormat(this.totalPrice);
    },
    needInstall: {
      get() {
        return this.$store.state.needInstall;
      },
      set(value) {
        this.$store.commit('changeNeedInstall', value);
      },
    },
  },
  methods: {
    ...mapMutations({
      deleteAllProducts: 'deleteAllCartProducts',
      changeNeedInstall: 'changeNeedInstall',
    }),
    order() {
      axios({
        method: 'post',
        url: 'https://jsonplaceholder.typicode.com/posts',
        params: {
          userAccessKey: this.$store.state.userAccessKey,
        },
        data: {
          cartProducts: this.$store.state.cartProducts,
          needInstall: this.$store.state.needInstall,
          userAccessKey: this.$store.state.userAccessKey,
        },
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

  },
};
</script>

<style>
.content {
  padding-top: 32px;
  padding-bottom: 116px;
}

.content__breadcrumbs {
  margin-bottom: 56px;
}

.content__btn {
  display: block;
  padding: 14px;
  border: 1px solid var(--blue00);
  border-radius: 4px;
  width: 100%;
  font-weight: 600;
  font-size: 18px;
  color: #fff;
  background-color: var(--blue00);
  cursor: pointer;
  transition: all .3s ease;
}

.content__btn_light {
  color: var(--blue00);
  background-color: #fff;
}

.content__btn:focus,
.content__btn:hover {
  outline: none;
  border-color: #187ABF;
  background-color: #187ABF;
}

.content__btn_light:focus,
.content__btn_light:hover {
  color: #fff;
}

.content__cart {
  margin-bottom: 95px;
}

.cart__form {
  display: flex;
  align-items: flex-start;
}

.cart__left {
  margin-right: 55px;
  width: 62.5%;
}

.cart__right {
  box-sizing: border-box;
  margin-top: 92px;
  width: 33.2%;
}

.cart__info {
  display: flex;
  align-items: baseline;
  margin-bottom: 18px;
}

.cart__title {
  margin: 0 23px 0 0;
  font-weight: 700;
  font-size: 44px;
}

.cart__count {
  font-size: 18px;
  color: var(--gray79);
}

.cart__clear-btn {
  margin-left: auto;
  padding: 0;
  border: none;
  line-height: 1.5;
  color: var(--gray79);
  text-decoration: underline;
  text-underline-offset: .2em;
  background-color: transparent;
  cursor: pointer;
}

.cart__clear-btn:focus {
  outline: none;
  color: var(--blackF1);
}

.cart__clear-btn:hover {
  color: var(--blackF1);
}

.cart__list {
  margin: 0 0 25px;
  padding: 0;
  list-style: none;
}

.cart__item:not(:last-child) {
  border-bottom: 1px solid var(--grayC4);
}

.checkbox {
  display: flex;
  align-items: center;
  padding: 25px;
  border-radius: 5px;
  background-color: var(--blueF6);
}

.checkbox__input {
  margin-right: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.checkbox__img {
  margin-right: 20px;
  padding: 10px;
  background-color: #fff;
}

.checkbox__title {
  margin: 0 0 2px;
  font-weight: 600;
  font-size: 16px;
}

.checkbox__descr {
  margin: 0;
  color: var(--gray79);
}

.total {
  padding: 35px 30px;
  border-radius: 5px;
  background-color: var(--blueF6);
}

.total__title {
  margin: 0 0 15px;
  font-weight: 600;
  font-size: 24px;
}

.total__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.total__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 0;
  font-size: 16px;
}

.total__item:nth-last-child(2) {
  padding-bottom: 28px;
  border-bottom: 1px solid var(--grayAE);
}

.total__item:last-child {
  padding: 10px 0 32px;
  padding-bottom: 28px;
  font-weight: 600px;
  font-size: 18px;
}

.total__item:last-child .total__spec {
  font-weight: 700;
  font-size: 26px;
}

.total__label {
  font-weight: 500;
}

.total__spec {
  font-family: Roboto, Helvetica, Arial, sans-serif;
}

.total__btn:not(:last-child) {
  margin-bottom: 15px;
}
</style>
