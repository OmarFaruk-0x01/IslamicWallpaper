import {Divider, ScrollView} from 'native-base';
import React, {useState} from 'react';
import AppHeader from '../Components/AppHeader';
import ImagesShowCase from '../Components/ImagesShowCase';
import Layout from '../Components/Layout';
import SearchBar from '../Components/SearchBar';
import Section from '../Components/Section';
import TabButtons from '../Components/TabButtons';
import CetagorySection from '../Components/CetagorySection';

const DiscoverScreen = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  return (
    <Layout scroll stickyComponentIndex={1}>
      <AppHeader title={'Discover'} />
      <SearchBar />
      <CetagorySection featured sectionTitle={'Featured'} />
      <CetagorySection sectionTitle={'Browse All'} />
    </Layout>
  );
};

export default DiscoverScreen;
