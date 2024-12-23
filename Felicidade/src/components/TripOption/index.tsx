import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';
import images from '../../constants/icons';
import Typography from '../common/Typography';

const TripOption = () => {
    const categories = [
        { id: '1', title: 'All events', icon: images.EVENT_ICON },
        { id: '2', title: 'Music', icon: images.MUSIC_ICON },
        { id: '3', title: 'Book', icon: images.BOOK_ICON },
        { id: '4', title: 'Outer', icon: images.OUTER_ICON },
    ];

    const [activeCategory, setActiveCategory] = useState(null);

    const handlePress = (id) => {
        setActiveCategory(id);
    };

    return (
        <View>
            <FlatList
                data={categories}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.categoryButton,
                            { backgroundColor: activeCategory === item.id ? colors.myTrip : colors.white }
                        ]}
                        onPress={() => handlePress(item.id)}
                    >
                        <Image
                            source={item.icon}
                            style={styles.categoryIcon}
                            tintColor={activeCategory === item.id ? colors.white : colors.myTrip}
                        />
                        <Typography
                            textStyle={[
                                styles.categoryTitle,
                                { color: activeCategory === item.id ? colors.white : colors.myTrip }
                            ]}
                            size={16}
                            title={item.title}
                        />
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    categoryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal: wp(4),
        // paddingVertical: hp(0.5),
        width: wp('35%'),
        height: hp('5%'),
        borderWidth: 1,
        borderColor: colors.myTrip,
        borderRadius: wp(5),
        marginLeft: wp(3),
        marginVertical: hp('2%'),
    },
    categoryIcon: {
        width: 20,
        height: 20,
        marginRight: wp(2),
    },
    categoryTitle: {
        fontFamily: fonts.SatoshiMedium,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.myTrip,
    },
});

export default TripOption;
