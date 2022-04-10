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
} from 'native-base';
import React, {useEffect, useState} from 'react';
import AppHeader from '../Components/AppHeader';
import ImagesShowCase from '../Components/ImagesShowCase';
import Layout from '../Components/Layout';
import Section from '../Components/Section';
import TabButtons from '../Components/TabButtons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SwitchBox = ({title, value, onChange}) => {
  return (
    <Pressable
      disabled
      _pressed={{
        bg: useColorModeValue('backgroundLight.300', 'backgroundDark.300'),
      }}
      onPress={onChange}
      my={2}
      borderRadius={3}
      bg={useColorModeValue('backgroundLight.400', 'backgroundDark.400')}>
      <HStack p={3} alignItems={'center'} justifyContent={'space-between'}>
        <Text>{title}</Text>
        <Switch
          disabled={true}
          isChecked={value}
          // onChange={onChange}
        />
      </HStack>
    </Pressable>
  );
};
const SettingBox = ({title, onPress}) => {
  return (
    <Pressable
      my={2}
      borderRadius={3}
      bg={useColorModeValue('backgroundLight.400', 'backgroundDark.400')}
      _pressed={{
        bg: useColorModeValue('backgroundLight.300', 'backgroundDark.300'),
      }}>
      <HStack p={3} alignItems={'center'} justifyContent={'space-between'}>
        <Text>{title}</Text>
        <Icon
          as={AntDesign}
          name="right"
          size={5}
          color={useColorModeValue('backgroundLight.400', 'backgroundDark.200')}
        />
      </HStack>
    </Pressable>
  );
};

const ProfileInfo = () => {
  return (
    <Center>
      <Avatar
        bg={useColorModeValue('backgroundLight.200', 'backgroundDark.200')}
        alignSelf="center"
        mb={4}
        _text={{fontSize: 20}}
        size="xl">
        Guest
      </Avatar>
      <Box>
        <Heading>Omar Faruk</Heading>
      </Box>
    </Center>
  );
};

const ProfileScreen = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [isChecked, setIsChecked] = useState(true);
  const {toggleColorMode} = useColorMode();

  return (
    <Layout>
      <VStack p={'6'}>
        <ProfileInfo />
      </VStack>
      <VStack p={2}>
        <SwitchBox
          title={'Dark Mode'}
          onChange={() => {
            setIsChecked(!isChecked);
            toggleColorMode();
          }}
          value={isChecked}
        />
        <SettingBox title={'Account Details'} />
        <SettingBox title={'Saved'} />
        <SettingBox title={'Pending'} />
        <SettingBox title={'Uploads'} />
        <SettingBox title={'Log Out'} />
      </VStack>
    </Layout>
  );
};

export default ProfileScreen;
