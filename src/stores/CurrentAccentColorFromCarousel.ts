import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCurrentAccentColorFromCarouselStore = defineStore(
  'currentAccentColorFromCarousel',
  () => {
    const carouselColor = { color: ref('#db3b1f'), textColor: ref('#fff') }

    return { carouselColor }
  }
)
