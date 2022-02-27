import React, { createContext, useContext, useEffect, useState } from 'react'
import { LocationContext } from '../locations/location.context'
import { restaurantsService, transformReponse } from './restaurants.service'

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([])
  const [errors, setErrors] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { location } = useContext(LocationContext)

  const fetchRestaurants = (location) => {
    setIsLoading(true)
    setRestaurants([])
    setTimeout(() => {
      let col = `${location.lat},${location.lng}`
      restaurantsService(col)
        .then((res) => transformReponse(res))
        .then((result) => {
          setIsLoading(false)
          setRestaurants(result)
        })
        .catch((err) => {
          setRestaurants([])
          setIsLoading(false)
        })
    }, 1000)
  }
  useEffect(() => {
    if (location) {
      fetchRestaurants(location)
    }
  }, [location])
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        errors,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  )
}

export default RestaurantsContextProvider
