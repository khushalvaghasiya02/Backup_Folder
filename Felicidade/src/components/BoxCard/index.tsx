import { Image, StyleSheet, TouchableOpacity, View, Text, Pressable } from 'react-native';
import images from '../../constants/icons';
import { fonts } from '../../constants/fonts';
import { colors } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../constants/routes';
const BoxCard = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.mainCard}>
            <View style={styles.cardsContainer}>
                <Pressable style={styles.cardFriend} onPress={()=>navigation.navigate(SCREENS.FELI_FRIEND)}>
                    <Image source={images.BOX_FRIEND} style={styles.cardImage1} tintColor={'#BD0730'} />
                    <Text style={styles.cardTitleFriend}>Feli Friend</Text>
                </Pressable>
                <TouchableOpacity style={styles.cardDiaries} onPress={()=>navigation.navigate(SCREENS.FELI_DIARIES)}>
                    <Text style={styles.cardTitleDiaries}>Feli Diaries</Text>
                    <Image source={images.BOX_DIARIES} style={styles.cardImage2} tintColor={'#5A5A5A'} />
                </TouchableOpacity>
            </View>
            <View style={styles.cardsContainer}>
                <TouchableOpacity style={styles.cardExpert}  onPress={()=>navigation.navigate(SCREENS.FELI_EXPERT)}>
                    <Text style={styles.cardTitleExpert}>Feli Expert</Text>
                    <Image source={images.BOX_EXPERT} style={styles.cardImage2} tintColor={'#006E91'} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cardTrip} onPress={()=>navigation.navigate(SCREENS.FREAK_MY_TRIP)}>
                    <Image source={images.BOX_MY_TRIP} style={styles.cardImage1} tintColor={'#CB8806'} />
                    <Text style={styles.cardTitleTrip}>Freak my trip</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainCard: {
        flex: 1,
        flexDirection: 'row',
        gap: '20%',

    },
    cardsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginVertical: 10,
        width: '50%',
        gap: '40%',
    },
    cardFriend: {
        backgroundColor:colors.friendBack,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: '95%',
        height: 250,
    },
    cardTitleFriend: {
        fontSize: 20,
        color: colors.friend,
        fontFamily: fonts.OggBold,
        lineHeight: 30,
        textAlign: 'left',
        letterSpacing: 1,
    },
    cardExpert: {
        backgroundColor: colors.expertBack,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: '95%',
        height: 200,
    },
    cardTitleExpert: {
        fontSize: 20,
        fontFamily: fonts.OggBold,
        lineHeight: 30,
        textAlign: 'left',
        color: colors.expert,
        letterSpacing: 1,

    },
    cardDiaries: {
        backgroundColor: colors.diariesBack,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: '95%',
        height: 200,

    },
    cardTitleDiaries: {
        fontSize: 20,
        fontFamily: fonts.OggBold,
        lineHeight: 30,
        textAlign: 'left',
        color: colors.diaries,
        letterSpacing: 1,
    },
    cardTrip: {
        backgroundColor: colors.myTripBack,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: '95%',
        height: 250,

    },
    cardTitleTrip: {
        fontSize: 20,
        fontFamily: fonts.OggBold,
        lineHeight: 30,
        textAlign: 'left',
        color: colors.myTrip,
        letterSpacing: 1,

    },
    cardImage1: {
        width: 120,
        height: 120,
        marginBottom: 5,
    },
    cardImage2: {
        width: 100,
        height: 100,
        marginBottom: 5,
    },
});

export default BoxCard;
