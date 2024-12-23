import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'
import images from '../../constants/icons'
import { ColorProperties } from 'react-native-reanimated/lib/typescript/Colors'
import Typography from '../common/Typography'
import { fonts } from '../../constants/fonts'

const Talking = ({textColor,icon,text,onPress}) => {
    return (
        <Pressable style={styles.talkMain} onPress={onPress}>
            <Image source={icon} style={styles.icon} tintColor={textColor}></Image>
            <Typography title={text} textStyle={[styles.heading, { color: textColor }]} size={18}></Typography>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    talkMain: {
        gap:10,
        marginTop:10,
        width: '100%',
        height: 60,
        backgroundColor: colors.white,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
    },
    heading: {
        fontFamily: fonts.OggBold,
        lineHeight: 25,
        letterSpacing: 0.20,
    }
})

export default Talking