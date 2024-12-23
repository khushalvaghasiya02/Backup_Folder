import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Typography from '../common/Typography';
import Button from '../common/Button';
import { colors } from '../../constants/colors';
import { flatNo } from '../../constants/data';

const userData = [
    {
        id: '1',
        name: 'John Doe',
        description: 'Lorem ipsum dolor sit amet consectetur. Magnis id.',
        date: '24th Sep 2024',
        duration: '12:00 Min',
        cardColor: colors.friendBack,
        textColor: colors.friend
    },
    {
        id: '2',
        name: 'Jane Smith',
        description: 'Lorem ipsum dolor sit amet consectetur. Magnis id.',
        date: '24th Sep 2024',
        duration: '12:00 Min',
        cardColor: colors.expertBack,
        textColor: colors.expert
    },
    {
        id: '3',
        name: 'Jane Smith',
        description: 'Lorem ipsum dolor sit amet consectetur. Magnis id.',
        date: '24th Sep 2024',
        duration: '12:00 Min',
        cardColor: colors.expertBack,
        textColor: colors.expert
    },
    {
        id: '4',
        name: 'John Doe',
        description: 'Lorem ipsum dolor sit amet consectetur. Magnis id.',
        date: '24th Sep 2024',
        duration: '12:00 Min',
        cardColor: colors.friendBack,
        textColor: colors.friend
    },
];

const UserCard = () => {
    const renderUserCard = ({ item }) => (
        <View style={styles.userCard}>
            <View>
                <Typography title={item.name} size={20} color={item.textColor} />
                <Typography title={item.description} size={12} />
                <View style={styles.infoRow}>
                    <Typography title={item.date} size={12} color={item.textColor} />
                    <Typography title={item.duration} size={12} color={item.textColor} />
                </View>
            </View>
            <View style={styles.btnContainer}>
                <Button
                    title={'Call Now'}
                    style={[styles.callNow, { backgroundColor: item.cardColor || colors.background }]}
                    buttonTextColor={item.textColor}
                />
                <Button
                    title={'Add to Favorite'}
                    style={[styles.addToFavorite, { borderColor: item.textColor || colors.black }]}
                    buttonTextColor={item.textColor}
                />
            </View>
        </View>
    );

    return (
        <FlatList
            data={userData}
            keyExtractor={(item) => item.id}
            renderItem={renderUserCard}
            contentContainerStyle={styles.listContainer}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    userCard: {
        width: wp('43%'),
        height: hp('35%'),
        paddingHorizontal: wp('3%'),
        paddingVertical: hp('2%'),
        gap: 20,
        borderRadius: 10,
        marginRight: wp('3%'),
        marginBottom: hp('1%'),
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    callNow: {
        borderRadius: 50,
        paddingHorizontal: wp('2%'),
        paddingVertical: hp('1%'),
    },
    addToFavorite: {
        borderWidth: 1,
        borderRadius: 50,
        paddingVertical: hp('1%'),
        paddingHorizontal: wp('2%'),
    },
    btnContainer: {
        gap: 10,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp('1%'),
    },

});

export default UserCard;
