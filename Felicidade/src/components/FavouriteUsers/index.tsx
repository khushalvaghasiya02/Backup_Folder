import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';

const users = [
    { id: '1', name: 'Rohit Kadam' },
    { id: '2', name: 'Aryasheel Jadhav' },
    { id: '3', name: 'Aayushi Joshi' },
    { id: '4', name: 'Atharv Raut' },
    { id: '1', name: 'Rohit Kadam' },
    { id: '2', name: 'Aryasheel Jadhav' },
    { id: '3', name: 'Aayushi Joshi' },
    { id: '4', name: 'Atharv Raut' },
];

const UserCircle = ({ name, textColor, bgColor }) => {
    const initial = name.charAt(0);

    return (
        <View style={styles.circleContainer}>
            <View style={[styles.circle, { backgroundColor: bgColor }]}>
                <Text style={[styles.circleText, { color: textColor }]}>{initial}</Text>
            </View>
            <Text style={styles.nameText}>{name}</Text>
        </View>
    );
};

const FavouriteUsers = ({ textColor, bgColor }) => {
    return (
        <FlatList
            data={users}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <UserCircle
                    name={item.name}
                    textColor={textColor}
                    bgColor={bgColor}
                />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
        />
    );
};


const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: wp('2%'),
    },
    circleContainer: {
        alignItems: 'center',
        marginRight: wp('4%'),
        width: wp('20%'),
    },
    circle: {
        width: wp('20%'),
        height: wp('20%'),
        borderRadius: wp('10%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleText: {
        fontSize: wp('7%'),
        fontFamily: fonts.SatoshiMedium,
        lineHeight: 40,
    },
    nameText: {
        marginTop: hp('1%'),
        textAlign: 'center',
        fontSize: wp('4%'),
        color: '#333',
        fontFamily: fonts.SatoshiMedium,
        lineHeight: 18,
    },
});

export default FavouriteUsers;
