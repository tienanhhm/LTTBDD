import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function VerifyScreen() {
  const [code, setCode] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CODE</Text>
      <Text style={styles.subtitle}>VERIFICATION</Text>
      <Text style={styles.description}>Enter ontime password sent on ++849092605798</Text>
      
      <View style={styles.codeContainer}>
        {Array(6).fill().map((_, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(text) => {
              const newCode = code.split('');
              newCode[index] = text;
              setCode(newCode.join(''));
            }}
            value={code[index] || ''}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>VERIFY CODE</Text>
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
    padding: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  codeInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    textAlign: 'center',
    fontSize: 24,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
