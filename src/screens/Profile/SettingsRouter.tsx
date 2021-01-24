import {
  SettingSettings,
  SettingProfile,
  SettingInfo,
  SettingAddresses,
  AddAddress,
  AboutUs,
  ProfileScreen,
} from 'screens/index'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from 'utils/themes'

const Stack = createStackNavigator()

export default class Router extends React.Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.ui.blue,
          },
          headerTintColor: theme.colors.system.white,
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          options={{ title: 'Профиль' }}
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{ title: 'Профиль' }}
          name="SettingProfile"
          component={SettingProfile}
        />
        <Stack.Screen
          options={{ title: 'Настройки' }}
          name="SettingSettings"
          component={SettingSettings}
        />
        <Stack.Screen
          options={{ title: 'Справка' }}
          name="SettingInfo"
          component={SettingInfo}
        />
        <Stack.Screen
          options={{ title: 'Список адресов доставки' }}
          name="SettingAddresses"
          component={SettingAddresses}
        />
        <Stack.Screen
          options={{ title: 'Добавление адреса' }}
          name="AddAddress"
          component={AddAddress}
        />
        <Stack.Screen
          options={{ title: 'О нас' }}
          name="AboutUs"
          component={AboutUs}
        />
      </Stack.Navigator>
    )
  }
}
