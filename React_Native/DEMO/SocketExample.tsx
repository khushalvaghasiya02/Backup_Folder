import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';

const socket = io('http://192.168.1.142:8000', {
  transports: ['websocket'],
  timeout: 5000,
});



const SocketExample = () => {
  const [notifications, setNotifications] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    console.log('Attempting to connect');
    socket.on('connect', () => {
      console.log('Connected to server with ID:', socket.id);
    });

    socket.on('connect_error', error => {
      console.log('Connection error:', error);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    // Listening for incoming notifications from the server
    socket.on('receiveNotification', data => {
      setNotifications(prevNotifications => [...prevNotifications, data]);
    });

    // Clean up on component unmount
    return () => {
      socket.off('receiveNotification');
    };
  }, []);

  const sendNotification = () => {
    const message = 'This is a test notification!';
    socket.emit('sendNotification', { message });
  };
  const addData = () => {
    // Send data to the server
    axios.post('https://9962-116-72-190-142.ngrok-free.app/send', {
      message: `${title} - ${description}`,
    })
    .then((response) => {
      console.log('Data added:', response.data);
      setTitle('');
      setDescription('');
    })
    .catch((error) => {
      console.error('Error adding data:', error);
    });
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
      <View>
        <Button title="Send Notification" onPress={sendNotification} />
        {notifications.map((notif, index) => (
          <Text key={index}>{notif.message}</Text>
        ))}
      </View>
    </View>
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
export default SocketExample;
