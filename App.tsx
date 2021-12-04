import React from 'react';
import {SafeAreaView, StatusBar, Platform} from 'react-native';

import {useTheme, ThemeProvider} from 'styled-components';
import {Routes} from './src/routes';

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
          paddingVertical: Platform.OS === 'ios' ? 16 : 0,
          backgroundColor: colorsOfTheme.background,
        }}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colorsOfTheme.background}
        />
        <Routes />
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
