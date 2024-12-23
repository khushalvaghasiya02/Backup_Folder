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
        paddingHorizontal: wp('4%'),
        position: 'relative',
    },
    circle: {
        position: 'absolute',
        width: wp('150%'),
        height: hp('60%'),
        backgroundColor: colors.expertBack,
        borderBottomLeftRadius: wp('100%'),
        borderBottomRightRadius: wp('100%'),
        zIndex: -1,
        top: wp('-50%'),
        left: wp('-26%'),
    },
    outerCircle: {
        position: 'absolute',
        width: wp('150%'),
        height: hp('52%'),
        backgroundColor: colors.exportLight,
        borderBottomLeftRadius: wp('100%'),
        borderBottomRightRadius: wp('100%'),
        zIndex: -2,
        top: wp('-10%'),
        left: wp('-26%'),
    },
    head: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: wp('15%'),
        height: wp('15%'),
    },
    circleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: hp('5%'),
        width: '100%',
    },
    circlePlaceholder: {
        width: wp('12%'),
        height: wp('12%'),
        borderRadius: wp('6%'),
        backgroundColor: 'white', elevation: 2,
    },
    heading: {
        paddingTop: wp('2%'),
        fontFamily: fonts.OggBold,
        lineHeight: hp('4.8%'),
        letterSpacing: 0.2,
        textAlign: 'center',
        paddingHorizontal:wp('10%')
    },
    listData:{
        marginTop:hp('4%'),
    },
})