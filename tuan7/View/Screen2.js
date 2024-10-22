import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
const Screen2 = ({ navigation, route }) => {
  const { userName } = route.params;
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false); 
  const [selectedTask, setSelectedTask] = useState(null); 
  const [updatedTask, setUpdatedTask] = useState(''); 


  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('https://6626ffbbb625bf088c0716e8.mockapi.io/popular/todo');
      const data = await response.json();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    if (route.params?.newTask) {
      setTasks((prevTasks) => [...prevTasks, { id: tasks.length + 1, title: route.params.newTask }]);
    }
  }, [route.params?.newTask]);

  
  const handleEditTask = (task) => {
    setIsEditing(true); 
    setSelectedTask(task); 
    setUpdatedTask(task.title); 
  };

 
  const handleSaveTask = () => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === selectedTask.id ? { ...task, title: updatedTask } : task
      )
    );
    setIsEditing(false); 
    setSelectedTask(null); 
  };

  
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
      {/* Edit Button */}
      <TouchableOpacity onPress={() => handleEditTask(item)}>
        <Icon name="edit" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );

 
  return (
    <View style={styles.container}>
      {isEditing ? (
        
        <View style={styles.editContainer}>
          <Text style={styles.header}>EDIT YOUR TASK</Text>
          <TextInput
            style={styles.input}
            value={updatedTask}
            onChangeText={setUpdatedTask}
          />
          <Button title="SAVE" onPress={handleSaveTask} />
          <Button title="CANCEL" onPress={() => setIsEditing(false)} />
        </View>
      ) : (
        
        <View style={styles.listContainer}>
          <Text style={styles.header}>Hi {userName}, here are your tasks</Text>
          <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
          <Button title="Add Task" onPress={() => navigation.navigate('Screen3')} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  listContainer: { flex: 1 },
  editContainer: { flex: 1, justifyContent: 'center' },
  header: { fontSize: 22, marginBottom: 20, textAlign: 'center' },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: { borderColor: '#ccc', borderWidth: 1, padding: 10, marginBottom: 20 },
});

export default Screen2;
