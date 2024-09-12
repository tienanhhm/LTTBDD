import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style ={{flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      marginBottom : 50,
      }}>
      <Text style={styles.title}>GROW </Text>
      <Text style={styles.title}> YOUR BUSINESS</Text>
    </View>
      <Text style={styles.subtitle}>
        We will help you to grow your business 
        using online server
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00BFFF',
    width: '100%',
    height: '100%',
    padding : 50
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 10,
    borderColor: 'black',
    margin: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 100,
    fontWeight:'bold',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    height : 50,
    alignItems: 'center',
    justifyContent:'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight:'bold',
  },
});

export default LoginScreen;