import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  SearchScreen,
  HomeScreen,
  MarketScreen,
  ProfileScreen,
} from 'screens/index'
import Icon from 'uikit/Icon'
import styled from 'styled-components/native'
import SettingsRouter from 'screens/Routes/SettingsRouter'

const Tab = createBottomTabNavigator()

export default function TabRouter() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused ? 'HomeOutline' : 'Home'
          } else if (route.name === 'Search') {
            iconName = focused ? 'SearchOutline' : 'Search'
          } else if (route.name === 'Market') {
            iconName = focused ? 'MarketOutline' : 'Market'
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ProfileOutline' : 'Profile'
          }
          return (
            <IconWrapper>
              <Icon name={iconName} />
            </IconWrapper>
          )
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Market" component={MarketScreen} />
      <Tab.Screen name="Profile" component={SettingsRouter} />
    </Tab.Navigator>
  )
}

const IconWrapper = styled.View`
  width: 30px;
`
