import React from 'react'
import { Restaurants } from './src/features/restaurants/screens/restaurants.screens'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure/theme'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald'
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
        <Restaurants />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  )
}
