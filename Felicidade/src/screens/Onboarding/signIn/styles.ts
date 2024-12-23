// import { Dimensions, StyleSheet } from "react-native";
// import { fonts } from "../../../constants/fonts";
// import { colors } from "../../../constants/colors";
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'; // Add for responsive dimensions

// const { width, height } = Dimensions.get('window');

// export const styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%',
//         height: '100%',
//     },
//     image: {
//         flex: 1,
//         justifyContent: 'center',
//         width: width,
//         height: height,
//     },
//     gradient: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         width: width,
//         height: height,
//     },
//     introContent: {
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//     },
//     headingTitle: {
//         marginTop: 30,
//         marginBottom: 5,
//         textAlign: 'center',
//         fontFamily: fonts.OggBold,
//         lineHeight: 50.16
//     },
//     headingDec: {
//         marginHorizontal: 50,
//         textAlign: 'center',
//         marginBottom: 20,
//         fontFamily: fonts.KalamBold
//     },
//     fildContainer: {
//         width: '100%',
//         paddingHorizontal: 30,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     fild: {
//         width: '100%',
//     },
//     fildName: {
//         fontFamily: fonts.SatoshiBold,
//         fontSize: 18,
//         lineHeight: 26,
//         letterSpacing: 0.023,
//         textAlign: 'left',
//         color: colors.white,
//         marginVertical: 10,
//     },
//     input: {
//         width: wp('85%'),
//         height: hp('6%'),
//         borderRadius: 5,
//         backgroundColor: '#FFFFFF',
//         paddingHorizontal: 10,
//         shadowColor: '#000000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 2.5,
//         elevation: 2,
//     },
//     pressable: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: 30,
//         marginBottom: 10,
//     },
//     gradientBtn: {
//         width: wp('85%'),
//         height: hp('7%'),
//         borderRadius: 5,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     startBtn: {
//         color: colors.black,
//         fontFamily: fonts.SatoshiMedium,
//         lineHeight: 30,
//     },
//     line: {
//         color: colors.white,
//         fontSize: 15,
//         fontFamily: fonts.SatoshiMedium,
//         lineHeight: 22,
//         marginBottom: 50
//     },
//     gradientCall: {
//         width: wp('85%'),
//         height: hp('7%'),
//         borderRadius: 15,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     iconTextContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     icon: {
//         marginRight: 8,
//         width: 20,
//         height: 20,
//     },
//     btnContainer: {
//         width: wp('85%'),
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     authContainer: {
//         flexDirection: 'row',
//         gap: wp('5%'),
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     authBtn: {
//         flexDirection: 'row',
//         width: wp('40%'),
//         paddingVertical: 10,
//         paddingHorizontal: 40,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: colors.white,
//         borderRadius: 15,
//     }, authTitle: {
//         color: colors.white,
//         fontSize: 15,
//         fontFamily: fonts.SatoshiMedium,
//         lineHeight: 22,
//         marginBottom: 10
//     }
// });


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
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    headingTitle: {
        paddingTop: hp('7%'),
        marginBottom: hp('1%'),
        textAlign: 'center',
        fontFamily: fonts.OggBold,
        lineHeight: hp('6%'),
    },
    headingDec: {
        marginHorizontal: wp('12%'),
        textAlign: 'center',
        marginBottom: hp('3%'),
        fontFamily: fonts.KalamBold,
    },
    fildContainer: {
        width: '100%',
        paddingHorizontal: wp('7.5%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    fild: {
        width: '100%',
    },
    fildName: {
        fontFamily: fonts.SatoshiBold,
        fontSize: wp('4.5%'),
        lineHeight: hp('3.5%'),
        letterSpacing: 0.023,
        textAlign: 'left',
        color: colors.white,
        marginVertical: hp('1.5%'),
    },
    input: {
        width: wp('85%'),
        height: hp('6%'),
        borderRadius: 5,
        color:colors.black,
        backgroundColor: colors.white,
        paddingHorizontal: wp('2.5%'),
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2.5,
        elevation: 2,
    },
    pressable: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('4%'),
        marginBottom: hp('1.5%'),
    },
    gradientBtn: {
        width: wp('85%'),
        height: hp('7%'),
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    startBtn: {
        color: colors.black,
        fontFamily: fonts.SatoshiMedium,
        fontSize: wp('4%'),
        lineHeight: hp('4.5%'),
    },
    line: {
        color: colors.white,
        fontSize: wp('3.8%'),
        fontFamily: fonts.SatoshiMedium,
        lineHeight: hp('3.2%'),
        marginBottom: hp('7%'),
    },
    gradientCall: {
        width: wp('85%'),
        height: hp('7%'),
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: wp('2%'),
        width: 20,
        height: 20,
    },
    btnContainer: {
        width: wp('85%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    authContainer: {
        flexDirection: 'row',
        gap: wp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    authBtn: {
        flexDirection: 'row',
        width: wp('40%'),
        paddingVertical: hp('1%'),
        paddingHorizontal: wp('8%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 15,
    },
    authTitle: {
        color: colors.white,
        fontSize: wp('3.5%'),
        fontFamily: fonts.SatoshiMedium,
        lineHeight: hp('3%'),
        marginBottom: hp('1.5%'),
    },
});
