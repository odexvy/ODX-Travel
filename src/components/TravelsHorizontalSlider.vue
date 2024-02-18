<script setup lang="ts">
import { useRouter } from 'vue-router'
import { getImageURL } from '../helpers/getImageURL.ts'
import { isMobile } from '../helpers/isMobile.ts'

const { datas } = defineProps(['datas'])
const router = useRouter()

const navigateToDetailsPage = (data: any) => {
  router.push({
    name: 'details',
    query: { ...data }
  })
}
</script>

<template>
  <v-sheet>
    <v-slide-group :show-arrows="isMobile() ? 'desktop' : 'always'" direction="horizontal">
      <v-row justify="center" align="center" class="my-1" :style="{ margin: 0 }">
        <v-slide-group-item v-for="data in datas" :key="data.title">
          <v-card
            class="mx-2"
            :image="getImageURL(data.image, 'jpg')"
            :style="{ width: '50vw', maxWidth: '450px', borderRadius: '8px' }"
            height="188"
            @click="navigateToDetailsPage(data)"
          >
            <h1 :style="{ color: data.color, paddingLeft: '16px' }">
              {{ data.title.toUpperCase() }}
            </h1>
          </v-card>
        </v-slide-group-item>
      </v-row>
    </v-slide-group>
  </v-sheet>
</template>

<style scoped></style>
