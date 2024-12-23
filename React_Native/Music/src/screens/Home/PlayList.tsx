/* eslint-disable prettier/prettier */
import {View, Text, FlatList, Pressable, Image, StyleSheet} from 'react-native';
import React from 'react';
import image from '../../constent/Images';
import {colors} from '../../constent/Colors';
import {PlayLists} from '../../constent/Data';
import {useNavigation} from '@react-navigation/native';
import {fonts} from '../../constent/fonts';

const PlayList = () => {
  const navigation = useNavigation();

  const renderItem = ({item}) => {
    return (
      <Pressable
        style={styles.itemContainer}
        onPress={() => navigation.navigate('Music', {item: item})}
        accessibilityLabel={`Play music by ${item.name}`}
        accessibilityRole="button">
        <View style={styles.list}>
          <View style={styles.left}>
            <View style={styles.playBtn}>
              <Image source={image.PLAY_BTN} style={styles.playIcon} />
            </View>
            <View>
              <Text style={styles.itemText}>{item.title}</Text>
              <Text style={styles.itemSubText}>{item.artist}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.itemTime}>{item.time}</Text>
          </View>
          <View>
            <Image source={image.HEARTFill_ICON} style={styles.like} />
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Playlist</Text>
        <Text style={styles.seeMore}>see more</Text>
      </View>
      <FlatList
        data={PlayLists}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.SalsaRegular,
    lineHeight: 24,
    color: colors.lightColor,
  },
  seeMore: {
    fontSize: 12,
    fontFamily: fonts.SalsaRegular,
    lineHeight: 14,
    color: colors.lightColor,
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
  itemTime: {
    fontSize: 14,
    marginLeft: 10,
    color: colors.white,
  },
  like: {
    width: 24,
    height: 24,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playIcon: {
    width: 20,
    height: 20,
  },
  playBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#2C2C2C',
    borderRadius: 34,
  },
});

export default PlayList;
