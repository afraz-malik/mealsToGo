import React, { createContext, useEffect, useState } from 'react'
import { locationService, locationTransform } from './location.services'

export const LocationContext = createContext()
const LocationContextProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(false)
  const [location, setlocation] = useState(null)
  const [keyword, setkeyword] = useState('')
  const [error, seterror] = useState(null)

  const onSearch = (searchKeyword) => {
    setisLoading(true)
    setkeyword(searchKeyword)
  }

  useEffect(() => {
    if (!keyword.length) {
      // don't do anything
      return
    }
    locationService(keyword.toLowerCase())
      .then((response) => locationTransform(response))
      .then((result) => {
        setisLoading(false)
        seterror(null)
        setlocation(result)
      })
      .catch((err) => {
        setisLoading(false)
        seterror(err)
      })
  }, [keyword])

  return (
    <LocationContext.Provider
      value={{ isLoading, keyword, location, error, search: onSearch }}
    >
      {children}
    </LocationContext.Provider>
  )
}

export default LocationContextProvider
