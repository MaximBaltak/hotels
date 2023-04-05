<template>
  <div class="filters pa-5">
    <div class="container" style="height: 240px">
      <p class="text">Страна</p>
      <CountriesFilter v-model="countries"/>
    </div>
    <div class="container">
      <p class="text">Тип</p>
      <TypeFilter @update="updateTypes"/>
    </div>
    <div class="container">
      <p class="text">Колличество звёзд</p>
      <StarsFilter @update="updateStars"/>
    </div>
    <div class="container">
      <p class="text">Колличество отзывов (от)</p>
      <CountReviewsFilter v-model="countReviews"/>
    </div>
    <div class="container">
      <p class="text">Цена</p>
      <PriceFilter v-model="price" :min="1000" :max="10000"/>
    </div>
    <button @click="toApply" class="submit">Применить фильтр</button>
    <button @click="clear" class="clear">Отчистить фильтр</button>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import CountriesFilter from "@/components/FiltersComponent/Filters/CountriesFilter.vue";
import TypeFilter from "@/components/FiltersComponent/Filters/TypeFilter.vue";
import StarsFilter from "@/components/FiltersComponent/Filters/StarsFilter.vue";
import CountReviewsFilter from "@/components/FiltersComponent/Filters/CountReviewsFilter.vue";
import PriceFilter from "@/components/FiltersComponent/Filters/PriceFilter.vue";
import {useHotelsStore} from "@/store/Hotels";
import {Filters} from "@/store/types";

const hotelsStore = useHotelsStore()
const countries = ref<string[]>([])
const types = ref<string[]>([])
const stars = ref<number[]>([])
const price = ref<number[]>([])
const countReviews = ref('')
const updateTypes = (value: string[]) => {
  types.value = [...value]
}
const updateStars = (value: number[]) => {
  stars.value = [...value]
}
const clear = () => {
  hotelsStore.clearFilter()
}
const toApply = () => {
  const filters: Filters = {
    counties: countries.value,
    types: types.value,
    star: stars.value,
    price: price.value,
    countReviews: +countReviews.value
  }
  hotelsStore.updateFilter(filters)
  hotelsStore.filterHotels()
}
hotelsStore.$subscribe((action, state) => {
  if (state.pagination.disabled) {
    price.value = []
  }
})
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  flex-flow: column;
  row-gap: 30px;

  .container {
    display: flex;
    flex-flow: column;
    row-gap: 10px;

    .text {
      font-weight: 700;
      font-size: 16px;
      color: #3A3A3A;
    }
  }
}

.submit {
  outline: none;
  border: none;
  display: block;
  width: 100%;
  height: 56px;
  background: #6A53F5;
  border-radius: 15px;
  transition: all .2s;
  font-weight: 700;
  font-size: 16px;
  color: white;

  &:hover {
    background: #372d8f;
  }
}

.clear {
  outline: none;
  display: block;
  width: 100%;
  height: 56px;
  background: white;
  border: 1px solid #EAEAEA;
  border-radius: 15px;
  transition: all .2s;
  font-weight: 700;
  font-size: 16px;
  color: #3A3A3A;

  &:hover {
    background: #e0e0e0;
  }
}
</style>
