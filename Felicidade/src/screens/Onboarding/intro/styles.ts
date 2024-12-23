import { StyleSheet } from "react-native";
import { fonts } from "../../../constants/fonts";
import { colors } from "../../../constants/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  introContent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headingTitle: {
    marginTop: 70,
    marginBottom: 24,
    textAlign: 'center',
    fontFamily: fonts.OggBold,
    fontSize: 40,
    lineHeight: 61.16
  },
  headingDec: {
    marginHorizontal: 50,
    textAlign: 'center',
    marginBottom: 43,
    fontFamily: fonts.KalamBold
  },
  continue: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 21.6,
    textAlign: 'center',
    backgroundColor: colors.white,
    width: '85%',
  }
})