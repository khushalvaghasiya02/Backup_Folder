import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import images from '../../constants/icons';
import { colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';
import Typography from '../common/Typography';

const ExpertCard = ({ name, location, clients, comments, imageUrl }) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={imageUrl} style={styles.expertImage} />
            <View style={styles.cardContent}>
                <View style={styles.expertInfo}>
                    <Typography size={16} textStyle={styles.expertName} title={name} />
                    <Typography size={12} textStyle={styles.expertLocation} title={`${location}  ${clients} clients`} />
                </View>
                <View style={styles.ratingContainer}>
                    <View style={styles.starContainer}>
                        <Image source={images.STAR_ICON} style={styles.starIcon} />
                        <Image source={images.STAR_ICON} style={styles.starIcon} />
                        <Image source={images.STAR_ICON} style={styles.starIcon} />
                        <Image source={images.STAR_ICON} style={styles.starIcon} />
                        <Image source={images.STAR_ICON} style={styles.starIcon} />
                    </View>
                    <Typography size={12} textStyle={styles.commentsText}  title={`${comments} comments`}/>
                </View>
            </View>
        </View>
    );
};

const ExpertListScreen = () => {
    const expertsData = [
        {
            id: '1',
            name: 'Expert One',
            location: 'Mumbai',
            clients: 50,
            comments: 233,
            imageUrl: images.EXPERT_IMG,
        },
        {
            id: '2',
            name: 'Expert Two',
            location: 'Delhi',
            clients: 40,
            comments: 120,
            imageUrl: images.EXPERT_IMG,
        },
        {
            id: '1',
            name: 'Expert One',
            location: 'Mumbai',
            clients: 50,
            comments: 233,
            imageUrl: images.EXPERT_IMG,
        },
        {
            id: '2',
            name: 'Expert Two',
            location: 'Delhi',
            clients: 40,
            comments: 120,
            imageUrl: images.EXPERT_IMG,
        },
        {
            id: '1',
            name: 'Expert One',
            location: 'Mumbai',
            clients: 50,
            comments: 233,
            imageUrl: images.EXPERT_IMG,
        },
        {
            id: '2',
            name: 'Expert Two',
            location: 'Delhi',
            clients: 40,
            comments: 120,
            imageUrl: images.EXPERT_IMG,
        },
    ];

    const renderItem = ({ item }) => (
        <ExpertCard
            name={item.name}
            location={item.location}
            clients={item.clients}
            comments={item.comments}
            imageUrl={item.imageUrl}
        />
    );

    return (
        <FlatList
            data={expertsData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
        />
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: wp('4%'),
        marginVertical: hp('1%'),
        borderRadius: wp('3%'),
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    expertImage: {
        width: wp('15%'),
        height: wp('15%'),
        borderRadius: wp('7.5%'),
        marginRight: wp('4%'),
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    expertInfo: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    expertName: {
        fontFamily: fonts.OggBold,
        lineHeight: 24,
        letterSpacing: 0.2,
    },
    expertLocation: {
        fontFamily: fonts.SatoshiMedium,
        color: colors.gray,
        lineHeight: 16,
        letterSpacing: 0.2,
        marginVertical: hp('0.5%'),
    },
    ratingContainer: {
    },
    starContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    starIcon: {
        width: wp('4%'),
        height: wp('4%'),
        tintColor: 'gold',
        marginRight: wp('1%'),
    },
    commentsText: {
        fontFamily: fonts.SatoshiMedium,
        color: colors.gray,
        lineHeight: 16,
        letterSpacing: 0.2,
        marginLeft: hp('2%'),

    },
    listContainer: {
        padding: wp('2%'),
    },
});

export default ExpertListScreen;
