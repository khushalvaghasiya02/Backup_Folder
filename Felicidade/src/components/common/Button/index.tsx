import React from 'react';
import {
  GestureResponderEvent,
  Image,
  Pressable,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { colors } from '../../../constants/colors';
import { fonts } from '../../../constants/fonts';
import Typography from '../Typography';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'; // responsive imports
// import images from '../../../constants/icons';

type buttonProps = {
  style?: TextStyle | ViewStyle | (TextStyle | ViewStyle)[];
  size?: 'small' | 'medium' | 'large'; // updated size type
  title?: string;
  onPress?: (e: GestureResponderEvent) => void;
  arrow?: boolean;
  buttonTextColor:string
};

const Button = (props: buttonProps) => {
  const { title, onPress, size = 'medium', style, arrow ,buttonTextColor} = props;
  const buttonStyle = buttonStyles(size, arrow);

  return (
    <Pressable onPress={onPress} style={[buttonStyle.buttonContainer, style]}>
      {arrow ? (
        <Image
          source={require('../../../assets/icons/back_arrow.png')}
          style={buttonStyle.imageContainer}
        />
      ) : (
        <Typography
          title={title}
          color={buttonTextColor}
          textStyle={buttonStyle.textAlign}
        />
      )}
    </Pressable>
  );
};

const buttonStyles = (size: string, arrow: boolean) =>
  StyleSheet.create({
    textAlign: {
      fontSize: size === 'small' ? wp('3%') : size === 'large' ? wp('5%') : wp('4%'), // responsive font size
      fontFamily: fonts.SatoshiMedium,
    },
    buttonContainer: {
      backgroundColor: colors.white,
      borderRadius: 10,
      paddingVertical: size === 'small' ? hp('1%') : size === 'large' ? hp('3%') : hp('2%'), // responsive padding
      paddingHorizontal: wp('5%'),
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: arrow ? 'row' : 'column',
    },
    imageContainer: {
      height: hp('2%'),
      width: wp('5%'),
      resizeMode: 'contain',
      marginRight: wp('2%'),
    },
  });

export default Button;
