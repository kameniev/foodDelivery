import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components';
import {theme} from 'utils/themes';
import Router from 'screens/Routes/Router';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <StatusBar barStyle="light-content"></StatusBar>
          <Router />
        </ThemeProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
