import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../../../constants/colors';
import { fonts } from '../../../constants/fonts';
import Button from '../Button';
import Typography from '../Typography';
import { useNavigation } from '@react-navigation/native';
import images from '../../../constants/icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

type headerProps = {
  isShow?: boolean
  title?: string
}
const Header = (props: headerProps) => {
  const { isShow, title } = props
  const navigation = useNavigation()
  return (
    <View style={styles.headerStyle}>
      {isShow ? <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
        <Image source={images.BACK_ARROW} style={styles.backArrow}></Image>
      </Pressable> : null}
      <Typography
        size={18}
        color={colors.textColor}
        title={title}
        textStyle={styles.headerTitle}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    alignItems: 'center',
  },
  backBtn: {
    width: 50,
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    tintColor: colors.black,
  },
  headerTitle: {
    fontFamily: fonts.OggBold,
    paddingLeft: 20,
    lineHeight: 35,
    letterSpacing: 0.20,
    textAlign:'center',
  }
})

export default Header;
