import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { colors } from "../../../constants/colors";
import { fonts } from "../../../constants/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: hp('2%'),
    alignItems: 'center',
    borderRadius: 10,
  },
  content: {
    width: wp('85%'),
    alignItems: 'center'
  },
  box: {
    width: wp('85%'),
    height: hp('55%'),
    backgroundColor: 'white',
    borderRadius: 15,
    marginVertical: hp('4%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
  },
  image: {
    width: wp('75%'),
    height: hp('48%'),
    resizeMode: 'cover',
    borderRadius: 15,
  },
  title: {
    fontSize: wp('7%'),
    color: colors.black,
    textAlign: 'center',
    fontFamily:fonts.SatoshiBold,
  },
  description: {
    width: wp('80%'),
    fontSize: wp('4%'),
    color: colors.fontsColor,
    textAlign: 'left',
    marginTop: hp('2%'),
    lineHeight: hp('3%'),
    fontFamily: fonts.SatoshiMedium,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp('2%'),
    gap: wp('5%')
  },
  skip: {
    fontSize: wp('4%'),
    color: colors.black,
    width: wp('40%'),
    borderRadius: 5,
    fontFamily: fonts.SatoshiMedium,

  },
  nextButton: {
    backgroundColor: colors.white,
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('16%'),
    borderRadius: 5,
  },
  nextText: {
    fontFamily: fonts.SatoshiMedium,
    fontSize: wp('4%'),
    color: colors.black,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: hp('2%'),
  },
  dot: {
    width: wp('3%'),
    height: wp('3%'),
    borderRadius: wp('1.5%'),
    marginHorizontal: wp('1%'),
  },
});