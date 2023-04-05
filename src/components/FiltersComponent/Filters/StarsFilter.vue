<template>
  <div class="container">
    <v-checkbox
      v-model="one"
      :value="1"
      @update:modelValue="select"
      label="1 звезда"
    ></v-checkbox>
    <v-checkbox
      v-model="two"
      :value="2"
      @update:modelValue="select"
      label="2 звезды"
    ></v-checkbox>
    <v-checkbox
      v-model="tree"
      :value="3"
      @update:modelValue="select"
      label="3 звезды"
    ></v-checkbox>
    <v-checkbox
      v-model="four"
      :value="4"
      @update:modelValue="select"
      label="4 звёзд"
    ></v-checkbox>
    <v-checkbox
      v-model="five"
      :value="5"
      @update:modelValue="select"
      label="5 звёзд"
    ></v-checkbox>
  </div>
</template>

<script setup lang="ts">
import {defineEmits, ref, toRefs} from "vue";
import {useHotelsStore} from "@/store/Hotels";

const hotelsStore = useHotelsStore()
const emit = defineEmits<{
  (e: 'update', value: any[]): void
}>()
const one = ref(false)
const two = ref(false)
const tree = ref(false)
const four = ref(false)
const five = ref(false)

const select = () => {
  const arr = []
  arr.push(one.value, two.value, tree.value, four.value, five.value)

  const data = arr.filter(el => Boolean(el))
  emit('update', data)
}
hotelsStore.$subscribe((action, state) => {
  if (state.pagination.disabled) {
    one.value = false
    two.value = false
    tree.value = false
    four.value = false
    five.value = false
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


