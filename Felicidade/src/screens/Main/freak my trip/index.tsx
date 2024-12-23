import { View, Text, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { colors } from '../../../constants/colors';
import Header from '../../../components/Header';
import images from '../../../constants/icons';
import Typography from '../../../components/common/Typography';
import TripList from '../../../components/TripList';
import TripOption from '../../../components/TripOption';
import LinearGradient from 'react-native-linear-gradient';
import { SCREENS } from '../../../constants/routes';
import { useNavigation } from '@react-navigation/native';

const FreakMyTrip = () => {
  const trips = [
    { id: '1', date: '27th Sep', title: "Ravi's Cycle Trip", description: 'Lorem ipsum dolor sit amet', type: 'Cycle trip' },
  ];
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <Header bgColor={colors.myTrip} />
        <View style={styles.circle} />
        <View style={styles.titleContent}>
          <Typography title='Let’s Freak your Trip' textStyle={styles.title} size={40} />
          <View style={styles.menu}>
            <View style={styles.menuIcon}>
              <Image source={images.CALENDER_ICON} />
            </View>
            <Typography title='27th May 2024' textStyle={styles.menuText} size={14} />
            <Image source={images.DOWN_ARROW} style={styles.downArrow} />
            <View style={styles.menuIcon}>
              <Image source={images.LOCATION_ICON} />
            </View>
            <Typography title='Location' textStyle={styles.menuText} size={14} />
            <Image source={images.DOWN_ARROW} style={[styles.downArrow, { marginRight: 0 }]} />
          </View>
        </View>
        {/* Circles Section */}
        <View style={styles.circleSection}>
          {[...Array(4)].map((_, index) => (
            <View
              key={index}
              style={[styles.square, index === 1 ? styles.firstSquare : {}, index === 2 ? styles.secondSquare : {}]}
            >
              <View style={styles.circleSmall} />
            </View>
          ))}
        </View>
        <View style={styles.arrow}>
          <Image source={images.DOWN_ARROW} style={[styles.downArrow, { marginRight: 0 }]} />
        </View>

        {/* Upcoming Trips */}
        <Typography textStyle={styles.sectionTitle} title='Find Expert as per your issues' />
        <Typography textStyle={styles.sectionInfo} title='Find experts to talk to for all your queries' size={12} />
        <FlatList
          data={trips}
          renderItem={({ item }) => (
            <LinearGradient
              colors={['#FFFFFF', '#FFEFCF']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.tripCard}
            >
              <Text style={styles.tripDate}>{item.date}</Text>
              <View>
                <Typography textStyle={styles.tripTitle} title={item.title} size={12} />
                <Typography textStyle={styles.tripDescription} title={item.description} size={16} />
                <View style={styles.type}>
                  <Image source={images.WALK_ICON} style={styles.checkIcon} />
                  <Typography textStyle={styles.tripType} title={item.type} size={12} />
                </View>
              </View>
              <TouchableOpacity style={styles.arrowButton} onPress={() =>
            navigation.navigate(SCREENS.LEISURE_WALK,)}>
                <Image source={images.DOWN_ARROW} style={styles.rightArrow} />
              </TouchableOpacity>
            </LinearGradient>
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />

        {/* Top Picks */}
        <Typography textStyle={styles.sectionTitle} title='Top Picks' />
      </View>
      <TripOption />
      <TripList textColor={colors.myTrip} />
    </ScrollView>
  );
}

export default FreakMyTrip;
