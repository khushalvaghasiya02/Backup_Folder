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
        backgroundColor: colors.friendBack,
        borderBottomLeftRadius: wp('100%'),
        borderBottomRightRadius: wp('100%'),
        zIndex: -1,
        top: wp('-45%'),
        left: wp('-25%'),
    },
    sectionTitle: {
        fontSize: hp('2.5%'),
        fontFamily: fonts.SatoshiMedium,
        lineHeight: 28,
        color: colors.black,
        paddingTop: 25,
        paddingBottom: 10,
    },
    recentTalked: {
        marginBottom: hp('2%'),
        paddingLeft: wp('4%'),
    },
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#E0F7FA',
        paddingHorizontal: wp('5%'),
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 20,
        paddingTop: hp('2%'),
    },
    textContainer: {
        width: wp('55%'),
    },
    heading: {
        fontSize: hp('3%'),
        fontFamily: fonts.SatoshiMedium,
        color: colors.expert,
    },
    description: {
        fontSize: hp('2%'),
        color: colors.black,
        marginVertical: hp('1%'),
    },
    button: {
        backgroundColor: colors.expert,
        paddingVertical: hp('1.5%'),
        paddingHorizontal: wp('5%'),
        borderRadius: 30,
        marginTop: hp('2%'),
        marginBottom: hp('2%'),
    },
    buttonText: {
        color: colors.white,
        fontSize: hp('2%'),
        textAlign: 'center',
    },
    image: {
        width: wp('36%'),
        height: hp('25%'),
        objectFit: 'cover',
    },
})