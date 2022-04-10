import React from 'react';
import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  useColorModeValue,
} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = () => {
  return (
    <Box
      py={3}
      px={4}
      bg={useColorModeValue('backgroundLight.500', 'backgroundDark.500')}>
      <Input
        flex={1}
        type="text"
        borderColor={useColorModeValue(
          'backgroundLight.400',
          'backgroundDark.400',
        )}
        fontSize={17}
        bg={useColorModeValue('backgroundLight.400', 'backgroundDark.400')}
        placeholder="Search"
      />
    </Box>
  );
};

export default SearchBar;
