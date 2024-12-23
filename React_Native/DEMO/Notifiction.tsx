import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';
import { showNotification } from './src/notificationConfig';

const Notifiction = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Function to handle adding data
  const addData = async () => {
    try {
      const response = await axios.post('https://b2fd-116-72-189-215.ngrok-free.app/addData', {
        title: title,
        description: description,
      });

      if (response.status === 200) {
        showNotification('Data Added', `Title: ${title} has been added`);
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

export default Notifiction;

// react-native-push-notification