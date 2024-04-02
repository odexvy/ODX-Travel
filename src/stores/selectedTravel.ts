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
    gps: ref([
      {
        latitude: ref(0),
        longitude: ref(0)
      }
    ]),
    iconType: ref(''),
    distance: ref(0),
    steps: ref(0),
    duration: ref(0)
  }

  const setSelectedTravel = (travelData: any) => {
    selectedTravel.color.value = travelData.color
    selectedTravel.textColor.value = travelData.textColor
    selectedTravel.uuid.value = travelData.uuid
    selectedTravel.title.value = travelData.title
    selectedTravel.subTitle.value = travelData.subTitle
    selectedTravel.image.value = travelData.image
    selectedTravel.iconType.value = travelData.iconType
    selectedTravel.distance.value = travelData.distance
    selectedTravel.steps.value = travelData.steps
    selectedTravel.duration.value = travelData.duration

    // Clear the existing gps array
    selectedTravel.gps.value = []

    // Iterate over the gps array in travelData and add each coordinate to selectedTravel
    travelData.gps.forEach((coord: { latitude: number; longitude: number }) => {
      selectedTravel.gps.value.push({
        latitude: ref(coord.latitude),
        longitude: ref(coord.longitude)
      })
    })
  }

  return { selectedTravel, setSelectedTravel }
})
