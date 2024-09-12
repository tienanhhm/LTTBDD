import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      {/* Lock Icon */}
      <MaterialIcons name="lock" size={100} color="black" style={styles.lockIcon} />

      {/* Title */}
      <Text style={styles.title}>FORGET PASSWORD</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Provide your account’s email for which you want to reset your password
      </Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={24} color="black" style={styles.icon} />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#000"
        />
      </View>

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextButtonText}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F7FA',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  lockIcon: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D8D8D8',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '100%',
    height: 50,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: 'black',
  },
  nextButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginTop: 20,
  },
  nextButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
