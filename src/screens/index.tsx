import React from 'react'
import styled from 'styled-components/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { RootTabsParamList } from 'screens/types'
import { SvgProps } from 'react-native-svg'
import {
  Home,
  HomeOutline,
  Search,
  SearchOutline,
  Market,
  MarketOutline,
  Profile,
  ProfileOutline,
} from 'uikit/Icons'
import HomeScreen from 'screens/Home'

const Tab = createBottomTabNavigator<RootTabsParamList>()

const RootRouter = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let Icon: React.FC<SvgProps> = Home

          if (route.name === 'Home') {
            Icon = focused ? HomeOutline : Home
          } else if (route.name === 'Search') {
            Icon = focused ? SearchOutline : Search
          } else if (route.name === 'Market') {
            Icon = focused ? MarketOutline : Market
          } else if (route.name === 'Profile') {
            Icon = focused ? ProfileOutline : Profile
          }
          return (
            <IconContainer>
              <Icon width={30} height={30} />
            </IconContainer>
          )
        },
      })}
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Market" component={MarketScreen} />
      <Tab.Screen name="Profile" component={SettingsRouter} /> */}
    </Tab.Navigator>
  )
}

export default RootRouter

const IconContainer = styled.View`
  width: 30px;
`
