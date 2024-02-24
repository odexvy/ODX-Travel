import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSelectedTravel = defineStore('selectedTravel', () => {
  const selectedTravel = {
    color: ref(''),
    textColor: ref(''),
    uuid: ref(''),
    title: ref(''),
    subTitle: ref(''),
    image: ref(''),
    gps: {
      latitude: ref(0),
      longitude: ref(0)
    }
  }

  const setSelectedTravel = (travelData: any) => {
    //fix this any
    selectedTravel.color.value = travelData.color
    selectedTravel.textColor.value = travelData.textColor
    selectedTravel.uuid.value = travelData.uuid
    selectedTravel.title.value = travelData.title
    selectedTravel.subTitle.value = travelData.subTitle
    selectedTravel.image.value = travelData.image
    selectedTravel.gps.latitude.value = travelData.gps.latitude
    selectedTravel.gps.longitude.value = travelData.gps.longitude
  }

  return { selectedTravel, setSelectedTravel }
})
