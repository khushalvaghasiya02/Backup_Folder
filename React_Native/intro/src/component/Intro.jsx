import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const introImg = require('../assets/images/Isolation_Mode.jpg');
const slides = [
  {
    key: '1',
    title: 'Visitor Management ',
    text: 'Easy tracking of visitors, cabs, and even your deliveries! It’s a one-stop solution to manage all your visitors whether you are inside the society or not.',
    image: introImg,
  },
  {
    key: '2',
    title: 'Maintenance and Utility Bill Payments',
    text: 'Convenient online payment options for all society bills. Now, you will never miss paying society bills on time.',
    image: introImg,
  },
  {
    key: '3',
    title: 'Complaint Management',
    text: 'Easy tracking of visitors, cabs, and even your deliveries! It’s a one-stop solution to manage all your visitors whether you are inside the society or not.',
    image: introImg,
  },
];

const Intro = () => {
  // const [dimensions, setDimensions] = useState({
  //   window: Dimensions.get('window'),
  //   screen: Dimensions.get('screen'),
  // });

  // const {window} = dimensions;
  // console.log(window);
  // const width = window;
  // const height = window;
  const renderSlide = ({item}) => {
    return (
      <View style={styles.slide}>
        <View style={styles.into}>
          <Image source={item.image} style={styles.image} />

          <View style={styles.content}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        </View>
      </View>
    );
  };

  const onDone = () => {
    Alert.alert(
      'Welcome!',
      `Thank you for using MyApp. 
			Start exploring and enjoy!`,
      [
        {
          text: 'OK',
          onPress: () => console.log('Welcome alert closed'),
        },
      ],
    );
  };

  const renderDoneButton = () => {
    return (
      <TouchableOpacity onPress={onDone} style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderSlide}
      renderDoneButton={renderDoneButton}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    // backgroundColor: '#fff5e7',
  },
  intro: {
    width: '100%',
    height: '100%',
    maxWidth: '90%',
  },

  image: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
    marginTop: '20%',
    marginBottom: '5%',
    border: '1px solid #000',
    borderRadius: 10,
  },
  content: {
    margin: '10%',
  },
  title: {
    fontFamily:'Satoshi-Variable',
    width: '100%',
    maxWidth: '80%',
    color: '#000',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'left',
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
    color: '#000',
  },

  doneButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Intro;
