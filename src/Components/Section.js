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
import PressableImage from './PressableImage';
const Section = () => {
  const [imageList, setImageList] = useState([]);
  useEffect(() => {
    fetch('https://islamic-wallpaper.herokuapp.com/getwalls')
      .then(data => data.json())
      .then(data => {
        setImageList(data);
      });
  }, []);

  function renderItems() {
    return (
      <FlatList
        horizontal
        pl={1}
        data={
          imageList.length > 0 ? imageList.slice(1, 10) : [null, null, null]
        }
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          if (item == null)
            return (
              <Box
                borderRadius={20}
                style={{width: 170, height: 260}}
                mx={1}
                bg={'backgroundDark.400'}
              />
            );
          return <PressableImage source={item} width={170} />;
        }}
        keyExtractor={(item, index) => Math.random().toString()}
      />
    );
  }
  return (
    <Box p={1}>
      <Button
        _pressed={{
          bg: useColorModeValue('backgroundLight.500', 'backgroundDark.400'),
        }}
        py={5}
        variant={'ghost'}
        _text={{color: 'white', fontSize: 17}}
        justifyContent={'space-between'}
        alignItems={'center'}
        endIcon={
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
        }>
        Hot of the week!
      </Button>
      {renderItems()}
    </Box>
  );
};

export default Section;
