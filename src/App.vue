<template>
  <v-app full-height>
    <v-main class="d-flex justify-center mt-10">
      <HotelsPage/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HotelsPage from "@/pages/HotelsPage.vue";
import {useHotelsStore} from "@/store/Hotels";

const hotelsStore = useHotelsStore()
hotelsStore.init()
</script>
<style lang="scss">
body {
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
