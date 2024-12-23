/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {colors} from '../../constent/Colors';
import image from '../../constent/Images';
import {fonts} from '../../constent/fonts';

const Banner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <View style={styles.content}>
          <Text style={styles.label}>New album</Text>
          <Text style={styles.title}>Happier Than Ever</Text>
          <Text style={styles.name}>Billie Eilish</Text>
        </View>
        <View>
          <Image source={image.BANNER} style={styles.bannerImage} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  banner: {
    width: '85%',
    height: 120,
    backgroundColor: colors.primaryColor,
    margin: 20,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    padding: 20,
  },
  label: {
    color: colors.white,
    fontSize: 10,
    lineHeight: 12,
    fontFamily: fonts.SalsaRegular,
  },
  title: {
    width: '80%',
    color: colors.white,
    fontSize: 18,
    lineHeight: 23,
    fontFamily: fonts.SalsaRegular,
    marginBottom: 8,
  },
  name: {
    color: colors.white,
    fontSize: 13,
    lineHeight: 15,
    fontFamily: fonts.SalsaRegular,
  },
  bannerImage: {
    top: -50,
    right: 5,
    width: 150,
    height: 150,
  },
});
export default Banner;
