import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const data = [
  { id: '1', title: 'Day one in my', description: 'Lorem ipsum dolor sit amet consectetur. Enim phasellus nulla parturient' },
  { id: '2', title: 'All in one day', description: 'Lorem ipsum dolor sit amet consectetur. Enim phasellus nulla parturient' },
  { id: '3', title: 'My birthday', description: 'Lorem ipsum dolor sit amet consectetur. Enim phasellus nulla parturient' },
  { id: '4', title: 'How I felt in som..', description: 'Lorem ipsum dolor sit amet consectetur. Enim phasellus nulla parturient' }
];

const DayInfoComponent = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity>
        <Text style={styles.learnMore}>Learn More..</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: wp(4),
    paddingTop: hp(2),
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: hp(2),
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    padding: hp(1.5),
    width: wp(44),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: hp(2.4),
    fontFamily: fonts.SatoshiBold,
    lineHeight: hp(3),
    letterSpacing: 0.2,
    marginBottom: hp(1),
    color: colors.black,
  },
  description: {
    fontSize: hp(2),
    fontFamily: fonts.SatoshiMedium,
    lineHeight: hp(2.5),
    letterSpacing: 0.08,
    marginBottom: hp(1),
    color: colors.black,
  },
  learnMore: {
    fontSize: hp(2),
    fontFamily: fonts.SatoshiBold,
    lineHeight: hp(2.5),
    letterSpacing: 0.08,
    color: colors.black,
  },
});

export default DayInfoComponent;
