import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fonts } from '../../constants/fonts';
import { colors } from '../../constants/colors';
import Typography from '../common/Typography';

const DATA = [
    {
        id: '1',
        date: '23rd Sep',
        time: '11 pm',
        title: "I'm Anxious today",
        tags: ['Anxious', 'Work'],
        backgroundColor: colors.diariesBack,
        textColor: colors.diaries,
    },
    {
        id: '2',
        date: '23rd Sep',
        time: '11 pm',
        title: 'Today was such a great day!',
        tags: ['Excited', 'Personal'],
        backgroundColor: colors.expertBack,
        textColor: colors.expert,
    },
    {
        id: '3',
        date: '24th Sep',
        time: '12 pm',
        title: 'What am I doing in my life?',
        tags: ['Productive', 'Work'],
        backgroundColor: colors.friendBack,
        textColor: colors.friend,
    },
    {
        id: '4',
        date: '25th Sep',
        time: '9 am',
        title: 'Today was such a great day',
        tags: ['Stressed', 'Health'],
        backgroundColor: colors.myTripBack,
        textColor: colors.myTrip,
    },
];

const Card = ({ item }) => {

    return (
        <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
            <Typography textStyle={[styles.date, { color: item.textColor }]}
                title={`${item.date} • ${item.time}`} size={12}/>

            <View>
                <Typography textStyle={[styles.title, { color: item.textColor }]} title={item.title}/>
                <Typography textStyle={[styles.tags, { color: item.textColor }]} title={item.tags.join(' • ')} size={12}/>
            </View>
        </View>
    );
};

const ThoughtCard = () => {
    return (
        <FlatList
            data={DATA}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Card item={item} />}
            contentContainerStyle={styles.list}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: wp('4%'),
        paddingVertical: hp('2%'),
    },
    card: {
        padding: wp('5%'),
        borderRadius: 10,
        marginVertical: hp('2%'),
        width: wp('60%'),
        height: hp('50%'),
        marginRight: wp('4%'),
        justifyContent: 'space-between',
    },

    date: {
        marginBottom: hp('1%'),
        fontFamily: 'Sans',
        fontWeight: 'bold',
        lineHeight: 16,
    },
    title: {
        fontSize: hp('2.5%'),
        marginBottom: hp('1%'),
        fontFamily: fonts.OggBold,
        lineHeight: 28,
        letterSpacing: 0.2,
        marginRight: wp('12%')
    },
    tags: {
        fontFamily: 'Sans',
        fontWeight: 'bold',
        lineHeight: 16,
    },
});

export default ThoughtCard;
