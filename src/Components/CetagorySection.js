import React, {useEffect, useState} from 'react';
import {
  Box,
  Button,
  Card,
  CardItem,
  FlatList,
  HStack,
  Image,
  Text,
  Icon,
  useColorModeValue,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Dimensions} from 'react-native';
const CetagorySection = ({featured, sectionTitle}) => {
  const [CetagoryList, setCetagoryList] = useState([
    'Iman',
    'Tawhid',
    'Sura Tawba',
    'Jannah',
    'Jahannam',
    'Resalat',
    'Dazzal',
  ]);

  function renderItems() {
    const Screen = Dimensions.get('screen');
    const CardWidth = Screen.width / 2 - 20;
    return (
      <Box
        flexDirection={'row'}
        justifyContent={'space-around'}
        flexWrap={'wrap'}>
        {CetagoryList.slice(0, featured ? 4 : CetagoryList.length).map(item => {
          return (
            <Box
              my={2}
              key={Math.random().toString()}
              style={{width: CardWidth, height: 120}}
              borderRadius={10}
              overflow={'hidden'}
              alignItems={'center'}
              justifyContent={'center'}
              _text={{fontSize: 20}}
              bg={useColorModeValue(
                'backgroundLight.400',
                'backgroundDark.400',
              )}>
              <Text zIndex={2} fontSize={20}>
                {item}
              </Text>
              <Box
                bg={'#000000aa'}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              />
              <Image
                alt=""
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                zIndex={-1}
                source={{
                  uri: `https://islamic-wallpaper.herokuapp.com/getwall/wall${(
                    Math.random() * 60
                  ).toFixed(0)}.jpg`,
                }}
              />
            </Box>
          );
        })}
      </Box>
    );
  }
  return (
    <Box p={1}>
      <Button
        disabled={!!featured}
        _pressed={{
          bg: useColorModeValue('backgroundLight.500', 'backgroundDark.400'),
        }}
        py={5}
        variant={'ghost'}
        _text={{color: 'white', fontSize: 20}}
        justifyContent={'space-between'}
        alignItems={'center'}
        endIcon={
          !featured && (
            <>
              <Box flex={1} />
              <Icon
                name="right"
                as={AntDesign}
                size={6}
                color={useColorModeValue(
                  'backgroundLight.300',
                  'backgroundDark.300',
                )}
              />
            </>
          )
        }>
        {sectionTitle}
      </Button>
      {renderItems()}
    </Box>
  );
};

export default CetagorySection;
