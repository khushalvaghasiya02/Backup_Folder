import React from 'react';
import { View, FlatList, StyleSheet, Text, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import Icon from 'react-native-vector-icons/Ionicons'; // Add this for icons
import images from '../../constants/icons';
import { fonts } from '../../constants/fonts';
import { colors } from '../../constants/colors';

const tripData = [
    { id: 1, icon: images.WALK_ICON, title: 'Leisure Walk', location: 'Mumbai', date: '10/12', points: 200 },
    { id: 2, icon: images.WALK_ICON, title: 'Cycling', location: 'Mumbai', date: '10/12', points: 500 },
    { id: 3, icon: images.WALK_ICON, title: 'Leisure Walk', location: 'Mumbai', date: '10/12', points: 200 },
    { id: 4, icon: images.WALK_ICON, title: 'Cycling', location: 'Mumbai', date: '10/12', points: 500 },
];

const TripCard = ({ icon, title, location, date, points ,textColor}) => {
    return (
        <View style={styles.cardContainer}>
          <View style={styles.cardMain}>
          <Image source={icon} style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
            <View style={styles.info}>
                <View style={styles.infoRow}>
                    <Image source={images.LOCATION_ICON} style={styles.rowIcon} />
                    <Text style={styles.location}>{location}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Image source={images.USERS_ICON} style={styles.rowIcon} />
                    <Text style={styles.date}>{date}</Text>
                </View>
            </View>
          </View>
            <View style={styles.pointsMain}>
            <Text style={[styles.points,{color:textColor}]}>{points} points</Text>
            <Image source={images.COINS_ICON} tintColor={textColor} />
            </View>
        </View>
    );
};

const TripList = ({textColor}) => {
    return (
        <FlatList
            data={tripData}
            renderItem={({ item }) => (
                <TripCard
                    icon={item.icon}
                    title={item.title}
                    location={item.location}
                    date={item.date}
                    points={item.points}
                    textColor={textColor}
                />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            contentContainerStyle={styles.grid}
            showsHorizontalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    grid: {
        paddingHorizontal: 10,
    },
    cardContainer: {
        width: wp('40%'),
        marginHorizontal: wp('2%'),
        borderRadius: 30,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        marginBottom:hp('2%'),
        overflow:'hidden'
    },
    cardMain:{
        padding: hp('1.5%'),
    },
    icon: {
        width: wp('15%'),
        height: hp('10%'),
        resizeMode: 'contain',
    },
    title: {
        fontSize: hp('2%'),
        fontFamily: fonts.SatoshiBold,
        lineHeight: hp('3%'),
        marginVertical: hp('1%'),
        color:colors.border,
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp('0.5%'),
    },
    rowIcon:{
       width:16,
       height:16,
       tintColor:colors.diaries,
    },
    location: {
        fontSize: hp('1.8%'),
        color: colors.diaries,
        marginLeft: wp('1%'),
        marginRight: wp('1%'),
    },
    date: {
        fontSize: hp('1.8%'),
        color: colors.diaries,
        marginLeft: wp('1%'),
    },
    pointsMain:{
        flexDirection:'row'
        ,alignItems:'center',
        justifyContent:'center',
        paddingTop:wp('1%'),
        paddingBottom:wp('2%'),
        backgroundColor:colors.myTripBack,
    },
    points: {
        fontSize: hp('2%'),
        fontFamily:fonts.SatoshiMedium,
        marginTop: hp('1%'),
    },
});

export default TripList;
