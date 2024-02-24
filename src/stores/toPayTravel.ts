import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useToPayTravel = defineStore('toPayTravel', () => {
  const toPayTravel = {
    travel: {
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
    },
    options: { cancelInsurance: ref(false), equipmentLoan: ref(false) }
  }

  const setToPayTravel = (travelData: any, options: any) => {
    //fix this any
    toPayTravel.travel.color.value = travelData.color
    toPayTravel.travel.textColor.value = travelData.textColor
    toPayTravel.travel.uuid.value = travelData.uuid
    toPayTravel.travel.title.value = travelData.title
    toPayTravel.travel.subTitle.value = travelData.subTitle
    toPayTravel.travel.image.value = travelData.image
    toPayTravel.travel.gps.latitude.value = travelData.gps.latitude
    toPayTravel.travel.gps.longitude.value = travelData.gps.longitude
    toPayTravel.options.cancelInsurance = options.cancelInsurance
    toPayTravel.options.equipmentLoan = options.equipmentLoan
  }

  const nbNotif = () => (toPayTravel.travel.title.value === '' ? 0 : 1)

  return { toPayTravel, setToPayTravel, nbNotif }
})
