/* eslint-disable prettier/prettier */
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{paddingTop: 20, backgroundColor: '#58A4B0',height:'100%'}}>
        <View style={styles.header}>
          <View style={styles.profile}>
            <Image
              source={require('../assets/atom.png')}
              style={styles.image}
            />
          </View>
          <Text style={styles.greetingText}>Hello there 👋</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{backgroundColor: '#58A4B0',borderTopWidth:1,borderColor:'#CDC1FF' ,flexDirection:'row',padding:20 , gap:5}}>
       <View style={{justifyContent:'center'}}>
        <Image source={require('../assets/profile.jpg')} style={styles.profileImg}/>
       </View>
        <View style={{justifyContent:'center'}}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>johndoe@example.com</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    gap: 5,
  },
  profile: {
    backgroundColor: '#CDC1FF',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
  },
  image: {
    width: 25,
    height: 25,
    tintColor: '#000',
  },
  greetingText: {
    fontSize: 18,
    color: 'white',
  },
  profileImg:{
    width: 50,
    height: 50,
    borderRadius: 25,

  },
  name:{
    fontSize: 18,
    color: 'white',
  },
  email:{
    fontSize: 14,
    color: 'white',
  }
});

export default CustomDrawer;
