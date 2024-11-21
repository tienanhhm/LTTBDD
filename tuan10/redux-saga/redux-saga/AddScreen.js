import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import { fetchDataRequest } from './actions';

const AddScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const userName = route.params?.userName || 'Guest';
  const item = route.params?.item; // Nhận dữ liệu từ ListScreen
  const [jobTitle, setJobTitle] = useState(item ? item.title : '');

  const handleFinish = async () => {
    const url = item ? `https://645315b2e9ac46cedf1d03f3.mockapi.io/hocSinh/${item.id}` : 'https://645315b2e9ac46cedf1d03f3.mockapi.io/hocSinh/';
    const method = item ? 'PUT' : 'POST';

    try {
      await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: jobTitle }),
      });
      dispatch(fetchDataRequest()); // Tải lại dữ liệu sau khi thêm hoặc cập nhật
      navigation.navigate('List', { userName });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.userName}>Hi {userName}</Text>
      </View>
      <Text style={styles.title}>ADD YOUR JOB</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Input your job"
        placeholderTextColor="#9095A0"
        value={jobTitle}
        onChangeText={setJobTitle}
      />
      <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
        <Text style={styles.finishButtonText}>FINISH ➔</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#9095A0',
    marginBottom: 20,
    paddingHorizontal: 10,
    height: 40,
  },
  finishButton: {
    backgroundColor: '#00BFFF',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
  },
  finishButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default AddScreen;