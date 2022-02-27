import camelize from 'camelize'
import { locations } from './location.mock'
export const locationService = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const location = locations[searchTerm]
    if (!location) reject('not found')
    resolve(location)
  })
}

export const locationTransform = (result) => {
  const formattedResponse = camelize(result)
  const { geometry = {} } = formattedResponse.results[0]
  const { lat, lng } = geometry.location
  return { lat, lng }
}
