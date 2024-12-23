/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../constent/Colors';
import image from '../constent/Images';
import {fonts} from '../constent/fonts';
import {useNavigation} from '@react-navigation/native';

const Intro = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={image.INTRO_LOGO}
          style={styles.image}
          resizeMode="contain"
        />
       <View>
       <Text style={styles.title}>Enjoy listening to music</Text>
        <Text style={styles.intro}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim
          purus sed phasellus. Cursus ornare id scelerisque aliquam.
        </Text>
       </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('move')}>
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: colors.mainColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
  },
  intro: {
    fontSize: 16,
    fontFamily: fonts.SalsaRegular,
    color: colors.fontColor,
    lineHeight: 20,
    textAlign: 'center',
    paddingHorizontal: '10%',
  },
  title: {
    fontSize: 32,
    textAlign:'center',
    fontFamily: fonts.SalsaRegular,
    marginBottom: 20,
    color: colors.white,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  button: {
    width:300,
    backgroundColor: colors.primaryColor,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 34,
    marginTop: 50,
  },
  buttonText: {
    color: colors.white,
    textAlign:'center',
    fontSize: 16,
    fontFamily: fonts.SalsaRegular,
  },
});

export default Intro;
