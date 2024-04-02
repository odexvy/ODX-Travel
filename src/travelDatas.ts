const travelDatas = [
  {
    uuid: 'a9f9363a-eb7c-49b1-8a29-33f0b758a16e',
    title: "Sur les traces d'Harry Potter",
    subTitle: '',
    image: 'photo-harry-potter',
    color: '#cfdb1f',
    textColor: '#000',
    gps: [
      { latitude: 55.4153, longitude: -1.7059 }, // Alnwick Castle, England
      { latitude: 54.066, longitude: -2.1533 }, // Malham Cove, England
      { latitude: 51.7893, longitude: -2.5811 }, // Puzzlewood, England
      { latitude: 56.87, longitude: -5.43 }, // Glenfinnan Viaduct, Scotland
      { latitude: 56.7693, longitude: -5.032 }, // Glen Nevis, Scotland
      { latitude: 56.5409, longitude: -5.3579 }, // Loch Etive, Scotland
      { latitude: 56.7592, longitude: -4.9948 } // Steall Waterfall, Scotland
    ],
    iconType: 'photo',
    distance: 400,
    steps: 7,
    duration: 12
  },
  {
    uuid: '66cc0a1e-ff8b-474e-97b4-8f4695f29b6b',
    title: 'Iceland',
    subTitle: 'by Photo',
    image: 'photo-iceland',
    color: '#db3b1f',
    textColor: '#000',
    gps: [
      {
        latitude: 64.9631,
        longitude: -19.0208
      }
    ],
    iconType: 'photo',
    distance: 2000,
    steps: 10,
    duration: 15
  },
  {
    uuid: '57f1d631-82a7-40d7-8054-34b2302461d1',
    title: 'USA',
    subTitle: 'by Photo',
    image: 'photo-usa',
    color: '#1fa2db',
    textColor: '#fff',
    gps: [
      {
        latitude: 37.0902,
        longitude: -95.7129
      }
    ],
    iconType: 'photo',
    distance: 3500,
    steps: 14,
    duration: 20
  },
  {
    uuid: '10562cd7-9fc8-44b5-b507-9d0b547b0366',
    title: 'Indonesia',
    subTitle: 'by Photo',
    image: 'photo-indonesia',
    color: '#1fafdb',
    textColor: '#fff',
    gps: [
      {
        latitude: -0.7893,
        longitude: 113.9213
      }
    ],
    iconType: 'photo',
    distance: 1800,
    steps: 8,
    duration: 10
  },
  {
    uuid: '7d8a9de0-4b92-4fd3-b27e-3a6de5b6b820',
    title: 'Antarctic',
    subTitle: 'by Foot',
    image: 'trek-antarctic',
    color: '#db1f5e',
    textColor: '#ffffff',
    gps: [
      {
        latitude: -90,
        longitude: 0
      }
    ],
    iconType: 'foot',
    distance: 500,
    steps: 5,
    duration: 60
  },
  {
    uuid: '60f52f28-84e5-499d-a03d-6eb3c48a1e15',
    title: 'USA',
    subTitle: 'by Foot',
    image: 'trek-usa',
    color: '#1fdb74',
    textColor: '#000',
    gps: [
      {
        latitude: 37.0902,
        longitude: -95.7129
      }
    ],
    iconType: 'foot',
    distance: 600,
    steps: 9,
    duration: 45
  },
  {
    uuid: '3d18b2cf-3807-4327-8cfc-0210fb33c9ee',
    title: 'Canaries',
    subTitle: 'by Foot',
    image: 'trek-canaries',
    color: '#1fdbbc',
    textColor: '#000',
    gps: [
      {
        latitude: 28.2916,
        longitude: -16.6291
      }
    ],
    iconType: 'foot',
    distance: 300,
    steps: 6,
    duration: 20
  },
  {
    uuid: '8f7f99b4-080e-4c77-ae3a-dc7f5b1a7846',
    title: 'Vietnam',
    subTitle: 'by Foot',
    image: 'trek-vietnam',
    color: '#99db1f',
    textColor: '#000',
    gps: [
      {
        latitude: 14.0583,
        longitude: 108.2772
      }
    ],
    iconType: 'foot',
    distance: 1200,
    steps: 12,
    duration: 30
  },
  {
    uuid: '7e2f2ae4-b2c8-4478-94e3-7cb1bc78cc26',
    title: 'Mongolia',
    subTitle: 'by Bike',
    image: 'vtt-mongolia',
    color: '#1FDB83',
    textColor: '#000',
    gps: [
      {
        latitude: 46.8625,
        longitude: 103.8467
      }
    ],
    iconType: 'bike',
    distance: 1000,
    steps: 7,
    duration: 25
  },
  {
    uuid: '90236b3a-7d24-476e-83cf-bf4b1ff40d3a',
    title: 'New Zealand',
    subTitle: 'by Bike',
    image: 'vtt-new-zealand',
    color: '#db1f1f',
    textColor: '#fff',
    gps: [
      {
        latitude: -40.9006,
        longitude: 174.886
      }
    ],
    iconType: 'bike',
    distance: 1500,
    steps: 5,
    duration: 35
  },
  {
    uuid: '28273b58-e4f7-424a-b05b-bdfc0b95ff43',
    title: 'Scotland',
    subTitle: 'by Bike',
    image: 'vtt-scotland',
    color: '#4bdb1f',
    textColor: '#000',
    gps: [
      {
        latitude: 56.4907,
        longitude: -4.2026
      }
    ],
    iconType: 'bike',
    distance: 800,
    steps: 15,
    duration: 20
  },
  {
    uuid: '5e19c139-b7bc-4d3b-8c25-c135bf715e84',
    title: 'Cambodia',
    subTitle: 'by Bike',
    image: 'vtt-cambodia',
    color: '#dbc81f',
    textColor: '#000',
    gps: [
      {
        latitude: 12.5657,
        longitude: 104.991
      }
    ],
    iconType: 'bike',
    distance: 1000,
    steps: 8,
    duration: 13
  },
  {
    uuid: 'b52034a3-aeed-44d5-bc16-003fcb725a9c',
    title: 'Namibia',
    subTitle: 'by Road',
    image: 'road-namibia',
    color: '#DB1F4E',
    textColor: '#fff',
    gps: [
      {
        latitude: -22.9576,
        longitude: 18.4904
      }
    ],
    iconType: 'car',
    distance: 2500,
    steps: 6,
    duration: 30
  },
  {
    uuid: '448c7f0a-9b4e-4728-86a9-8fe59d0cf82b',
    title: 'Peru',
    subTitle: 'by Road',
    image: 'road-peru',
    color: '#DB1F4E',
    textColor: '#fff',
    gps: [
      {
        latitude: -9.19,
        longitude: -75.0152
      }
    ],
    iconType: 'car',
    distance: 2000,
    steps: 7,
    duration: 25
  },
  {
    uuid: '4a7741b0-b01a-45ed-b8d0-07a42d3f09ff',
    title: 'Iceland',
    subTitle: 'by Road',
    image: 'road-iceland',
    color: '#1fc5db',
    textColor: '#000',
    gps: [
      {
        latitude: 64.9631,
        longitude: -19.0208
      }
    ],
    iconType: 'car',
    distance: 2500,
    steps: 11,
    duration: 12
  },
  {
    uuid: '731f2025-6c72-47d2-bbb0-f8e31d4eeb23',
    title: 'Kenya',
    subTitle: 'by Road',
    image: 'road-kenya',
    color: '#db4b1f',
    textColor: '#000',
    gps: [
      {
        latitude: -0.0236,
        longitude: 37.9062
      }
    ],
    iconType: 'car',
    distance: 1800,
    steps: 12,
    duration: 20
  }
]

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const travelsOfTheDayDatas = [
  travelDatas[getRandomNumber(0, 3)],
  travelDatas[getRandomNumber(4, 7)],
  travelDatas[getRandomNumber(8, 11)],
  travelDatas[getRandomNumber(12, 15)]
]

export const photoTravalesDatas = [travelDatas[0], travelDatas[1], travelDatas[2], travelDatas[3]]
export const trekTravalesDatas = [travelDatas[4], travelDatas[5], travelDatas[6], travelDatas[7]]
export const vttTravalesDatas = [travelDatas[8], travelDatas[9], travelDatas[10], travelDatas[11]]
export const roadTravalesDatas = [
  travelDatas[12],
  travelDatas[13],
  travelDatas[14],
  travelDatas[15]
]
