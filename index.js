/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {extendTheme, NativeBaseProvider} from 'native-base';
// import AsyncStorage from '@react-native-async-storage/async-storage';
const newColorTheme = {
  iconColorsDark: {
    500: '#9E9EA0',
  },
  primary: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },

  backgroundDark: {
    900: '#0c0c0c',
    800: '#0c0c0c',
    700: '#0c0c0c',
    600: '#0c0c0c',
    500: '#1c1c1c',
    400: '#2c2c2c',
    300: '#3c3c3c',
    200: '#4c4c4c',
    100: '#5c5c5c',
  },
  backgroundLight: {
    900: '#fcfcfc',
    800: '#fcfcfc',
    700: '#fcfcfc',
    600: '#fcfcfc',
    500: '#ececec',
    400: '#dcdcdc',
    300: '#cccccc',
    200: '#bcbcbc',
    100: '#acacac',
  },
};
const theme = extendTheme({
  colors: newColorTheme,
  fontConfig: {
    bnS: {
      100: {
        normal: 'BNS',
        italic: 'BNS',
      },
      200: {
        normal: 'BNS',
        italic: 'BNS',
      },
      300: {
        normal: 'BNS',
        italic: 'BNS',
      },
      400: {
        normal: 'BNS',
        italic: 'BNS',
      },
      500: {
        normal: 'BNS',
        italic: 'BNS',
      },
      600: {
        normal: 'BNS',
        italic: 'BNS',
      },
      700: {
        normal: 'BNS',
        italic: 'BNS',
      },
      800: {
        normal: 'BNS',
        italic: 'BNS',
      },
      900: {
        normal: 'BNS',
        italic: 'BNS',
      },
    },
    nikos: {
      100: {
        normal: 'BN',
        italic: 'BN',
      },
      200: {
        normal: 'BN',
        italic: 'BN',
      },
      300: {
        normal: 'BN',
        italic: 'BN',
      },
      400: {
        normal: 'BN',
        italic: 'BN',
      },
      500: {
        normal: 'BN',
        italic: 'BN',
      },
      600: {
        normal: 'BN',
        italic: 'BN',
      },
      700: {
        normal: 'BN',
        italic: 'BN',
      },
      800: {
        normal: 'BN',
        italic: 'BN',
      },
      900: {
        normal: 'BN',
        italic: 'BN',
      },
    },
    popins: {
      100: {
        normal: 'PL',
        italic: 'PL',
      },
      200: {
        normal: 'PL',
        italic: 'PL',
      },
      300: {
        normal: 'PM',
        italic: 'PM',
      },
      400: {
        normal: 'PM',
        italic: 'PM',
      },
      500: {
        normal: 'PR',
        italic: 'PR',
      },
      600: {
        normal: 'PR',
        italic: 'PR',
      },
      700: {
        normal: 'PSB',
        italic: 'PSB',
      },
      800: {
        normal: 'PSB',
        italic: 'PSB',
      },
      900: {
        normal: 'PB',
        italic: 'PB',
      },
    },
    en_style: {
      100: {
        normal: 'en_Styles_reg',
        italic: 'en_Styles_3d',
      },
      200: {
        normal: 'en_Styles_reg',
        italic: 'en_Styles_3d',
      },
      300: {
        normal: 'en_Styles_reg',
        italic: 'en_Styles_3d',
      },
      400: {
        normal: 'en_Styles_reg',
        italic: 'en_Styles_3d',
      },
      500: {
        normal: 'en_Styles_reg',
        italic: 'en_Styles_3d',
      },
      600: {
        normal: 'en_Styles_reg',
        italic: 'en_Styles_3d',
      },
      700: {
        normal: 'en_Styles_reg',
        italic: 'en_Styles_3d',
      },
      800: {
        normal: 'en_Styles_reg',
        italic: 'en_Styles_3d',
      },
      900: {
        normal: 'en_Styles_reg',
        italic: 'en_Styles_3d',
      },
    },
  },
  fonts: {
    heading: 'popins',
    body: 'popins',
    mono: 'popins',
    bn: 'nikos',
    bnS: 'bnS',
    enS: 'en_style',
  },
  config: {
    useSystemColorMode: false,
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
});
const Root = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <App />
    </NativeBaseProvider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
