import {
  Avatar,
  Box,
  Divider,
  ScrollView,
  Text,
  Heading,
  HStack,
  Center,
  VStack,
  useColorModeValue,
  Switch,
  Icon,
  Pressable,
  useColorMode,
  Card,
  Input,
  Image,
  IconButton,
  TextArea,
  Select,
  CheckIcon,
  Checkbox,
  Button,
  AlertDialog,
} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import AppHeader from '../Components/AppHeader';
import ImagesShowCase from '../Components/ImagesShowCase';
import Layout from '../Components/Layout';
import Section from '../Components/Section';
import TabButtons from '../Components/TabButtons';
import Entypo from 'react-native-vector-icons/Entypo';
import DocumentPicker from 'react-native-document-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {DesignTypes} from '../Constent/StaticData';

const SwitchBox = ({title, value, onChange}) => {
  return (
    <Pressable
      _pressed={{
        bg: useColorModeValue('backgroundLight.300', 'backgroundDark.300'),
      }}
      onPress={onChange}
      my={2}
      borderRadius={3}
      bg={useColorModeValue('backgroundLight.400', 'backgroundDark.400')}>
      <HStack p={3} alignItems={'center'} justifyContent={'space-between'}>
        <Text>{title}</Text>
        <Switch isChecked={value} onChange={onChange} />
      </HStack>
    </Pressable>
  );
};
const SelectBox = ({title, onChange, data}) => {
  return (
    <HStack p={3} alignItems={'center'} justifyContent={'space-between'}>
      <Text>{title}</Text>
      <Select
        minWidth="200"
        accessibilityLabel="Choose Service"
        onValueChange={value => onChange(value)}
        placeholder="Choose Type"
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size={5} />,
        }}
        mt="1">
        {data?.map(item => {
          return <Select.Item label={item.key} value={item.value} />;
        })}
      </Select>
    </HStack>
  );
};

const QuranDetailsInput = () => {
  return (
    <HStack alignItems={'center'} justifyContent={'center'}>
      <Input
        mx={1}
        flex={1}
        fontSize={14}
        alignItems={'center'}
        placeholder="Surah No."
        keyboardType="number-pad"
      />
      <Input
        mx={1}
        flex={1}
        fontSize={14}
        alignItems={'center'}
        placeholder="Surah No."
        keyboardType="number-pad"
      />
    </HStack>
  );
};

const HadithDetailsInput = () => {
  return (
    <VStack mx={2}>
      <TextArea fontSize={14} h={120} placeholder="Full Hadith (bn/en)" />
      <Input mt={2} placeholder="Ref" />
    </VStack>
  );
};
const QuoteDetailsInput = () => {
  return (
    <HStack>
      <Input
        mx={1}
        flex={1}
        fontSize={14}
        alignItems={'center'}
        placeholder="Book Name / Person"
      />
    </HStack>
  );
};

const CheckBox = ({title}) => {
  return <Checkbox isChecked>{title}</Checkbox>;
};

const UploadScreen = ({navigation}) => {
  const [singleFile, setSingleFile] = useState(null);
  const [designType, setDesignType] = useState(null);
  const [tacOpen, setTacOpen] = useState(null);

  const cancelRef = useRef();
  const onTacClose = () => {
    setTacOpen(false);
  };
  const onTacOpen = () => {
    setTacOpen(true);
  };

  const selectFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log('res : ' + JSON.stringify(res));
      setSingleFile(res[0]);
    } catch (err) {
      setSingleFile(null);
      if (DocumentPicker.isCancel(err)) {
        console.log('Canceled');
      } else {
        console.log('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const renderWallpaper = sF => {
    if (!!sF) {
      console.log('Render Image: ', sF);
      return (
        <Card
          borderRadius={10}
          alignItems={'center'}
          justifyContent={'center'}
          h={250}>
          <Image
            source={{uri: sF.uri}}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
            alt={"Wallpaper Can't Load"}
          />
          <IconButton
            onPress={() => {
              setSingleFile(null);
            }}
            style={{position: 'absolute', top: 0, right: 0}}
            borderRadius={50}
            p={0}
            icon={<Icon name="closecircle" as={AntDesign} />}
          />
        </Card>
      );
    }
    return (
      <Pressable
        onPress={selectFile}
        _pressed={{
          bg: useColorModeValue('backgroundLight.400', 'backgroundDark.400'),
        }}>
        <Card
          borderRadius={10}
          alignItems={'center'}
          justifyContent={'center'}
          h={250}>
          <Icon name="image" as={Entypo} />
          <Text mt={5}>Choose a Wallpaper</Text>
        </Card>
      </Pressable>
    );
  };

  const renderDesignAttibute = () => {
    switch (designType) {
      case 1:
        return <QuranDetailsInput />;
      case 2:
        return <HadithDetailsInput />;
      case 3:
        return <QuoteDetailsInput />;
    }
  };

  return (
    <Layout scroll>
      <AppHeader title={'Upload'} withBackAction />
      <VStack p={3}>{renderWallpaper(singleFile)}</VStack>
      <Heading fontSize={18} p={2} textTransform={'uppercase'}>
        Reference
      </Heading>
      <Divider />
      <VStack>
        <SelectBox
          title={'Design Type'}
          data={DesignTypes}
          onChange={value => {
            setDesignType(value);
          }}
        />
        <Box>{renderDesignAttibute()}</Box>
      </VStack>
      <Heading fontSize={18} p={2} textTransform={'uppercase'}>
        Information
      </Heading>
      <Divider />
      <VStack my={2}>
        <Input
          mx={1}
          flex={1}
          fontSize={14}
          alignItems={'center'}
          placeholder="Write Cetagory"
        />
        <Input
          mx={1}
          mt={2}
          flex={1}
          fontSize={14}
          alignItems={'center'}
          placeholder="Write Tags ( , separeted )"
        />
      </VStack>
      <HStack my={5} mx={2} alignItems={'center'}>
        <CheckBox title={'I agree to all term and condition'} />
        <Button onPress={onTacOpen} variant={'link'}>
          To See T&C
        </Button>
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={tacOpen}
          onClose={onTacClose}>
          <AlertDialog.Content>
            <AlertDialog.CloseButton />
            <AlertDialog.Header>Terms & Conditions</AlertDialog.Header>
            <AlertDialog.Body>
              {'\n\n\n\n\n\n\n\n\n'}
              Write Term Condition{'\n\n\n\n\n\n\n\n'}
            </AlertDialog.Body>
          </AlertDialog.Content>
        </AlertDialog>
      </HStack>
      <HStack flex={1} p={2}>
        <Button
          flex={1}
          leftIcon={<Icon as={AntDesign} size={5} name="upload" />}>
          Upload
        </Button>
      </HStack>
    </Layout>
  );
};

export default UploadScreen;
