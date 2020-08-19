import React from 'react';

import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#e0e0e0"
        translucent
      />

      <Routes />
    </>
  );
}
