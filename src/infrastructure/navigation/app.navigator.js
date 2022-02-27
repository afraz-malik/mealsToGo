import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { RestaurantNavigator } from './restaurant.navigator'
function MapsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  )
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  )
}

const screenIcons = {
  Restaurants: 'md-restaurant',
  Settings: 'md-settings',
  Maps: 'md-map',
}

const Tab = createBottomTabNavigator()
const customScreenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let icon = screenIcons[route.name]
    return <Ionicons name={icon} size={size} color={color} />
  },
  tabBarActiveTintColor: 'tomato',
  headerStatusBarHeight: 16,

  tabBarInactiveTintColor: 'gray',
})
const AppNavigator = () => {
  return (
    <NavigationContainer headerMode="none">
      <Tab.Navigator screenOptions={customScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
        <Tab.Screen name="Maps" component={MapsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
