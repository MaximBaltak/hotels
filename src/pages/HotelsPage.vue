<template>
  <div class="grid">
    <FiltersComponent/>
    <HotelsComponent/>
  </div>
</template>

<script setup>

import FiltersComponent from "@/components/FiltersComponent/FiltersComponent";
import HotelsComponent from "@/components/Hotels/HotelsComponent";
</script>

<style scoped lang="scss">
.grid {
  display: grid;
  grid-template-areas: "filters hotels";
  grid-template-columns: 325px 1fr;
}
</style>
