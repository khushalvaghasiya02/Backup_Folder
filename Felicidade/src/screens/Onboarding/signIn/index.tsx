import React, { useState } from 'react'
import { Image, ImageBackground, KeyboardAvoidingView, Pressable, TextInput, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Typography from '../../../components/common/Typography'
import { colors } from '../../../constants/colors'
import images from '../../../constants/icons'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../constants/routes'

const SignIn = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    const navigation = useNavigation()
    return (
        <View style={styles.main}>
            <ImageBackground
                source={images.HOME_BACK}
                resizeMode="cover"
                style={styles.image}
            >
                <LinearGradient
                    colors={['#006FA3', 'rgba(0, 42, 61, 0.9)']}
                    style={styles.gradient}
                >
                    <View style={styles.introContent}>
                        <Typography textStyle={styles.headingTitle} size={40} title={'Felicidade'} color={colors.white} />
                        <Typography textStyle={styles.headingDec} size={24} title={'All our members in one place'} color={colors.white} />
                    </View>
                    {/* <KeyboardAvoidingView> */}
                        <View style={styles.fildContainer}>
                            <View style={styles.fild}>
                                <Typography title='Mobile Number' textStyle={styles.fildName} color={colors.white} />
                                <TextInput
                                    editable
                                    keyboardType="phone-pad"
                                    maxLength={10}
                                    onChangeText={text => setMobileNumber(text)}
                                    value={mobileNumber}
                                    style={styles.input}
                                    placeholder="Enter your mobile number"
                                    placeholderTextColor={colors.gray}
                                />
                            </View>
                            <View style={styles.fild}>
                                <Typography title='OTP' textStyle={styles.fildName} color={colors.white} />
                                <TextInput
                                    editable
                                    keyboardType="numeric"
                                    maxLength={6}
                                    onChangeText={text => setOtp(text)}
                                    value={otp}
                                    style={styles.input}
                                    placeholder="Enter OTP"
                                    placeholderTextColor={colors.gray}
                                />
                            </View>
                            <Pressable style={styles.pressable} onPress={()=>navigation.navigate(SCREENS.ONBOARD)}>
                                <LinearGradient
                                    colors={['#A5E6FB', '#FBC7C7']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    style={styles.gradientBtn}
                                >
                                    <Typography textStyle={styles.startBtn} title='Start connecting' size={20} />
                                </LinearGradient>
                            </Pressable>
                            <Typography textStyle={styles.line} title='Don’t have an account yet? Sign up' />
                            <View style={styles.btnContainer}>
                                <Typography textStyle={styles.authTitle} title='or continue with' />
                                <View style={styles.authContainer}>
                                    <Pressable style={styles.authBtn}>
                                        <Image source={images.GOOGLE} style={styles.icon} />
                                        <Typography textStyle={styles.startBtn} title="Google" size={16} />
                                    </Pressable>
                                    <Pressable style={styles.authBtn}>
                                        <Image source={images.FACEBOOK} style={styles.icon} />
                                        <Typography textStyle={styles.startBtn} title="Facebook" size={16} />
                                    </Pressable>
                                </View>
                                <Pressable style={styles.pressable}>
                                    <LinearGradient
                                        colors={['#FFDFDF', '#FFF6BE']}
                                        start={{ x: -0.05, y: 0 }}
                                        end={{ x: 1, y: 0 }}
                                        style={styles.gradientCall}
                                    >
                                        <View style={styles.iconTextContainer}>
                                            <Image source={images.CALL_OUTER} style={styles.icon} />
                                            <Typography textStyle={styles.startBtn} title="Not feeling well, connect with someone" size={16} />
                                        </View>
                                    </LinearGradient>
                                </Pressable>
                            </View>
                        </View>
                    {/* </KeyboardAvoidingView> */}
                </LinearGradient>
            </ImageBackground>
        </View>
    )
}

export default SignIn;
