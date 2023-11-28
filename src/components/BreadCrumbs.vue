<template>
  <ul class="breadcrumbs" aria-label="Навигация">
    <li class="breadcrumbs__item">
      <a class="breadcrumbs__link" href="">
        Главная
      </a>
    </li>

    <li class="breadcrumbs__item">
      <a class="breadcrumbs__link" href="">
        Корзина
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BreadCrumbs',
};
</script>

<style>
.breadcrumbs {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

.breadcrumbs__item {
  position: relative;
}

.breadcrumbs__item:not(:last-child) {
  margin-right: 10px;
  padding-right: 16px;
}

.breadcrumbs__item:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 45%;
  right: 0;
  border-width: 4px 0 4px 5px;
  border-style: solid;
  border-color: transparent transparent transparent var(--black1F);
  width: 0;
  height: 0;
  transform: translateY(-32%);
}

.breadcrumbs__item:focus-within,
.breadcrumbs__item:hover,
.breadcrumbs__item:last-child {
  color: var(--gray79);
}

.breadcrumbs__link {
  text-decoration: none;
  color: inherit;
}

.breadcrumbs__link:focus {
  outline: none;
}
</style>
