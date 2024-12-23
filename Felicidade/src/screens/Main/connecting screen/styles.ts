import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { fonts } from "../../../constants/fonts";
import { colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    paddingTop: wp('2%'),
    marginBottom: wp('1%'),
    fontFamily: fonts.OggBold,
    lineHeight: hp('5.5%'),
    textAlign: 'center',
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: hp('40%'),
    width: hp('40%'),
    marginVertical: hp('10%'),
  },
  circle: {
    borderRadius: wp('100%'),
    borderWidth: 1,
    borderColor: colors.friendBack,
  },
  centralImage: {
    width: wp('20%'),
    height: wp('20%'),
    borderRadius: wp('10%'),
    borderWidth: 5,
    borderColor: colors.friendBack
  },
  avatar: {
    position: 'absolute',
    backgroundColor: '#FFDADA',
    borderRadius: wp('10%'),
    width: wp('16%'),
    height: wp('16%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: hp('2.5%'),
    color: colors.friend,
    fontFamily: fonts.SatoshiMedium,
    lineHeight: hp('3%'),
    textAlign: 'center',
  },
  avatarName: {
    fontSize: hp('1.5%'),
    color: colors.friend,
    fontFamily: fonts.SatoshiMedium,
    lineHeight: hp('2%'),
    textAlign: 'center',
  },
  avatarTopLeft: {
    top: hp('0%'),
    left: wp('0%'),
  },
  avatarTopRight: {
    top: hp('0%'),
    right: wp('0%'),
  },
  avatarBottomLeft: {
    bottom: hp('0%'),
    left: wp('0%'),
  },
  avatarBottomRight: {
    bottom: hp('0%'),
    right: wp('0%'),
  },
  gradientBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cancelButton: {
    position: 'absolute',
    bottom: hp('-7%'),
  },
  cancelButtonText: {
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('15%'),
    fontSize: hp('2%'),
    color: colors.black,
    fontFamily: fonts.SatoshiMedium,
  },
  tipsContainer: {
    position: 'relative',
    backgroundColor: colors.expertBack,
    borderRadius: 10,
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('5%'),
    marginTop: hp('8%'),
  },
  tipsHeading: {
    fontSize: hp('2%'),
    fontFamily: fonts.KalamBold,
    color: colors.black,
    marginBottom: hp('1%'),
    textAlign: 'center',
    position: 'absolute',
    left: wp('40%'),
    top: hp('-1.5%'),
  },
  tipsText: {
    fontSize: hp('1.8%'),
    fontFamily: fonts.SatoshiMedium,
    fontStyle: 'italic',
    color: '#000',
    textAlign: 'center',
  },
});
