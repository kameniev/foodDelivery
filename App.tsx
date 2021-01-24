import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'
import { theme } from 'utils/themes'
import Router from 'screens'

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
