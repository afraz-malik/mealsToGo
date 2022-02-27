import { mockImages, mocks } from './mock'
import camelize from 'camelize'
export const restaurantsService = (location) => {
  return new Promise((res, rej) => {
    let mock = mocks[location]
    if (!mock) rej('Not Found')
    else res(mock)
  })
}

export const transformReponse = ({ results = [] }) => {
  const modifiedResult = results.map((result) => {
    result.photos = result.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * mockImages.length)]
    })
    return {
      ...result,
      address: result.vicinity,
      isOpen: result.opening_hours && result.opening_hours.open_now,
      isClosedTemporarily: result.business_stats === 'CLOSED TEMPORARILY',
    }
  })
  return camelize(modifiedResult)
}
