// import { StyleSheet } from "react-native";
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import { colors } from "../../../constants/colors";
// import { fonts } from "../../../constants/fonts";

// export const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: colors.white,
//     },
//     main: {
//         paddingHorizontal: wp('4%'),
//         position: 'relative',
//     },
//     circle: {
//         position: 'absolute',
//         width: wp('166%'),
//         height: hp('66%'),
//         backgroundColor: colors.myTripBack,
//         borderBottomLeftRadius: wp('100%'),
//         borderBottomRightRadius: wp('100%'),
//         zIndex: -1,
//         top: wp('-50%'),
//         left: wp('-33%'),
//     },
//     titleContent: {
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     title: {
//         marginTop: wp('2%'),
//         marginBottom: wp('1%'),
//         fontFamily: fonts.OggBold,
//         lineHeight: hp('5.5%'),
//         textAlign: 'center',
//     },
//     menu: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: hp('2%'),
//     },
//     menuIcon: {
//         width: wp('10%'),
//         height: wp('10%'),
//         backgroundColor: colors.white,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderRadius: wp('5%'),
//         borderWidth: 1,
//         borderColor: colors.border,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//         elevation: 2,
//     },
//     menuText: {
//         fontFamily: fonts.SatoshiMedium,
//         lineHeight: hp('2.2%'),
//         letterSpacing: 0.08,
//         marginHorizontal: wp('1.5%'),
//         fontSize: wp('4%'),
//     },
//     downArrow: {
//         marginRight: wp('3%'),
//     },
//     circleSection: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         marginBottom: hp('2%'),
//         marginTop: hp('10%'),
//     },
//     square: {
//         borderWidth: 1,
//         borderColor: colors.border,
//         borderRadius: wp('2%'),
//         padding: wp('2.5%'),
//     },
//     firstSquare: {
//         borderBottomRightRadius: wp('8%'),
//     },
//     secondSquare: {
//         borderBottomLeftRadius: wp('8%'),
//     },
//     circleSmall: {
//         width: wp('15%'),
//         height: wp('15%'),
//         borderRadius: wp('7.5%'),
//         backgroundColor: colors.myTripBack,
//     },
//     arrow: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     sectionTitle: {
//         fontSize: hp('2.5%'),
//         marginVertical: hp('1%'),
//         fontFamily: fonts.SatoshiMedium,
//         lineHeight: hp('3.5%'),
//         color: colors.black,
//     },
//     sectionInfo: {
//         lineHeight: hp('2%'),
//         color: colors.black,
//         marginTop: hp('0.5%'),
//     },
//     tripCard: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: wp('3%'),
//         borderRadius: wp('2%'),
//         marginVertical: hp('2%'),
//         backgroundColor: colors.white,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 1 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//         elevation: 2,
//     },
//     tripDate: {
//         fontSize: wp('5%'),
//         fontWeight: 'bold',
//         color: colors.myTrip,
//         marginRight: wp('3%'),
//     },
//     tripTitle: {
//         fontFamily: 'Sans',
//         lineHeight: hp('2.1%'),
//         color: colors.black,
//     },
//     tripDescription: {
//         fontFamily: 'Sans',
//         lineHeight: hp('2.8%'),
//         color: colors.black,
//     },
//     type: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         gap: wp('2%'),
//     },
//     checkIcon: {
//         width: wp('4%'),
//         height: wp('4%'),
//         resizeMode: 'contain',
//     },
//     tripType: {
//         fontFamily: 'Sans',
//         lineHeight: hp('2.1%'),
//         color: colors.black,
//     },
//     arrowButton: {
//         marginLeft: 'auto',
//         backgroundColor: colors.myTrip,
//         padding: wp('2%'),
//         borderRadius: wp('5%'),
//     },
//     rightArrow: {
//         transform: [{ rotate: '270deg' }],
//         tintColor: colors.white,
//     },
//     topPickCard: {
//         backgroundColor: colors.white,
//         borderRadius: wp('2%'),
//         padding: wp('3%'),
//         marginRight: wp('3%'),
//         shadowColor: '#000',
//         shadowOpacity: 0.1,
//         shadowOffset: { width: 0, height: 1 },
//         elevation: 2,
//     },
// });
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from "../../../constants/colors";
import { fonts } from "../../../constants/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  main: {
    paddingHorizontal: wp('4%'),
    position: 'relative',
  },
  circle: {
    position: 'absolute',
    width: wp('166%'),
    height: hp('66%'),
    backgroundColor: colors.myTripBack,
    borderBottomLeftRadius: wp('100%'),
    borderBottomRightRadius: wp('100%'),
    zIndex: -1,
    top: wp('-50%'),
    left: wp('-33%'),
  },
  titleContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    paddingTop: wp('2%'),
    marginBottom: wp('1%'),
    fontFamily: fonts.OggBold,
    lineHeight: hp('5.5%'),
    textAlign: 'center',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2%'),
  },
  menuIcon: {
    width: wp('10%'),
    height: wp('10%'),
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('5%'),
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  menuText: {
    fontFamily: fonts.SatoshiMedium,
    lineHeight: hp('2.2%'),
    marginHorizontal: wp('1.5%'),
    fontSize: wp('4%'),
  },
  downArrow: {
    marginRight: wp('3%'),
  },
  circleSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom:hp('2%'),
    marginTop:hp('10%'),
    // marginBottom: 20,
    // marginTop: 80,
  },
  square: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: wp('2%'),
    padding: wp('2.5%'),
  },
  firstSquare: {
    borderBottomRightRadius: wp('8%'),
  },
  secondSquare: {
    borderBottomLeftRadius: wp('8%'),
  },
  circleSmall: {
    width: wp('15%'),
    height: wp('15%'),
    borderRadius: wp('7.5%'),
    backgroundColor: colors.myTripBack,
  },
  arrow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: hp('2.5%'),
    marginVertical: hp('1%'),
    fontFamily: fonts.SatoshiMedium,
    lineHeight: hp('3.5%'),
    color: colors.black,
  },
  sectionInfo: {
    lineHeight: hp('2%'),
    color: colors.black,
    marginTop: hp('0.5%'),
  },
  tripCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp('3%'),
    borderRadius: wp('2%'),
    marginVertical: hp('2%'),
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  tripDate: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: colors.myTrip,
    marginRight: wp('3%'),
  },
  tripTitle: {
    fontFamily: fonts.SatoshiMedium,
    lineHeight: hp('2.1%'),
    color: colors.black,
  },
  tripDescription: {
    fontFamily: fonts.SatoshiMedium,
    lineHeight: hp('2.8%'),
    color: colors.black,
  },
  type: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('2%'),
  },
  checkIcon: {
    width: wp('4%'),
    height: wp('4%'),
    resizeMode: 'contain',
  },
  tripType: {
    fontFamily: 'Sans',
    lineHeight: hp('2.1%'),
    color: colors.black,
  },
  arrowButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('8%'),
    height: wp('8%'),
    borderRadius: wp('5%'),
    backgroundColor: colors.myTrip
  },
  rightArrow: {
    width: wp('4%'),
    height: wp('4%'),
    transform: [{ rotate: '270deg' }],
    tintColor: colors.white,
  },
});
