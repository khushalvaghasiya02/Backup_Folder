import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { styles } from './styles'
import Header from '../../../components/common/Header'
import Typography from '../../../components/common/Typography'
import images from '../../../constants/icons'
import LinearGradient from 'react-native-linear-gradient'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ConnectedWith = ({ route }) => {
    const { color, backColor, lightColor } = route.params;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.main}>
                <View style={styles.head}>
                    <Header isShow={true} title="You’re connected with" />
                    <View style={[styles.circle, { backgroundColor: backColor }]} />
                    <View style={[styles.outerCircle, { backgroundColor: lightColor }]} />
                    <View style={styles.userInfo}>
                        <Image source={images.CONNECTED_WITH} style={styles.userImg} />
                        <Typography title="Rajeshwari Shetty" textStyle={[styles.userName, { color }]} size={24} />
                        <Typography title="know more about your feli friend" textStyle={[styles.userDec, { color, borderBottomColor: color }]} size={12} />
                        <Typography title="Ongoing call 15:00" textStyle={[styles.callTime, { color }]} size={16} />
                    </View>
                </View>
                <View style={styles.option}>
                    <Pressable style={styles.iconOuter}>
                        <Image source={images.CALL_MIC} style={styles.icon} />
                    </Pressable>
                    <Pressable style={styles.iconOuter}>
                        <Image source={images.VIDEO_CALL} style={styles.icon} />
                    </Pressable>
                    <Pressable style={[styles.iconOuter, { marginRight: wp('5%') }]}>
                        <Image source={images.CALL_MESSAGE} style={styles.icon} />
                    </Pressable>
                    <Pressable>
                        <LinearGradient
                            colors={['#FFCED9', '#FFF6C0']}
                            start={{ x: 0.12, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={styles.gradientBackground}
                        >
                            <Typography textStyle={styles.cancelButtonText} title="Cancel call" size={16} />
                        </LinearGradient>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

export default ConnectedWith;
