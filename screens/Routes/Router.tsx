import { AuthScreen } from 'screens/index'
import TabRouter from 'screens/Routes/TabRouter'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from 'utils/themes'

const Stack = createStackNavigator()

export default class Router extends React.Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.ui.blue,
          },
          headerTintColor: theme.colors.system.white,
        }}
      >
        <Stack.Screen
          options={{ title: 'Авторизация' }}
          name="Auth"
          component={AuthScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Tab"
          component={TabRouter}
        />
      </Stack.Navigator>
    )
  }
}
