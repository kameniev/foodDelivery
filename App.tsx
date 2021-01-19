import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'
import { theme } from 'utils/themes'
import Router from 'screens/Routes/Router'

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <StatusBar barStyle="light-content" />
          <Router />
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
