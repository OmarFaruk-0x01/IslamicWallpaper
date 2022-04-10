import React from 'react';
import {Box, Text, useColorMode, Icon, HStack} from 'native-base';

import HomeScreen from '../Screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dimensions, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DiscoverScreen from '../Screens/Discover';
import SearchScreen from '../Screens/Search';
import ProfileScreen from '../Screens/Profile';

const BottomDrawerStack = createBottomTabNavigator();

const CoustomBottomTab = ({state, descriptors, navigation, insets}) => {
  const routes = state.routes;

  //   const {colorMode} = useColorMode();
  return (
    <HStack py={1} justifyContent={'space-around'} bg={'backgroundDark.500'}>
      <Pressable
        onPress={() => {
          navigation.navigate(routes[0].name);
        }}>
        <Box
          alignItems={'center'}
          justifyContent={'center'}
          px={3}
          py={1}
          bg={state.index == 0 ? 'backgroundDark.400' : 'backgroundDark.500'}
          borderRadius={10}>
          <Icon
            as={AntDesign}
            size={6}
            color={state.index == 0 ? 'primary.500' : 'backgroundDark.100'}
            name={descriptors[routes[0].key].options.iconName}
          />
          <Text
            color={state.index == 0 ? 'primary.500' : 'backgroundDark.100'}
            fontSize={10}>
            {routes[0].name}
          </Text>
        </Box>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate(routes[1].name);
        }}>
        <Box
          alignItems={'center'}
          justifyContent={'center'}
          px={3}
          py={1}
          borderRadius={10}
          bg={state.index == 1 ? 'backgroundDark.400' : 'backgroundDark.500'}>
          <Icon
            as={AntDesign}
            size={6}
            color={state.index == 1 ? 'primary.500' : 'backgroundDark.100'}
            name={descriptors[routes[1].key].options.iconName}
          />
          <Text
            color={state.index == 1 ? 'primary.500' : 'backgroundDark.100'}
            fontSize={10}>
            {routes[1].name}
          </Text>
        </Box>
      </Pressable>
      <Pressable
        w={60}
        style={{
          position: 'absolute',
          left: 0,
          transform: [
            {translateX: Dimensions.get('screen').width / 2 - 27},
            {translateY: -25},
          ],
        }}
        h={60}
        onPress={() => {
          navigation.navigate('UploadScreen');
        }}>
        <Box
          alignItems={'center'}
          bg={'primary.500'}
          w={60}
          h={60}
          borderRadius={40}
          justifyContent={'center'}>
          <Icon as={AntDesign} size={6} color={'white'} name={'upload'} />
        </Box>
      </Pressable>
      <Box
        alignItems={'center'}
        borderRadius={40}
        justifyContent={'center'}></Box>
      <Pressable
        onPress={() => {
          navigation.navigate(routes[2].name);
        }}>
        <Box
          alignItems={'center'}
          justifyContent={'center'}
          px={3}
          py={1}
          borderRadius={10}
          bg={state.index == 2 ? 'backgroundDark.400' : 'backgroundDark.500'}>
          <Icon
            as={AntDesign}
            size={6}
            color={state.index == 2 ? 'primary.500' : 'backgroundDark.100'}
            name={descriptors[routes[2].key].options.iconName}
          />
          <Text
            color={state.index == 2 ? 'primary.500' : 'backgroundDark.100'}
            fontSize={10}>
            {routes[2].name}
          </Text>
        </Box>
      </Pressable>
      <Pressable
        onPress={() => {
          navigation.navigate(routes[3].name);
        }}>
        <Box
          alignItems={'center'}
          justifyContent={'center'}
          px={3}
          py={1}
          borderRadius={10}
          bg={state.index == 3 ? 'backgroundDark.400' : 'backgroundDark.500'}>
          <Icon
            as={AntDesign}
            size={6}
            color={state.index == 3 ? 'primary.500' : 'backgroundDark.100'}
            name={descriptors[routes[3].key].options.iconName}
          />
          <Text
            color={state.index == 3 ? 'primary.500' : 'backgroundDark.100'}
            fontSize={10}>
            {routes[3].name}
          </Text>
        </Box>
      </Pressable>
    </HStack>
  );
};

const BottomTabView = () => {
  return (
    <BottomDrawerStack.Navigator
      tabBar={CoustomBottomTab}
      screenOptions={{headerShown: false}}>
      <BottomDrawerStack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{iconName: 'home'}}
      />
      <BottomDrawerStack.Screen
        name={'Discover'}
        component={DiscoverScreen}
        options={{iconName: 'earth'}}
      />
      <BottomDrawerStack.Screen
        name={'Search'}
        component={SearchScreen}
        options={{iconName: 'search1'}}
      />
      <BottomDrawerStack.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{iconName: 'user'}}
      />
    </BottomDrawerStack.Navigator>
  );
};

export default BottomTabView;
