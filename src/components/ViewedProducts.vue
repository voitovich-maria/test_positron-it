<template>
  <section class="swiper">
    <h2 class="swiper__title">
      Просмотренные товары
    </h2>

    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <ViewedItem class="swiper-slide" v-for="item in products" :key="item.id" :item="item" />
      </div>

      <div class="swiper__btns-wrapper">
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import ViewedItem from './ViewedItem.vue';

export default {
  name: 'ViewedProducts',
  components: {
    ViewedItem,
  },
  computed: {
    ...mapGetters({
      products: 'viewedDetailProducts',
    }),
  },
  mounted() {
    // eslint-disable-next-line no-new
    new Swiper(this.$refs.swiper, {
      modules: [Navigation, Pagination],
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
      },
      slidesPerView: 4,
      spaceBetween: 20,
    });
  },
};
</script>

<style>
:root {
  --swiper-navigation-size: 18px;
  --swiper-navigation-color: #fff;
}

.swiper__title {
  margin: 0 0 54px;
  font-weight: 600;
  font-size: 30px;
}

.swiper__btns-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  min-width: 180px;
  min-height: 50px;
}

.swiper-pagination {
  position: static;
  margin-right: 15px;
  font-size: 18px;
  width: auto;
}

.swiper-pagination-current {
  font-weight: 500;
  font-size: 24px;
}

.swiper-button-prev,
.swiper-button-next {
  position: static;
  margin: 0;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: var(--gray90);
}

.swiper-button-prev {
  margin-right: 20px;
}
</style>
