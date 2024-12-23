import { colors } from "../../../constants/colors";
import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { fonts } from "../../../constants/fonts";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    main: {
        padding: wp('4%'),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: hp('2%'),
    },
    title: {
        fontSize: hp('3%'),
        fontFamily: fonts.OggBold,
        lineHeight: 45,
        textAlign: 'left',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        paddingHorizontal: wp('2%'),
        borderRadius: 10,
        marginTop: hp('2%'),
        marginBottom: hp('3%'),
    },
    searchIcon: {
        marginRight: wp('2%'),
    },
    searchInput: {
        flex: 1,
        fontSize: hp('2%'),
        color:colors.black,
        fontFamily: fonts.SatoshiMedium,
    },
    cardsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: hp('2%'),
    },
    Feli: {
        width: wp('40%'),
        height: hp('15%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
    },
    Freak: {
        width: wp('40%'),
        height: hp('15%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
    },
    sectionTitle: {
        fontSize: hp('2.5%'),
        marginVertical: hp('1%'),
        fontFamily: fonts.SatoshiMedium,
        lineHeight: 28,
        color: colors.black,
        marginTop: 30,
    },
    moodSelector: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: hp('2%'),
    },
    mood: {
        backgroundColor: '#F5F4F3',
        padding: 12,
        borderRadius: 50,
    },
    recentTalked: {
        marginBottom: hp('2%'),
        paddingLeft: wp('4%'),
    },

    issueMain: {
        width: wp('100%'),
        backgroundColor: colors.expertBack,
        padding: wp('4%'),
        marginVertical: hp('3%')
    },
    sectionInfo: {
        lineHeight: 16,
        color: colors.black,
        marginTop: hp('0.5%'),
    },
    tripMain: {
        width: wp('100%'),
        paddingHorizontal: wp('4%'),
    },
})