import React, {useEffect, useState} from 'react';
import {
  Box,
  Button,
  Heading,
  Icon,
  Input,
  Text,
  useColorModeValue,
  FormControl,
} from 'native-base';
import Layout from '../Components/Layout';
import {Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import useAuth from '../Constent/UseAuth';
import {supabase} from '../Constent/UseSupabase';
import {Formik} from 'formik';

const FormInput = ({value, placeholder, onChangeText, error}) => {
  return (
    <FormControl w={'100%'} isInvalid={!!error} pt={3} px={3}>
      <Input
        w={{base: '100%'}}
        bg={useColorModeValue('backgroundLight.300', 'backgroundDark.400')}
        borderRadius={5}
        placeholder={placeholder}
        borderWidth={0}
        fontSize={17}
        value={value}
        onChangeText={onChangeText}
      />
      {error ? (
        <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
      ) : null}
    </FormControl>
  );
};

const SignUpScreen = () => {
  const [loading, setLoding] = useState(false);

  const nav = useNavigation();

  const primaryColor = useColorModeValue(
    'backgroundLight.400',
    'backgroundDark.300',
  );
  function moveToLogin() {
    nav.replace('LoginScreen');
  }

  async function signUp() {
    try {
      setLoding(true);
      const {session, user, error} = await supabase.auth.signUp({
        email,
        password,
      });

      setLoding(false);
      console.log('Success: ', session, user, error);
    } catch (err) {
      console.log('Error: ', err);
      setLoding(false);
    }
  }

  return (
    <Layout style={{alignItems: 'center', justifyContent: 'center'}}>
      <Box w={'90%'} bg={primaryColor} borderRadius={30}>
        <Box alignItems={'center'} pt={19} pb={3}>
          <Heading fontFamily={'enS'} fontSize={50}>
            Dawah Paper
          </Heading>
          <Text fontSize={17}>Spread One Ayah if you can</Text>
        </Box>
        <Formik
          validateOnBlur={true}
          validateOnChange
          initialValues={{
            username: '',
            password: '',
            conf_password: '',
            email: '',
          }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'email required';
            }
            if (!values.password) {
              errors.password = 'password required';
            }
            if (!values.username) {
              errors.username = 'username required';
            }
            if (!values.conf_password) {
              errors.conf_password = 'confirm password required';
            }

            return errors;
          }}
          onSubmit={(values, {setSubmitting}) => {
            console.log(values);
            setTimeout(() => {
              setSubmitting(false);
            }, 3000);
          }}>
          {({
            errors,
            handleChange,
            handleSubmit,
            handleBlur,
            values: {username, password, email, conf_password},
            isSubmitting,
            validateOnBlur,
          }) => (
            <>
              <FormInput
                value={username}
                onChangeText={handleChange('username')}
                placeholder="username"
                error={errors.username}
              />
              <FormInput
                value={email}
                onChangeText={handleChange('email')}
                placeholder="email"
                error={errors.email}
              />
              <FormInput
                value={password}
                onChangeText={handleChange('password')}
                placeholder="password"
                error={errors.password}
              />
              <FormInput
                value={conf_password}
                onChangeText={handleChange('conf_password')}
                placeholder="confirm password"
                error={errors.conf_password}
              />
              <Box>
                <Button
                  disabled={isSubmitting}
                  rightIcon={<Icon as={AntDesign} name="login" size={22} />}
                  px={10}
                  py={2}
                  _text={{fontSize: 16}}
                  borderRadius={80}
                  isLoading={isSubmitting}
                  onPress={handleSubmit}>
                  Sign Up
                </Button>
              </Box>
            </>
          )}
        </Formik>
      </Box>
      <Box mt={5} pt={7} pb={60} alignItems={'center'}>
        <Box>
          <Text fontSize={16} textAlign={'center'}>
            SignUp{'\n'}With
          </Text>
        </Box>
        <Box
          mt={4}
          w={'100%'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'center'}>
          <Button
            px={10}
            mx={2}
            _text={{fontSize: 16}}
            borderRadius={40}
            alignItems={'center'}
            justifyContent={'center'}
            leftIcon={<Icon size={22} as={AntDesign} name={'google'} />}>
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
          onPress={moveToLogin}
          variant={'link'}
          _text={{fontSize: 23}}
          rightIcon={<Icon as={AntDesign} name={'doubleright'} />}>
          Log In
        </Button>
      </Box>
    </Layout>
  );
};

export default SignUpScreen;
