import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Typography from '../../../components/common/Typography';
import { colors } from '../../../constants/colors';
import images from '../../../constants/icons';
import { SCREENS } from '../../../constants/routes';
import { styles } from './styles';

const ConnectingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Typography title='Connecting you with someone' textStyle={styles.heading} size={40} />
      <View style={styles.circleContainer}>
        <View style={[styles.circle, { padding: 30 }]}>
          <View style={[styles.circle, { padding: 30 }]}>
            <View style={[styles.circle, { padding: 40 }]}>
              <View style={[styles.circle, { padding: 50 }]}>
                <Image source={images.CONNECTING_IMG} style={styles.centralImage} />
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.avatar, styles.avatarTopLeft]}>
          <Typography title='R' textStyle={styles.avatarText} size={30} />
          <Typography title='Aayushi' textStyle={styles.avatarName} size={12} />
        </View>
        <View style={[styles.avatar, styles.avatarTopRight]}>
          <Typography title='V' textStyle={styles.avatarText} size={30} />
          <Typography title='Vinit Patil' textStyle={styles.avatarName} size={12} />
        </View>
        <View style={[styles.avatar, styles.avatarBottomLeft]}>
          <Typography title='A' textStyle={styles.avatarText} size={30} />
          <Typography title='Aayushi' textStyle={styles.avatarName} size={12} />
        </View>
        <View style={[styles.avatar, styles.avatarBottomRight]}>
          <Typography title='A' textStyle={styles.avatarText} size={30} />
          <Typography title='Aryasheel' textStyle={styles.avatarName} size={12} />
        </View>

        <Pressable
          style={styles.cancelButton}
          onPress={() =>
            navigation.navigate(SCREENS.CONNECTED_WITH, {
              color: colors.friend,
              backColor: colors.friendBack,
              lightColor: colors.friendLight
            })
          }
        >

          <LinearGradient
            colors={['#FFCED9', '#FFF6C0']}
            start={{ x: 0.12, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradientBackground}
          >
            <Typography textStyle={styles.cancelButtonText} title='Cancel call' />
          </LinearGradient>
        </Pressable>
      </View>

      <View style={styles.tipsContainer}>
        <Typography textStyle={styles.tipsHeading} title='Tips' />
        <Typography textStyle={styles.tipsText} title='If you keep good food in your fridge, you will eat good food.' />
      </View>
    </View>
  );
};

export default ConnectingScreen;
