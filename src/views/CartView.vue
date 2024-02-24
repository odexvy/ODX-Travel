<script setup lang="ts">
import { useToPayTravel } from '@/stores/toPayTravel'
import { useRoute } from 'vue-router'

const route = useRoute()
const { toPayTravel } = useToPayTravel()
</script>

<template>
  <div class="mainCartView">
    <v-stepper alt-labels editable :items="['Step 1', 'Step 2', 'Step 3']">
      <template v-slot:item.1>
        <v-card title="Step One"
          ><p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis
            est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque
            veniam neque porro libero rerum unde voluptatem! Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p></v-card
        >
      </template>
      <template v-slot:item.2>
        <v-card title="Step Two"
          ><p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis
            est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque
            veniam neque porro libero rerum unde voluptatem! Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p></v-card
        >
      </template>
      <template v-slot:item.3>
        <v-card title="Step Three"
          ><p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis
            est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque
            veniam neque porro libero rerum unde voluptatem! Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p></v-card
        >
      </template>
    </v-stepper>
  </div>
</template>

<style>
.mainCartView {
  display: flex;
  width: 100vw;
  min-height: calc(100vh - 88px);
  justify-content: center;
  align-items: center;
  padding: 64px;
  max-width: 1240px;
}
</style>
