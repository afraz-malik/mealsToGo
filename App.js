import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import 'react-native-gesture-handler'
import AppNavigator from './src/infrastructure/navigation/app.navigator'
import { theme } from './src/infrastructure/theme'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald'
import { ThemeProvider } from 'styled-components/native'
import RestaurantsContextProvider from './src/services/restaurants/restaurants.context'
import LocationContextProvider from './src/services/locations/location.context'

export default function App() {
  let [latoLoaded] = useLato({
    Lato_400Regular,
  })
  let [oswaldLoded] = useOswald({
    Oswald_400Regular,
  })
  if (!latoLoaded | !oswaldLoded) {
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <AppNavigator />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  )
}
