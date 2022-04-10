import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {Box, FlatList, Image, Pressable} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import PressableImage from './PressableImage';

const ImagesShowCase = ({data, scroll, numColumns, headerComponent}) => {
  const [imageList, setImageList] = useState([]);
  const {width} = Dimensions.get('screen');
  const [refreshing, setRefreshing] = useState(false);
  const nav = useNavigation();
  useEffect(() => {
    GetImages();
  }, []);

  const GetImages = () => {
    fetch('https://islamic-wallpaper.herokuapp.com/getwalls')
      .then(data => data.json())
      .then(data => {
        setImageList(data);
      });
  };

  function renderItemsWithScroll() {
    const ImageWidth = (width - 10 * 3) / numColumns;
    return (
      <FlatList
        nestedScrollEnabled
        numColumns={2}
        stickyHeaderIndices={[0][1]}
        data={
          imageList.length > 0 ? imageList.slice(1, 10) : [null, null, null]
        }
        refreshing={refreshing}
        onRefresh={() => {
          GetImages();
        }}
        ListHeaderComponent={headerComponent}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
        renderItem={({item, index}) => {
          if (item == null)
            return (
              <Box
                key={Math.random().toString()}
                borderRadius={20}
                style={{width: ImageWidth, height: 300}}
                bg={'backgroundDark.400'}
              />
            );
          return (
            <PressableImage
              key={Math.random().toString()}
              width={ImageWidth}
              source={item}
            />
          );
        }}
        keyExtractor={(item, index) => {
          return Math.random().toString();
        }}
      />
    );
  }

  function renderItems() {
    const ImageWidth = (width - 10 * 3) / numColumns;
    return imageList.map((item, index) => {
      return (
        <Image
          key={Math.random().toString()}
          style={{width: ImageWidth, height: 300}}
          borderRadius={20}
          mx={1}
          source={{uri: item}}
          alt={item}
        />
      );
    });
  }
  if (!scroll) {
    return <Box>{renderItems()}</Box>;
  }

  return <Box p={1}>{renderItemsWithScroll()}</Box>;
};

export default ImagesShowCase;
