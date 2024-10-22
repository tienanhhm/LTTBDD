import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const Screen3 = ({ navigation }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      // Pass the new task back to Screen2
      navigation.navigate('Screen2', { newTask: task });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ADD YOUR JOB</Text>
      <TextInput
        style={styles.input}
        placeholder="Input your job"
        value={task}
        onChangeText={setTask}
      />
      <Button title="FINISH" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  header: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  input: { borderColor: '#ccc', borderWidth: 1, padding: 10, marginBottom: 20 },
});

export default Screen3;
