import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCurrentAccentColorFromCarouselStore = defineStore(
  'currentAccentColorFromCarousel',
  () => {
    const color = ref('#fff')

    return { color }
  }
)
