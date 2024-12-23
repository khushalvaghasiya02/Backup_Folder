import React from 'react';
import { View, FlatList, StyleSheet, Image, Pressable } from 'react-native';
import { fonts } from '../../constants/fonts';
import images from '../../constants/icons';
import Typography from '../common/Typography';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { colors } from '../../constants/colors';
import { SCREENS } from '../../constants/routes';
import { useNavigation } from '@react-navigation/native';

const issues = [
  { id: '1', icon: images.RELATIONSHIP_ICON, title: 'Relationship Issues' },
  { id: '2', icon: images.HEALTH_ICON, title: 'Health Issues' },
  { id: '3', icon: images.CAREER_ICON, title: 'Career Issues' },
  { id: '4', icon: images.FINANCIAL_ICON, title: 'Financial Issues' },
  { id: '5', icon: images.EDUCATION_ICON, title: 'Education Issues' },
  { id: '6', icon: images.RELATIONSHIP_ICON, title: 'Relationship Issues' },
  { id: '7', icon: images.HEALTH_ICON, title: 'Health Issues' },
  { id: '8', icon: images.CAREER_ICON, title: 'Career Issues' },
  { id: '9', icon: images.FINANCIAL_ICON, title: 'Financial Issues' },
  { id: '10', icon: images.EDUCATION_ICON, title: 'Education Issues' },
];

const IssueBox = ({ iconSource, title, bgcolor }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.issueBox}
      onPress={() => navigation.navigate(SCREENS.SEARCH_EXPERT, { iconSource, title })}
    >
      <View style={[styles.iconBox, { backgroundColor: bgcolor }]}>
        <Image source={iconSource} style={styles.icon} />
      </View>
      <Typography title={title} size={14} textStyle={styles.boxTitle} />
    </Pressable>
  );
};

const IssuesList = ({ bgcolor }) => (
  <View style={styles.issueContainer}>
    <FlatList
      data={issues}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <IssueBox iconSource={item.icon} title={item.title} bgcolor={bgcolor} />
      )}
      numColumns={4}
      contentContainerStyle={styles.grid}
    />
  </View>
);
const styles = StyleSheet.create({
  issueContainer: {
    justifyContent: 'center',
  },
  issueBox: {
    width: wp('21%'),
    marginBottom: hp('2%'),
    alignItems: 'center',
    marginTop: hp('2%'),
    marginHorizontal: wp('1%'),
  },
  iconBox: {
    width: wp('16%'),
    height: wp('16%'),
    borderRadius: wp('8%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: hp('1%'),
  },
  icon: {
    width: wp('10%'),
    height: wp('10%'),
  },
  boxTitle: {
    textAlign: 'center',
    color: '#333',
    fontFamily: fonts.SatoshiMedium,
  },
  grid: {
    justifyContent: 'space-between',
  },
});

export default IssuesList;

