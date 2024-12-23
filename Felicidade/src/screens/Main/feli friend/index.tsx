import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { colors } from '../../../constants/colors';
import { styles } from './styles';
import Header from '../../../components/Header';
import Talking from '../../../components/Talking';
import UserCard from '../../../components/UserCard';
import FavouriteUsers from '../../../components/FavouriteUsers';
import images from '../../../constants/icons';
import { SCREENS } from '../../../constants/routes';
import { useNavigation } from '@react-navigation/native';

const FeliFriend = () => {
    const navigation = useNavigation();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.main}>
                <Header bgColor={colors.friend} />
                <View style={styles.circle} />
                <Talking 
                    textColor={colors.friend}  
                    icon={images.TALK_ICON} 
                    text='Talk with someone right now' 
                    onPress={() => navigation.navigate(SCREENS.CONNECTING)} 
                />
                <Text style={styles.sectionTitle}>Recently Talked With</Text>
            </View>
            <View style={styles.recentTalked}>
                <UserCard />
                <Text style={styles.sectionTitle}>Your Favourite</Text>
                <FavouriteUsers textColor={colors.friend} bgColor={colors.friendBack} />
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}>
                        Some Issues are not solved and serious?
                    </Text>
                    <Text style={styles.description}>
                        Lorem ipsum dolor sit amet consectetur. Magnis id.
                    </Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Talk with our experts!</Text>
                    </TouchableOpacity>
                </View>
                <Image
                    source={images.HUMAN_IMG}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
        </ScrollView>
    );
}

export default FeliFriend;
