import React from 'react';
import {
  Badge,
  Divider,
  HStack,
  ScrollView,
  Text,
  useColorModeValue,
  Pressable,
} from 'native-base';

const TabButton = ({btnTitle, selected, onPress}) => {
  return (
    <Pressable
      mx={1}
      px={4}
      py={1}
      _pressed={{bg: 'primary.500'}}
      borderRadius={20}
      bg={
        selected
          ? 'primary.500'
          : useColorModeValue('white.500', 'backgroundDark.300')
      }
      onPress={onPress}>
      <Badge
        bg={'transparent'}
        height={'full'}
        alignItems={'center'}
        justifyContent={'center'}>
        <Text fontFamily={'mono'} fontSize={14}>
          {btnTitle}
        </Text>
      </Badge>
    </Pressable>
  );
};

const TabButtons = ({onChange, selectedIndex}) => {
  return (
    <>
      <Divider />
      <ScrollView
        horizontal
        maxH={'16'}
        bg={useColorModeValue('backgroundLight.300', 'backgroundDark.500')}
        showsHorizontalScrollIndicator={false}>
        <HStack py={3} px={2} h={'16'}>
          <TabButton
            key={1}
            onPress={() => {
              onChange(0);
            }}
            btnTitle={'All'}
            selected
          />
          <TabButton
            key={2}
            onPress={() => {
              onChange(1);
            }}
            btnTitle={'Recommanded'}
          />
        </HStack>
      </ScrollView>
      <Divider />
    </>
  );
};

export default TabButtons;
