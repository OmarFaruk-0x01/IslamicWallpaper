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
  StatusBar,
  Select,
  useToast,
} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, View} from 'react-native';
import Layout from '../Components/Layout';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useRoute, useNavigation} from '@react-navigation/native';
import RNMWall, {TYPE} from 'react-native-manage-wallpaper';
import {isGranted} from '../Constent/GetPermission';
import RNFS from 'react-native-fs';
const WallButton = ({src}) => {
  const Toast = useToast();
  let fileName = src.split('/');
  fileName = fileName[fileName.length - 1];

  const [downStatus, setDownStatus] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const handleDownload = async () => {
    setDownStatus(1);
    if (await isGranted()) {
      console.log('Downloading...');
      Toast.closeAll();
      RNFS.downloadFile({
        fromUrl: src,
        toFile: `file:///${RNFS.ExternalStorageDirectoryPath}/Documents/${fileName}`,
        begin: ({contentLength}) => {
          console.log('Start', contentLength);
        },
        progress: ({contentLength, bytesWritten}) => {
          console.log(((bytesWritten * 100) / contentLength).toFixed(2));
          setProgressValue(((bytesWritten * 100) / contentLength).toFixed(0));
        },
        cacheable: true,
        resumable: false,
        connectionTimeout: 5000,
      })
        .promise.then(data => {
          console.log('Complete', data);
          setDownStatus(2);
          Toast.show({
            title: 'Downloaded',
            placement: 'bottom',
            status: 'success',
            isClosable: false,
            bgColor: 'primary.300',
          });
        })
        .catch(err => {
          console.log('Failed', err);
          Toast.show({
            title: err.message,
            placement: 'bottom',
            status: 'warning',
            isClosable: false,
          });
          setDownStatus(0);
          setProgressValue(0);
        });
    }
  };

  switch (downStatus) {
    case 0:
      return (
        <Button onPress={handleDownload} flex={1}>
          Download
        </Button>
      );
    case 1:
      return (
        <VStack flex={1}>
          <Text textAlign={'center'} mb={2}>
            Downloading.....
          </Text>
          <Progress value={progressValue} />
        </VStack>
      );
    case 2:
      return (
        <Box
          height={30}
          flex={1}
          justifyContent={'center'}
          backgroundColor={'primary.500'}>
          <Select
            zIndex={1}
            selectedValue=""
            dropdownIcon={<></>}
            borderWidth={0}
            onValueChange={val => {
              RNMWall.setWallpaper(
                {
                  uri: `file://${RNFS.ExternalStorageDirectoryPath}/Documents/${fileName}`,
                },
                res => {
                  console.log('Wallpaper Responce: ', res);
                },
                val,
                parseInt(Dimensions.get('screen').width),
                parseInt(Dimensions.get('screen').height),
              );
            }}>
            <Select.Item label="Home Screen" value={TYPE.HOME} />
            <Select.Item label="Lock Screen" value={TYPE.LOCK} />
            <Select.Item label="Both Screen" value={TYPE.BOTH} />
          </Select>
          <Text
            zIndex={0}
            position={'absolute'}
            textAlign={'center'}
            width={'100%'}
            fontSize={14}>
            Set Wallpaper
          </Text>
        </Box>
      );
  }
};

const WallScreen = () => {
  const {width: ScreenWidth, height: ScreenHeight} = Dimensions.get('window');
  const anim_height = useRef(new Animated.Value(ScreenHeight / 2)).current;
  const anim_width = useRef(new Animated.Value(ScreenWidth / 1.6)).current;
  const {
    params: {wallSrc},
  } = useRoute();
  const [isFullScreen, setIsFullScreen] = useState(false);

  const AnimateImage = () => {
    if (!isFullScreen) {
      Animated.timing(anim_width, {
        toValue: ScreenWidth,
        duration: 200,
        useNativeDriver: false,
      }).start();
      Animated.timing(anim_height, {
        toValue: ScreenHeight,
        duration: 200,
        useNativeDriver: false,
      }).start();
      setIsFullScreen(true);
    } else {
      Animated.timing(anim_width, {
        toValue: ScreenWidth / 1.6,
        duration: 200,
        useNativeDriver: false,
      }).start();
      Animated.timing(anim_height, {
        toValue: ScreenHeight / 2,
        duration: 200,
        useNativeDriver: false,
      }).start();
      setIsFullScreen(false);
    }
  };

  const nav = useNavigation();
  if (!wallSrc) {
    nav.goBack();
  }
  return (
    <Layout>
      <>
        {/* <StatusBar animated={false} hidden={isFullScreen} /> */}
        <Image
          source={{uri: wallSrc}}
          alt={"Wallpaper can't load"}
          blurRadius={5}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
        <Box
          bg={'#00000090'}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
        <IconButton
          onPress={() => {
            nav.goBack();
          }}
          icon={<Icon size={5} as={AntDesign} name="left" />}
          position={'absolute'}
          top={4}
          zIndex={isFullScreen ? 1 : 100}
          left={2}
        />
        <IconButton
          onPress={() => {
            nav.navigate('WallInfoScreen', {wallSrc: wallSrc});
          }}
          icon={<Icon size={5} as={AntDesign} name="infocirlce" />}
          position={'absolute'}
          top={4}
          zIndex={isFullScreen ? 1 : 100}
          right={2}
        />
      </>
      <Animated.View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 60,
        }}>
        <Avatar />
        <VStack ml={2}>
          <Text fontSize={17}>Omar Faruk</Text>
          <Text fontSize={12}>@omar_faruk</Text>
        </VStack>
      </Animated.View>

      <Box
        alignItems={'center'}
        justifyContent={'center'}
        position={'absolute'}
        w={'100%'}
        h={'100%'}
        zIndex={!isFullScreen ? 1 : 100}>
        <Animated.View
          style={{
            width: anim_width,
            height: anim_height,
            position: isFullScreen ? 'absolute' : 'relative',
          }}>
          <Image
            source={{uri: wallSrc}}
            alt={"Wallpaper can't load"}
            w={{base: '100%'}}
            h={{base: '100%'}}
            borderRadius={10}
            resizeMode="cover"
            zIndex={100}
          />
          <IconButton
            onPress={() => {
              AnimateImage();
            }}
            icon={
              <Icon
                size={5}
                as={Feather}
                name={!isFullScreen ? 'maximize' : 'minimize'}
              />
            }
            position={'absolute'}
            bottom={2}
            right={2}
            zIndex={101}
          />
        </Animated.View>
      </Box>
      <HStack flex={1} zIndex={0}></HStack>
      <VStack zIndex={isFullScreen ? 1 : 102} space="md">
        <HStack p={2} alignItems={'center'}>
          <IconButton
            mr={2}
            onPress={() => {}}
            icon={<Icon as={MaterialCommunityIcons} name="heart-plus" />}
          />
          <WallButton src={wallSrc} />
          <IconButton
            ml={2}
            onPress={() => {}}
            icon={<Icon as={MaterialCommunityIcons} name="share-all-outline" />}
          />
        </HStack>
      </VStack>
    </Layout>
  );
};

export default WallScreen;
