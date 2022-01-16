import React from 'react'
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Searchbar } from 'react-native-paper'
import RestaurantCard from '../components/restaurant-card'
import styled from 'styled-components/native'

const StyledSaveAreaView = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`
const StyledSearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`
const StyledRestaurantCard = styled(View)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`
export const Restaurants = () => {
  const [searchQuery, setSearchQuery] = React.useState('')
  const onChangeSearch = (query) => setSearchQuery(query)
  return (
    <StyledSaveAreaView>
      <StyledSearchView>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </StyledSearchView>
      <StyledRestaurantCard>
        <RestaurantCard />
      </StyledRestaurantCard>
    </StyledSaveAreaView>
  )
}
