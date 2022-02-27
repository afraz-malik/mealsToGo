import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Restaurants } from '../../features/restaurants/screens/restaurants.screens'
const RestaurantStack = createStackNavigator()

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none">
      <RestaurantStack.Screen name="Restaurants" component={Restaurants} />
    </RestaurantStack.Navigator>
  )
}
