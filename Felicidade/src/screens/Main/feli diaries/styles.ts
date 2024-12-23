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
        width: wp('150%'),
        height: hp('50%'),
        backgroundColor: colors.diariesBack,
        borderBottomLeftRadius: wp('100%'),
        borderBottomRightRadius: wp('100%'),
        zIndex: -1,
        top: wp('-45%'),
        left: wp('-25%'),
    },
    title: {
        fontSize: hp('3%'),
        fontFamily: fonts.OggBold,
        lineHeight: 45,
        textAlign: 'center',
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap:20,
    },
    optionBack: {
        backgroundColor: colors.diariesBack,
        borderRadius: wp('50%'),
        padding: wp('6%'),
    },
    image:{
        width: wp('10%'),
        height: wp('10%'),
    },
    lastBox:{
        marginLeft:wp('4%'),
        justifyContent:'center',
        alignItems:'center',
        width:wp('90%'),
        borderColor:colors.border,
        backgroundColor:colors.diariesBack,
        borderRadius:8,
        borderWidth:1,
        marginVertical:30,
    },
    note:{
        fontFamily:fonts.SatoshiMedium,
        fontStyle:'italic',
        lineHeight:24,
        letterSpacing:0.2,
        textAlign:'center',
        paddingVertical:18,
    }
})