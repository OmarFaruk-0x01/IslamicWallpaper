import {
  Avatar,
  Box,
  Divider,
  ScrollView,
  Text,
  Heading,
  HStack,
  Center,
  VStack,
  useColorModeValue,
  Switch,
  Icon,
  Pressable,
  useColorMode,
  Image,
  IconButton,
  Stagger,
  Button,
  Progress,
} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, View} from 'react-native';
import Layout from '../Components/Layout';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useRoute, useNavigation} from '@react-navigation/native';
import AppHeader from '../Components/AppHeader';

const WallInfoScreen = () => {
  const {
    params: {wallSrc},
  } = useRoute();
  const nav = useNavigation();
  if (!wallSrc) {
    nav.goBack();
  }
  return (
    <Layout>
      <AppHeader withBackAction title={'Wall Info'} />
      <HStack my={1} p={2}>
        <Box w={100} h={100}>
          <Image
            source={{uri: wallSrc}}
            alt={"Wallpaper can't load"}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: 10,
            }}
          />
        </Box>
        <VStack ml={2}>
          <Text fontSize={25}>Omar Faruk</Text>
          <Text fontSize={13}>@omar_faruk</Text>
        </VStack>
      </HStack>
      <Divider />
      <VStack p={3}>
        <HStack my={1} justifyContent={'space-between'}>
          <Text color={useColorModeValue('backgroundLight.200', 'white')}>
            Design Text
          </Text>
          <Text>Quote</Text>
        </HStack>
        <HStack my={1} justifyContent={'space-between'}>
          <Text color={useColorModeValue('backgroundLight.200', 'white')}>
            Book/Person
          </Text>
          <Text>Abrar Fahad</Text>
        </HStack>
        <HStack my={1} justifyContent={'space-between'}>
          <Text color={useColorModeValue('backgroundLight.200', 'white')}>
            Cetagory
          </Text>
          <Text>Suhada</Text>
        </HStack>
        <VStack my={2}>
          <Text
            mb={3}
            color={useColorModeValue('backgroundLight.200', 'white')}>
            Tags
          </Text>
          <HStack flexWrap={'wrap'}>
            <Text px={3} m={0.5} borderRadius={4} bg={'primary.500'} py={1}>
              Jihad
            </Text>
            <Text px={3} m={0.5} borderRadius={4} bg={'primary.500'} py={1}>
              Death
            </Text>
            <Text px={3} m={0.5} borderRadius={4} bg={'primary.500'} py={1}>
              Suhada
            </Text>
            <Text px={3} m={0.5} borderRadius={4} bg={'primary.500'} py={1}>
              Killed
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </Layout>
  );
};

export default WallInfoScreen;
