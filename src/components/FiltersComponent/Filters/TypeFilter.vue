<template>
  <div class="container">
    <v-checkbox
      value="Апартаменты"
      v-model="apartaments"
      label="Апартаменты"
      @update:modelValue="select"
    ></v-checkbox>
    <hr class="border">
    <v-checkbox
      value="Отель"
      v-model="hotel"
      label="Отель"
      @update:modelValue="select"
    ></v-checkbox>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, ref, watch} from "vue";
import {useHotelsStore} from "@/store/Hotels";

const emit = defineEmits<{
  (e: 'update', value: string[]): void
}>()
const apartaments = ref('')
const hotel = ref('')
const hotelsStore = useHotelsStore()

const select = () => {
  const arr = []
  arr.push(apartaments.value, hotel.value)
  const data = arr.filter(el => Boolean(el))
  emit('update', data)
}
hotelsStore.$subscribe((action, state) => {
  if (state.pagination.disabled) {
    apartaments.value = ''
    hotel.value = ''
  }
})

</script>
<style lang="scss" scoped>
.container {
  min-height: 151px;
  border: 1px solid #EAEAEA;
  border-radius: 10px;
  background: #FAFAFA;
}

.border {
  width: 277px;
  margin: 0 auto 0;
  height: 1px;
  border: 1px solid #EAEAEA;

}
</style>

