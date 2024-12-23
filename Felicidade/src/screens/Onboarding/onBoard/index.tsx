import React, { useRef, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { styles } from './styles';
import { SCREENS } from '../../../constants/routes';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const onboardingData = [
    { id: 1, backgroundColor: '#FFD1DB', title: 'On-boarding Screen 1', description: 'Lorem ipsum dolor sit amet consectetur. Egestas pretium consequat bibendum vitae eleifend non quis est. Dictum in vel morbi sed nunc. Leo sapien nisl commodo odio quam.', image: 'https://picsum.photos/seed/picsum/600/600' },
    { id: 2, backgroundColor: '#A8E5F9', title: 'On-boarding Screen 2', description: 'Lorem ipsum dolor sit amet consectetur. Egestas pretium consequat bibendum vitae eleifend non quis est. Dictum in vel morbi sed nunc. Leo sapien nisl commodo odio quam.', image: 'https://picsum.photos/seed/picsum/600/600' },
    { id: 3, backgroundColor: '#FFF5C1', title: 'On-boarding Screen 3', description: 'Lorem ipsum dolor sit amet consectetur. Egestas pretium consequat bibendum vitae eleifend non quis est. Dictum in vel morbi sed nunc. Leo sapien nisl commodo odio quam.', image: 'https://picsum.photos/seed/picsum/600/600' },
    { id: 4, backgroundColor: '#E6C1FB', title: 'On-boarding Screen 4', description: 'Lorem ipsum dolor sit amet consectetur. Egestas pretium consequat bibendum vitae eleifend non quis est. Dictum in vel morbi sed nunc. Leo sapien nisl commodo odio quam.', image: 'https://picsum.photos/seed/picsum/600/600' },
];

const OnboardingSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);
    const navigation = useNavigation()

    const renderItem = ({ item }) => (
        <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
            <View style={styles.content}>
                <View style={styles.box}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.image}
                    />
                    <View style={styles.pagination}>
                        {onboardingData.map((dataItem) => (
                            <View
                                key={dataItem.id}
                                style={[
                                    styles.dot,
                                    { backgroundColor: dataItem.id === onboardingData[activeIndex].id ? dataItem.backgroundColor : '#D8D8D8' },
                                ]}
                            />
                        ))}
                    </View>
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('HomeStack')}>
                    <Text style={styles.skip}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={activeIndex === 3
                        ? () => navigation.navigate('HomeStack')
                        : () => carouselRef.current.snapToNext()}
                >
                    <Text style={styles.nextText}>Next</Text>
                </TouchableOpacity>

            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                data={onboardingData}
                renderItem={renderItem}
                sliderWidth={width}
                itemWidth={width}
                onSnapToItem={(index) => setActiveIndex(index)}
            />
        </View>
    );
};

export default OnboardingSlider;
