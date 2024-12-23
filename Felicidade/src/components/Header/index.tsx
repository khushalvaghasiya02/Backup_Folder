import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import images from '../../constants/icons'
import { colors } from '../../constants/colors'

const Header = ({bgColor}) => {
    const navigation = useNavigation()

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <Image source={images.MENU_ICON} style={styles.drawerImageStyle} />
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={[styles.userProfile, { backgroundColor: bgColor}]}>
                    <Image source={images.USER_FILL} style={styles.userIcon} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: hp('5%'),
        marginBottom: hp('2.5%'),
    },
    drawerImageStyle: {
        width: wp('6%'),
        height: wp('6%'),
    },
    userProfile: {
        padding: wp('2.5%'),
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userIcon: {
        width: wp('5%'),
        height: wp('5%'),
        tintColor: '#fff',
    }
})

export default Header
