import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#fafeff', '#56ddfb','#a3ecfd','#17d0f9']}
        start={{x: 0, y: 0}}
        end={{x: 2, y: 0.5}}
        style={styles.background}>
        
        <View style={styles.logo} />
        
        <View style={styles.titleContainer}>
          <Text style={styles.title}>GROW YOUR BUSINESS</Text>
        </View>
        
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            We will help you to grow your business using online server
          </Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.howWeWorkContainer}>
          <Text style={styles.howWeWorkText}>HOW WE WORK</Text>
        </View>

      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    height: 140,
    width: 140,
    borderWidth: 15,
    marginTop: 155,
    borderRadius: 100,
  },
  titleContainer: {
    height: 58,
    width: 192,
    marginTop: 62,
  },
  title: {
    fontSize: 25,
    lineHeight: 27,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitleContainer: {
    height: 36,
    width: 302,
    marginTop: 30,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 17.58,
    textAlign: 'center',
    color: '#555',
  },
  buttonContainer: {
    marginTop: 60,
    height: 48,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#FFD700',
    height: '100%',
    width: '45%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 23.44,
  },
  howWeWorkContainer: {
    marginTop: 30,
  },
  howWeWorkText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});
