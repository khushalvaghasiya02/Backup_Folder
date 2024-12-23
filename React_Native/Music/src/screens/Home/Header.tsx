/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import image from '../../constent/Images';
import {colors} from '../../constent/Colors';
import {fonts} from '../../constent/fonts';

const Header = props => {
  const {img, title} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.headerContent}>
      {img ? (
        <Pressable
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <Image source={img} style={styles.icon}></Image>
        </Pressable>
      ) : (
        <Pressable
          style={styles.back}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={image.BACK_ICON} style={styles.icon}></Image>
        </Pressable>
      )}
      <Text style={styles.title}>{title}</Text>
      <Pressable
        onPress={() => {
          navigation.navigate('Search');
        }}>
        <Image source={image.DOTS_ICON} style={styles.icon}></Image>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingTop: 36,
    backgroundColor: '#1C1B1B',
  },
  back: {
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#FFFFFF0A',
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    marginHorizontal: 10,
    tintColor: colors.lightColor,
  },
  title: {
    fontSize: 18,
    color: colors.lightColor,
    lineHeight: 22,
    fontFamily: fonts.SalsaRegular,
  },
});
export default Header;
