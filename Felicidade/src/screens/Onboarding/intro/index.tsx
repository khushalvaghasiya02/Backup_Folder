import React from 'react'
import { ImageBackground, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Button from '../../../components/common/Button'
import Typography from '../../../components/common/Typography'
import { colors } from '../../../constants/colors'
import images from '../../../constants/icons'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../../constants/routes'


const Intro = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.main}>
      <ImageBackground
        source={images.HOME_BACK}
        resizeMode="cover"
        style={styles.image}
        >
        <LinearGradient
          colors={['#006FA3', 'rgba(0, 42, 61, 0.2)']}
          start={{ x: 1, y: 0.2 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
          >
          <View style={styles.introContent}>
            <Typography textStyle={styles.headingTitle} size={40} title={'Felicidade'} color={colors.white} />
            <Typography textStyle={styles.headingDec} size={24} title={'All our members in one place'} color={colors.white} />
            <Button title={'Continue to felicidade'} style={styles.continue} onPress={()=>navigation.navigate('Login')}/>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}
export default Intro