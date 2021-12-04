import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {useTheme, ThemeProvider} from 'styled-components';
import {Login} from './src/screens/auth/Login';

import theme from './src/styles/theme';

const ApplicationContent = () => {
  const {colors: colorsOfTheme} = useTheme();

  return (
    <>
      <SafeAreaView
        style={{flex: 0, backgroundColor: colorsOfTheme.background}}
      />
      <SafeAreaView
        style={{
          flex: 1,
          paddingVertical: 16,
          backgroundColor: colorsOfTheme.background,
        }}>
        <StatusBar barStyle="dark-content" />
        <Login />
      </SafeAreaView>
    </>
  );
};

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ApplicationContent />
      </ThemeProvider>
    </>
  );
};

export default App;
