import React from 'react';
import {
  Box,
  Divider,
  Heading,
  Icon,
  useColorModeValue,
  IconButton,
} from 'native-base';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const AppHeader = ({title, withBackAction}) => {
  if (withBackAction) {
    const nav = useNavigation();
    return (
      <>
        <Box
          py={3}
          px={2}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'flex-start'}>
          <IconButton
            onPress={() => {
              nav.goBack();
            }}
            icon={<Icon as={AntDesign} size={5} name="left" />}
          />
          <Heading fontSize={20} ml={2}>
            {title}
          </Heading>
        </Box>
        <Divider />
      </>
    );
  }
  return (
    <Box py={5} px={2}>
      <Heading fontSize={30}>{title}</Heading>
    </Box>
  );
};

export default AppHeader;
