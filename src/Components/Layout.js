import React from 'react';
import {
  Container,
  Button,
  useColorModeValue,
  Box,
  ScrollView,
} from 'native-base';

const Layout = ({children, scroll, stickyComponentIndex, ...props}) => {
  if (scroll) {
    return (
      <ScrollView
        flex={1}
        nestedScrollEnabled={true}
        stickyHeaderIndices={[stickyComponentIndex]}
        showsVerticalScrollIndicator={false}
        bg={useColorModeValue('backgroundLight.600', 'backgroundDark.500')}>
        {children}
      </ScrollView>
    );
  }
  return (
    <Box
      flex={1}
      {...props}
      bg={useColorModeValue('backgroundLight.600', 'backgroundDark.500')}>
      {children}
    </Box>
  );
};

export default Layout;
