<template>
  <div class="card">
    <div class="card_header">
      <p class="card_header_text">{{ props.hotel.name }}</p>
      <p class="card_header_text">{{ props.hotel.min_price }} р.</p>
    </div>
    <div class="card_desc">
      <div class="card_stars">
        <v-icon v-for="el in stars"
                :key="el.id"
                :color="el.isCheck ? '#FFA900': '#D7D7D7'">
          mdi-star
        </v-icon>
      </div>
      <div class="card_desc_desc">
        <p class="card_desc_desc_text">{{ props.hotel.type }}</p>
        <v-icon size="10" color="#949494">mdi-circle</v-icon>
        <p class="card_desc_desc_text">{{ props.hotel.reviews_amount }} {{ text }}</p>
        <v-icon>mdi-map-marker-outline</v-icon>
        <p class="card_desc_desc_text__black">{{ props.hotel.country }}</p>
      </div>
      <p class="card_desc_desc_price-text">Цена за 1 ночь</p>
    </div>
    <div class="card_content">
      <p class="card_content_content">{{ props.hotel.description }}</p>
      <button class="card_content_action">Забранировать</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, defineProps} from "vue";
import {Hotel} from "@/store/types";
import {formatTextReviews} from "@/filters/format";

const props = defineProps<{ hotel: Hotel }>()
const stars = computed(() => {
  const data = [
    {
      id: 1,
      isCheck: false
    },
    {
      id: 2,
      isCheck: false
    },
    {
      id: 3,
      isCheck: false
    },
    {
      id: 4,
      isCheck: false
    },
    {
      id: 5,
      isCheck: false
    }
  ]
  for (let i = 0; i < props.hotel.stars; i++) {
    data[i].isCheck = true
  }
  return data
})
const text = computed(() => formatTextReviews(props.hotel.reviews_amount))
</script>

<style lang="scss" scoped>
.card {
  padding: 25px;
  width: 100%;
  min-height: 167px;
  background: white;
  border: 1px solid #EAEAEA;
  border-radius: 15px;

  &_header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &_text {
      font-weight: 700;
      font-size: 20px;
      color: #3A3A3A;
    }
  }

  &_desc {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 15px;

    &_stars {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-width: 200px;
    }

    &_desc {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-width: 302px;

      &_text {
        margin: 0;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #868686;
      }

      &_text__black {
        margin: 0;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #3A3A3A;
      }
    }

    &_price-text {
      font-weight: 400;
      font-size: 12px;
      color: #868686;
    }
  }

  &_content {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &_content {
      width: 560px;
      margin: 0;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #3A3A3A;
    }

    &_action {
      outline: none;
      border: none;
      display: block;
      width: 179px;
      height: 40px;
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
