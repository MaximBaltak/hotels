<template>
   <div>
     <ul v-if="hotelsStore.hotels_filter.length > 0" class="list">
       <li v-for="(hotel,index) in hotelsStore.hotels_filter"
           :key="index"
           class="list_el"><CardHotelComponent :hotel="hotel"/></li>
       <v-pagination v-if="hotelsStore.pagination.disabled" @next=pagination @prev="pagination" :length="hotelsStore.pagination.countPage"></v-pagination>
     </ul>
     <NodFoundHotels v-if="hotelsStore.hotels_filter.length === 0"/>
   </div>
</template>

<script setup lang="ts">
import CardHotelComponent from '@/components/Hotels/components/CardHotelComponent'
import {useHotelsStore} from "@/store/Hotels";
import NodFoundHotels from "@/components/Hotels/components/NodFoundHotels.vue";
const hotelsStore = useHotelsStore()
const pagination = (value:number) => {
  hotelsStore.updatePagination(value)
}
</script>

<style lang="scss" scoped>
  .list{
    list-style-type: none;
    padding: 0;
    width: 100%;
    &_el{
      width: 835px;
      margin-top:15px;
    }
  }
</style>
