/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../constent/Colors';
import image from '../../constent/Images';
import { fonts } from '../../constent/fonts';
import { playlist } from '../../constent/Data';

const Artist = () => {
  const navigation = useNavigation();

  const option = ['News', 'Video', 'Artist', 'Podcast'];

  const renderItem = ({ item ,index}) => {
    return (
      <Pressable
        style={styles.itemContainer}
        onPress={() => navigation.navigate('Music', { item: item,index:index })}
        accessibilityLabel={`Play music by ${item.name}`}
        accessibilityRole="button">
        <View>
          <Image source={{ uri: item.artwork }} style={styles.artistImg} />
          <View style={styles.playBtn}>
            <Image source={image.PLAY_BTN} style={styles.playIcon} />
          </View>
        </View>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.itemSubText}>{item.artist}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={option}
        renderItem={({ item }) => <Text style={styles.option}>{item}</Text>}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      <FlatList
        data={playlist}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  option: {
    color: colors.white,
    marginHorizontal: 10,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: fonts.SalsaRegular,
  },
  itemContainer: {
    padding: 10,
    marginHorizontal: 5,
  },
  itemText: {
    fontSize: 18,
    color: colors.white,
    marginLeft: 10,
  },
  itemSubText: {
    fontSize: 14,
    marginLeft: 10,
    color: colors.white,
  },
  artistImg: {
    width: 150,
    height: 190,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  playIcon: {
    width: 15,
    height: 15,
  },
  playBtn: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#2C2C2C',
    borderRadius: 15,
  },
});

export default Artist;
