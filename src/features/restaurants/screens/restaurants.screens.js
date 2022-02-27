import React, { useContext } from 'react'
import { FlatList, View, SafeAreaView } from 'react-native'
import RestaurantCard from '../components/restaurant-card'
import styled from 'styled-components/native'
import { Spacer } from '../../../components/spacer/Spacer'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import { ActivityIndicator, Colors } from 'react-native-paper'
import { SearchBar } from '../../../components/searchBar'

const StyledSaveAreaView = styled(SafeAreaView)``
// margin-top: ${StatusBar.currentHeight}px;
// flex: 1;

const StyledFlatList = styled(FlatList).attrs({
  contentContainerStyle: { padding: 16 },
})``
export const Restaurants = () => {
  const { restaurants, errors, isLoading } = useContext(RestaurantsContext)
  return (
    <>
      <SearchBar />
      <StyledFlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer key={item.name} position={'bottom'} size="large">
              <RestaurantCard restaurant={item} />
            </Spacer>
          )
        }}
        keyExtractor={(item) => item.name}
      />
      {isLoading ? (
        <View style={{ position: 'absolute', top: '50%', left: '50%' }}>
          <ActivityIndicator
            animating={true}
            color={Colors.red800}
            size={50}
            style={{ marginLeft: -25 }}
          />
        </View>
      ) : null}
    </>
  )
}
