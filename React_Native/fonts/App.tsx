/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App() {
  return (
    <View>
      <Text style={styles.highlight}>gatekeeper-app</Text>
      <Text style={styles.head}>gatekeeper-app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontFamily: 'Satoshi-VariableItalic',
    fontSize: 36,
    backgroundColor: '#000',
    color: '#fff',
    padding: 20,
    textAlign: 'center',
  },
  head: {
    fontFamily: 'Jersey20Charted-Regular',
    fontSize: 36,
    backgroundColor: '#d8d8d8',
    color: '#000',
    padding: 20,
    textAlign: 'center',
  },
});

export default App;
