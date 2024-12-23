/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import image from '../constent/Images';
import Artist from './Home/Artist';
import Banner from './Home/Banner';
import Header from './Home/Header';
import PlayList from './Home/PlayList';

const Home = () => {
  return (
    <View style={styles.container}>
     <Header img={image.SEARCH_ICON}/>
     <Banner />
     <Artist />
     <PlayList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#1C1B1B', flex: 1},
});
export default Home;
