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
        backgroundColor: colors.expertBack,
        borderBottomLeftRadius: wp('100%'),
        borderBottomRightRadius: wp('100%'),
        zIndex: -1,
        top: wp('-45%'),
        left: wp('-25%'),
    },
    issueMain: {
        width: wp('100%'),
        marginTop:40
    },
    sectionTitle: {
        fontSize: hp('2.5%'),
        marginVertical: hp('1%'),
        fontFamily: fonts.SatoshiMedium,
        lineHeight: 28,
        color: colors.black,
        marginTop: 30,
    },
    sectionInfo: {
        lineHeight: 16,
        color: colors.black,
        marginTop: hp('0.5%'),
    },
    recentTalked: {
        marginBottom: hp('2%'),
        paddingLeft: wp('4%'),
    },
})