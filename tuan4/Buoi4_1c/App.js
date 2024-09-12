import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handleChange = (value, index) => {
    let newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>CODE</Text>

      {/* Verification Subtitle */}
      <Text style={styles.verificationText}>VERIFICATION</Text>
      <Text style={styles.infoText}>Enter onetime password sent on ++849092605798</Text>

      {/* Code Input Fields */}
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            maxLength={1}
            keyboardType="number-pad"
            onChangeText={(value) => handleChange(value, index)}
            value={digit}
          />
        ))}
      </View>

      {/* Verify Code Button */}
      <TouchableOpacity style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>VERIFY CODE</Text>
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
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  verificationText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 40,
  },
  codeInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 24,
    marginHorizontal: 5,
  },
  verifyButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
  },
  verifyButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
