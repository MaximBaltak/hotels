<template>
  <v-text-field :model-value="value"
                @update:modelValue="select"
                variant="outlined"
                type="number"
                label="колличество отзывов,от"></v-text-field>
</template>

<script setup lang="ts">
import {defineProps, defineEmits} from "vue";

defineProps<{ value?: string }>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
const select = (value: string) => {
  emit('update:modelValue', value)
}

</script>
<style lang="scss" scoped>

</style>

