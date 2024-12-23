import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import io from 'socket.io-client';
import PushNotification from 'react-native-push-notification';
import axios from 'axios';

const socket = io('http://192.168.1.142:8000');
const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    PushNotification.configure({
      onNotification: function (notification) {
        console.log('Notification received:', notification);
        setNotification((prev) => [...prev, notification]);
        // Navigate to the desired screen when notification is clicked
        if (notification.userInteraction) {
          navigation.navigate('Details', { title: notification.title, message: notification.message });
        }
      },
      requestPermissions: Platform.OS === 'ios',
    });

    PushNotification.createChannel(
      {
        channelId: 'your-channel-id',
        channelName: 'My Channel',
        channelDescription: 'A channel for notifications',
        sound: 'default',
        importance: PushNotification.Importance.HIGH,
        vibrate: true,
      },
      (created) => console.log(createChannel returned '${created}'),
    );

    socket.on('message', (data) => {
      console.log('Received message from server:', data);
      PushNotification.localNotification({
        channelId: 'your-channel-id',
        title: data.title,
        message: data.message,
        playSound: true,
        soundName: 'default',
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const showNotification = (title, message) => {
    PushNotification.localNotification({
      channelId: 'your-channel-id',
      title: title,
      message: message,
      playSound: true,
      soundName: 'default',
    });
  };

  const addData = async () => {
    try {
      const response = await axios.post('https://50da-116-72-54-225.ngrok-free.app/addData', {
        title: title,
        description: description,
      });

      if (response.status === 200) {
        showNotification('Data Added', Title: ${title} has been added);
        console.log('Data added');
        setTitle('');
        setDescription('');
      }
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Data</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Add Data" onPress={addData} />

      <View>
        <Text style={styles.heading}>Notifications</Text>
        {notification.map((notifi, index) => (
          <View key={index}>
            <Text>{notifi.message}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const DetailsScreen = ({ route }) => {
  const { title, message } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <Text>{message}</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default App;