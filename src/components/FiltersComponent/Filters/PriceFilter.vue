<template>
  <div class="d-flex align-center justify-center" style="column-gap: 20px">
    <v-text-field
      type="number"
      :model-value="modelValue[0]"
      variant="outlined"
      label="от 10000"></v-text-field>
    <span style="margin-bottom: 20px">-</span>
    <v-text-field
      type="number"
      :model-value="modelValue[1]"
      variant="outlined"
      label="до 60000"></v-text-field>
  </div>
  <v-range-slider
    :model-value="modelValue"
    @update:modelValue="select"
    step="1"
    :max="max"
    :min="min"
    thumb-label="always"
    color="green"
  ></v-range-slider>
</template>

<script setup lang="ts">
import {defineProps, defineEmits} from "vue";

const props = defineProps<{ modelValue?: [number, number], max: number, min: number }>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: number[]): void
}>()
const select = (value: number[]) => {
  emit('update:modelValue', value)
}


</script>
<style lang="scss" scoped>

</style>

