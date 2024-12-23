import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from "../../../constants/colors";
import { fonts } from "../../../constants/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainContainer:{
    height:hp('100%'),
    width:wp('100%'),
    position:'relative',
  },
  main: {
    paddingHorizontal: wp('4%'),
    position: 'relative',
  },
  head: {
    justifyContent: 'center',
    alignItems: 'center',
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
    left: wp('-36%'),
  },
  userImg: {
    marginTop: hp('5%'),
    width: wp('40%'),
    height: wp('40%'),
    borderRadius: wp('40%'),
    resizeMode: 'cover',
  },
  tripCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('3%'),
    borderRadius: wp('2%'),
    marginBottom: hp('2%'),
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginTop: hp('8%')
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
  sectionTitle: {
    fontSize: hp('2.5%'),
    marginVertical: hp('1%'),
    fontFamily: fonts.SatoshiMedium,
    lineHeight: 28,
    color: colors.black,
    marginTop: 10,
  },
  description: {
    fontFamily: fonts.SatoshiMedium,
    color: colors.black,
    lineHeight: 23,
    textAlign: 'left',
  },
  onwardsContent:{
    backgroundColor:'#FFF8E8',
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    // marginTop:hp('10%')
    position:'absolute',
    bottom:0,
    width:wp('100%'),
  },
  onwards:{
    marginVertical: hp('1%'),
    fontFamily: fonts.SatoshiMedium,
    lineHeight: 28,
    color: colors.black,
  },
  now:{
    fontFamily: fonts.SatoshiMedium,
    color: '#029908',
    lineHeight: 23,
    textAlign: 'left',
  },
  gradientBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cancelButtonText: {
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('10%'),
    fontSize: hp('2%'),
    color: colors.black,
    fontFamily: fonts.SatoshiMedium,
  },

})