import {Box, Divider, ScrollView} from 'native-base';
import React, {useState} from 'react';
import AppHeader from '../Components/AppHeader';
import ImagesShowCase from '../Components/ImagesShowCase';
import Layout from '../Components/Layout';
import Section from '../Components/Section';
import TabButtons from '../Components/TabButtons';

const HomeScreen = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  return (
    <Layout>
      <ImagesShowCase
        stickyBarIndexs={[0]}
        headerComponent={
          <>
            <AppHeader title={'Home'} />
            <TabButtons
              selectedIndex={selectedTabIndex}
              onChange={setSelectedTabIndex}
            />
            <Section />
            <Section />

            <Box pt={'10'} />
          </>
        }
        numColumns={2}
        scroll
      />
    </Layout>
  );
};

export default HomeScreen;
