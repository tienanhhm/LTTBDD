import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const Screen1 = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleStart = () => {
    if (name.trim()) {
      navigation.navigate('Screen2', { userName: name });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <Button title="GET STARTED" onPress={handleStart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { borderColor: '#ccc', borderWidth: 1, padding: 10, marginBottom: 20 },
});

export default Screen1;
