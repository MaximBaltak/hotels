<template>
  <div class="flex">
    <div class="content">
      <img width="238" height="181" src="@/assets/image.png" alt="not-found">
      <p class="text-black">По данным параметрам ничего не найдено</p>
      <p class="text">Попробуйте изменить параметры фильтрации
        или вернуться в общий каталог</p>
      <button @click="click" class="button">Отчистить фильтр</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useHotelsStore,} from "@/store/Hotels";

const hotelsStore = useHotelsStore()
const click = () => {
  hotelsStore.clearFilter()
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 835px;
  min-height: 475px;
  border: 1px solid #EAEAEA;
  border-radius: 15px;

  .content {
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: column;
    row-gap: 10px;

    .text-black {
      font-weight: 700;
      font-size: 18px;
      line-height: 23px;
      text-align: center;
      color: #3A3A3A;
    }

    .text {
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      text-align: center;
      color: #969696;
    }

    .button {
      outline: none;
      border: none;
      display: block;
      width: 240px;
      height: 50px;
      background: rgba(106, 83, 245, 0.1);
      border-radius: 12px;
      font-weight: 400;
      font-size: 14px;
      color: #6A53F5;
      transition: all .2s;

      &:hover {
        background: #4938af;
      }
    }
  }
}
</style>
