import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DonutDetail from './DonutDetail';
const App = () => {
  const [donuts, setDonuts] = useState([]);
  const Stack = createNativeStackNavigator();
  const fetchDonut = () => {
    axios
      .get('https://670fef49a85f4164ef2c890d.mockapi.io/Doonut')
      .then((response) => {
        setDonuts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchDonut();
  }, []);
  const renderDonut = ({ item, navigation }) => (
    <View style={styles.donutCard}>
      <Image source={{ uri: item.image }} style={styles.donutImage} />
      <View style={{ alignItems: 'space-around' }}>
        <Text style={styles.donutTitleAndPrice}>{item.title}</Text>
        <Text style={{ marginBottom: 10 }}>{item.description}</Text>
        <Text style={styles.donutTitleAndPrice}>${item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('DonutDetail', { donut: item })}
        style={{
          alignSelf: 'flex-end',
          backgroundColor: 'orange',
          borderRadius: 20,
        }}>
        <Text style={{ fontSize: 30, color: 'white', textAlign: 'center' }}>
          {' '}
          +{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
  function listDonuts({ navigation }) {
    return (
      <View style={{ flex: 1, backgroundColor:'white' }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Welcome Huy</Text>
        <FlatList
          data={donuts}
          renderItem={(item) => renderDonut({ ...item, navigation })}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DonutList" component={listDonuts} />
        <Stack.Screen name="DonutDetail" component={DonutDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  donutCard: {
    flexDirection: 'row',
    margin: 7,
    backgroundColor: 'pink',
    borderRadius: 8,
    alignItems: 'center',
  },
  donutImage: {
    width: 120,
    height: 120,
    borderRadius: 50,
  },
  donutTitleAndPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
export default App;
