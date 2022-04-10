import React from 'react';
import {
  Box,
  Button,
  Heading,
  Icon,
  Input,
  Text,
  useColorModeValue,
} from 'native-base';
import Layout from '../Components/Layout';
import {Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const LogInScreen = () => {
  const nav = useNavigation();
  const primaryColor = useColorModeValue(
    'backgroundLight.400',
    'backgroundDark.300',
  );
  function moveToSignUp() {
    nav.replace('SignUpScreen');
  }
  return (
    <Layout>
      <Box
        bg={primaryColor}
        height={Dimensions.get('screen').height - 400}
        borderBottomRadius={80}>
        <Box alignItems={'center'} py={20}>
          <Heading fontFamily={'enS'} fontSize={70}>
            Dawah Paper
          </Heading>
          <Text fontSize={20}>Spread One Ayah if you can</Text>
        </Box>
        <Input
          bg={useColorModeValue('backgroundLight.300', 'backgroundDark.400')}
          borderRadius={5}
          placeholder="Email"
          borderWidth={0}
          pt={3}
          fontSize={20}
          my={3}
          mx={3}
          px={3}
        />
        <Input
          bg={useColorModeValue('backgroundLight.300', 'backgroundDark.400')}
          borderRadius={5}
          placeholder="Password"
          borderWidth={0}
          pt={3}
          fontSize={20}
          my={3}
          mx={3}
          px={3}
        />
        <Box>
          <Button variant={'link'} bg={'transparent'} _text={{fontSize: 16}}>
            Forget Password?
          </Button>
        </Box>
        <Box
          position={'absolute'}
          bottom={-40}
          w={'100%'}
          alignItems={'center'}
          mt={100}>
          <Button
            w={170}
            rightIcon={<Icon as={AntDesign} name="login" />}
            h={100}
            _text={{fontSize: 20}}
            borderRadius={80}>
            Log In
          </Button>
        </Box>
      </Box>
      <Box mt={5} py={60} alignItems={'center'} flex={1}>
        <Box>
          <Text fontSize={16}>Login With</Text>
        </Box>
        <Box
          flex={1}
          mt={4}
          w={'100%'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'center'}>
          <Button
            w={170}
            mx={2}
            _text={{fontSize: 20}}
            borderRadius={40}
            alignItems={'center'}
            justifyContent={'center'}
            leftIcon={<Icon as={AntDesign} name={'facebook-square'} />}>
            Facebook
          </Button>
          <Button
            w={170}
            mx={2}
            _text={{fontSize: 20}}
            borderRadius={40}
            alignItems={'center'}
            justifyContent={'center'}
            leftIcon={<Icon as={AntDesign} name={'google'} />}>
            Google
          </Button>
        </Box>
      </Box>
      <Box
        alignItems={'flex-end'}
        w={'100%'}
        justifyContent={'flex-end'}
        mb={4}>
        <Button
          onPress={moveToSignUp}
          variant={'link'}
          _text={{fontSize: 23}}
          rightIcon={<Icon as={AntDesign} name={'doubleright'} />}>
          Sign Up
        </Button>
      </Box>
    </Layout>
  );
};

export default LogInScreen;
