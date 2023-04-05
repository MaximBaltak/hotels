<template>
  <div>
    <v-select
      class="select"
      chips
      :model-value="modelValue"
      label="Поиск стран"
      :items="hotelsStore.listCounties"
      @update:modelValue="select"
      multiple
      clearable
    ></v-select>
  </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits} from "vue";
import {useHotelsStore} from "@/store/Hotels";

defineProps<{ modelValue?: string[] }>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>()
const hotelsStore = useHotelsStore()
const select = (value: string[]) => {
  emit('update:modelValue', value)
}

</script>
<style lang="scss" scoped>

</style>
