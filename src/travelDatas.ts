const travelDatas = [
  {
    uuid: 'a9f9363a-eb7c-49b1-8a29-33f0b758a16e',
    title: 'Sur les traces de Harry Potter',
    subTitle: '',
    image: 'photo-harry-potter',
    color: '#cfdb1f',
    textColor: '#000',
    gps: {
      latitude: 51.5074,
      longitude: -0.1278
    }
  },
  {
    uuid: '66cc0a1e-ff8b-474e-97b4-8f4695f29b6b',
    title: 'Iceland',
    subTitle: 'by Photo',
    image: 'photo-iceland',
    color: '#db3b1f',
    textColor: '#000',
    gps: {
      latitude: 64.9631,
      longitude: -19.0208
    }
  },
  {
    uuid: '57f1d631-82a7-40d7-8054-34b2302461d1',
    title: 'USA',
    subTitle: 'by Photo',
    image: 'photo-usa',
    color: '#1f51db',
    textColor: '#fff',
    gps: {
      latitude: 37.0902,
      longitude: -95.7129
    }
  },
  {
    uuid: '10562cd7-9fc8-44b5-b507-9d0b547b0366',
    title: 'Indonesia',
    subTitle: 'by Photo',
    image: 'photo-indonesia',
    color: '#1fafdb',
    textColor: '#fff',
    gps: {
      latitude: -0.7893,
      longitude: 113.9213
    }
  },
  {
    uuid: '7d8a9de0-4b92-4fd3-b27e-3a6de5b6b820',
    title: 'Antarctic',
    subTitle: 'by Foot',
    image: 'trek-antarctic',
    color: '#db1f5e',
    textColor: '#ffffff',
    gps: {
      latitude: -90,
      longitude: 0
    }
  },
  {
    uuid: '60f52f28-84e5-499d-a03d-6eb3c48a1e15',
    title: 'USA',
    subTitle: 'by Foot',
    image: 'trek-usa',
    color: '#1fdb74',
    textColor: '#000',
    gps: {
      latitude: 37.0902,
      longitude: -95.7129
    }
  },
  {
    uuid: '3d18b2cf-3807-4327-8cfc-0210fb33c9ee',
    title: 'Canaries',
    subTitle: 'by Foot',
    image: 'trek-canaries',
    color: '#1fdbbc',
    textColor: '#000',
    gps: {
      latitude: 28.2916,
      longitude: -16.6291
    }
  },
  {
    uuid: '8f7f99b4-080e-4c77-ae3a-dc7f5b1a7846',
    title: 'Vietnam',
    subTitle: 'by Foot',
    image: 'trek-vietnam',
    color: '#99db1f',
    textColor: '#000',
    gps: {
      latitude: 14.0583,
      longitude: 108.2772
    }
  },
  {
    uuid: '7e2f2ae4-b2c8-4478-94e3-7cb1bc78cc26',
    title: 'Mongolia',
    subTitle: 'by Bike',
    image: 'vtt-mongolia',
    color: '#1FDB83',
    textColor: '#000',
    gps: {
      latitude: 46.8625,
      longitude: 103.8467
    }
  },
  {
    uuid: '90236b3a-7d24-476e-83cf-bf4b1ff40d3a',
    title: 'New Zealand',
    subTitle: 'by Bike',
    image: 'vtt-new-zealand',
    color: '#db1f1f',
    textColor: '#fff',
    gps: {
      latitude: -40.9006,
      longitude: 174.886
    }
  },
  {
    uuid: '28273b58-e4f7-424a-b05b-bdfc0b95ff43',
    title: 'Scotland',
    subTitle: 'by Bike',
    image: 'vtt-scotland',
    color: '#4bdb1f',
    textColor: '#000',
    gps: {
      latitude: 56.4907,
      longitude: -4.2026
    }
  },
  {
    uuid: '5e19c139-b7bc-4d3b-8c25-c135bf715e84',
    title: 'Cambodia',
    subTitle: 'by Bike',
    image: 'vtt-cambodia',
    color: '#dbc81f',
    textColor: '#000',
    gps: {
      latitude: 12.5657,
      longitude: 104.991
    }
  },
  {
    uuid: 'b52034a3-aeed-44d5-bc16-003fcb725a9c',
    title: 'Namibia',
    subTitle: 'by Road',
    image: 'road-namibia',
    color: '#DB1F4E',
    textColor: '#fff',
    gps: {
      latitude: -22.9576,
      longitude: 18.4904
    }
  },
  {
    uuid: '448c7f0a-9b4e-4728-86a9-8fe59d0cf82b',
    title: 'Peru',
    subTitle: 'by Road',
    image: 'road-peru',
    color: '#DB1F4E',
    textColor: '#fff',
    gps: {
      latitude: -9.19,
      longitude: -75.0152
    }
  },
  {
    uuid: '4a7741b0-b01a-45ed-b8d0-07a42d3f09ff',
    title: 'Iceland',
    subTitle: 'by Road',
    image: 'road-iceland',
    color: '#1fc5db',
    textColor: '#000',
    gps: {
      latitude: 64.9631,
      longitude: -19.0208
    }
  },
  {
    uuid: '731f2025-6c72-47d2-bbb0-f8e31d4eeb23',
    title: 'Kenya',
    subTitle: 'by Road',
    image: 'road-kenya',
    color: '#db4b1f',
    textColor: '#000',
    gps: {
      latitude: -0.0236,
      longitude: 37.9062
    }
  }
]

export const travelsOfTheDayDatas = [
  travelDatas[0],
  travelDatas[4],
  travelDatas[8],
  travelDatas[12]
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
