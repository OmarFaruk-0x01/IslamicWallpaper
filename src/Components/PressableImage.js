import {Image, Pressable} from 'native-base';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

const PressableImage = ({source, width}) => {
  console.log(source);
  const nav = useNavigation();
  return (
    <Pressable onPress={() => nav.navigate('WallScreen', {wallSrc: source})}>
      <Image
        style={{
          width: width,
          height: 300,
          marginHorizontal: 5,
          marginVertical: 4,
        }}
        borderRadius={20}
        source={{uri: source}}
        alt={source}
        onError={e => {
          Alert.alert('Error', e.type + e);
        }}
      />
    </Pressable>
  );
};

export default PressableImage;
