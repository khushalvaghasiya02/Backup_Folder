import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import images from '../../constants/icons';
import { colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';

const categories = [
    { title: 'Mountains', image: images.MOUNTAINS },
    { title: 'Forest', image: images.MOUNTAINS },
    { title: 'Tourist', image: images.MOUNTAINS },
];

const CategoryCard = ({ title, image, isActive, onPress }) => {
    const backgroundColor = isActive ? colors.myTripBack : colors.white;

    return (
        <TouchableOpacity onPress={onPress} style={[styles.card, { backgroundColor }]}>
            <Image source={image} style={styles.icon} />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const CategoryCardComponent = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const handlePress = (index) => {
        setActiveCategory(index);
    };

    return (
        <FlatList
            data={categories}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <CategoryCard
                    title={item.title}
                    image={item.image}
                    isActive={activeCategory === index}
                    onPress={() => handlePress(index)}
                />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        width: wp('40%'),
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.border,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
        gap: wp('1.5%'),
        paddingHorizontal: wp('2%'),
        marginHorizontal: wp('2%'),
    },
    icon: {
        width: wp('12%'),
        height: hp('7%'),
        resizeMode: 'contain',
        marginBottom: hp('1%'),
    },
    text: {
        fontFamily: fonts.SatoshiMedium,
        lineHeight: hp('2%'),
        letterSpacing: wp('0.01%'),
        textAlign: 'center',
        color:colors.black,
    },
    listContainer: {
        paddingHorizontal: wp('3%'),
        marginTop: hp('2%'),
        marginBottom: hp('2%')
    },
});

export default CategoryCardComponent;
