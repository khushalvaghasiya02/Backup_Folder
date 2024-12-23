import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { fonts } from "../../../constants/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    main: {
        width:wp('100%'),
        height:hp('100%'),
        paddingHorizontal: wp('4%'),
        justifyContent: 'space-between',
        flexDirection: 'column',
        position: 'relative',
    },
    head: {
        flex: 1,
    },
    circle: {
        position: 'absolute',
        width: wp('166%'),
        height: hp('66%'),
        borderBottomLeftRadius: wp('100%'),
        borderBottomRightRadius: wp('100%'),
        zIndex: -1,
        top: wp('-50%'),
        left: wp('-33%'),
    },
    outerCircle: {
        position: 'absolute',
        width: wp('160%'),
        height: hp('60%'),
        borderBottomLeftRadius: wp('100%'),
        borderBottomRightRadius: wp('100%'),
        zIndex: -2,
        top: wp('-8%'),
        left: wp('-30%'),
        opacity: 0.1,
    },
    userInfo: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    userImg: {
        marginTop: hp('5%'),
        width: wp('40%'),
        height: wp('40%'),
        borderRadius: wp('40%'),
        resizeMode: 'cover',
    },
    userName: {
        fontFamily: fonts.SatoshiBold,
        lineHeight: hp('4%'),
        letterSpacing: wp('0.5%'),
        textAlign: 'center',
        marginTop: hp('5%'),
    },
    userDec: {
        fontFamily: fonts.SatoshiMedium,
        lineHeight: hp('2.0%'),
        letterSpacing: wp('0.1%'),
        textAlign: 'center',
        marginTop: hp('1%'),
        borderBottomWidth: 1,
    },
    callTime: {
        fontFamily: fonts.SatoshiMedium,
        lineHeight: hp('3%'),
        letterSpacing: wp('0.2%'),
        textAlign: 'center',
        marginTop: hp('10%'),
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: wp('5%'),
        // marginBottom: hp('2%'),
        position:'absolute',
        bottom:wp('2%'),
        paddingHorizontal:wp('4%'),
    },
    iconOuter: {
        padding: wp('3%'),
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: wp('50%'),
    },
    icon: {
        width: wp('5%'),
        height: wp('5%'),
    },
    gradientBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp('3%'),
        paddingVertical: hp('1.5%'),
        paddingHorizontal: wp('8%'),
    },
    cancelButtonText: {
        color: colors.black,
        fontFamily: fonts.SatoshiMedium,
    },
});

