/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import image from '../constent/Images';
import { fonts } from '../constent/fonts';
import { colors } from '../constent/Colors';


const Splash = ({navigation}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('Intro');
    }, 3000);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={image.SPLASH_LOGO}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>HIGH ON MUSIC</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.BackgroundColor,
  },
  logo: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 32,
    fontFamily: fonts.SalsaRegular,
    marginBottom: 20,
    textTransform: 'uppercase',
    color: colors.primaryColor,
  },
});

export default Splash;
