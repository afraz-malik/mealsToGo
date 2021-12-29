import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Searchbar } from 'react-native-paper'
import RestaurantsInfo from '../components/restaurants-info'
export const Restaurants = () => {
  const [searchQuery, setSearchQuery] = React.useState('')
  const onChangeSearch = (query) => setSearchQuery(query)
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <RestaurantsInfo />
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  search: {
    padding: 10,
  },
})
