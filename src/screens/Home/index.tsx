import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useTheme } from 'styled-components'
import MainScreen from 'screens/Home/Main'
import ProfileScreen from 'screens/Home/Profile'

const Stack = createStackNavigator()

const HomeRouter = () => {
  const theme = useTheme()

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.ui.blue,
        },
        headerTintColor: theme.colors.system.white,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Main"
        options={{ title: 'Main' }}
        component={MainScreen}
      />
      <Stack.Screen
        name="Profile"
        options={{ title: 'Профиль' }}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  )
}

export default HomeRouter
