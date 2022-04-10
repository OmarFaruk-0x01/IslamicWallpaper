import React, {useState, useEffect} from 'react';
import {
  Box,
  Text,
  Button,
  useColorMode,
  Icon,
  useColorModeValue,
} from 'native-base';
import Layout from './src/Components/Layout';
import {NavigationContainer, Link} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomTabView from './src/Navigations/BottomTabViews';
import UploadScreen from './src/Screens/Upload';
import WallScreen from './src/Screens/Wall';
import WallInfoScreen from './src/Screens/WallInfo';
import LogInScreen from './src/Screens/Login';
import SignUpScreen from './src/Screens/SignUp';
const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['dwp://app'],
  config: {
    screens: {
      Main: {
        path: 'main',
      },
    },
  },
};

const AuthStackScreens = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'SignUpScreen'} component={SignUpScreen} />
      <Stack.Screen name={'LoginScreen'} component={LogInScreen} />
    </Stack.Navigator>
  );
};

const MainStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Main'} component={BottomTabView} />
      <Stack.Screen name={'UploadScreen'} component={UploadScreen} />
      <Stack.Screen name={'WallScreen'} component={WallScreen} />
      <Stack.Screen name={'WallInfoScreen'} component={WallInfoScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  const [auth, setAuth] = useState(null);

  function renderScreen() {
    return <MainStackScreen />;
    if (auth) {
      return <MainStackScreen />;
    } else {
      return <AuthStackScreens />;
    }
  }

  return (
    <NavigationContainer linking={linking}>
      {renderScreen()}
    </NavigationContainer>
  );
};

export default App;
