import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  TextInput
} from 'react-native';
import axios from 'axios';

const DonutList = ({ navigation }) => {
  const [donuts, setDonuts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); 
  const [loading, setLoading] = useState(true);

 
  const fetchDonuts = async (category) => {
    try {
      setLoading(true); 
      let apiUrl = 'https://6710657ba85f4164ef2dd6db.mockapi.io/bicycle';
      if (category) {
        apiUrl += `?category=${category}`; 
      }

      const response = await axios.get(apiUrl);
      setDonuts(response.data);
      setLoading(false); 
    } catch (error) {
      console.error('Error fetching donuts:', error);
      setLoading(false);
    }
  };

 
  useEffect(() => {
    fetchDonuts(selectedCategory);
  }, [selectedCategory]);

  
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('BicycleDetail', {bicycle: item })}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: `${item.image}.jpg` }} style={styles.image} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        
      </View>
      
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="small" color="#0000ff" />
        <Text>Loading Donuts</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View>
      <Text style={{
        fontWeight:'bold',
        color:'gray'
      }}>The world’s Best Bike</Text>
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedCategory === '' && styles.selectedButton,
          ]}
          onPress={() => setSelectedCategory('')}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedCategory === 'RoadBike' && styles.selectedButton,
          ]}
          onPress={() => setSelectedCategory('RoadBike')}>
          <Text style={styles.filterText}>RoadBike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedCategory === 'Moutain' && styles.selectedButton,
          ]}
          onPress={() => setSelectedCategory('Moutain')}>
          <Text style={styles.filterText}>Moutain</Text>
        </TouchableOpacity>
      </View>

      
      <FlatList
        data={donuts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
         numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  selectedButton: {
    backgroundColor: '#f5a623',
  },
  filterText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#F7BA8326',
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 10,
    
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 15,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    marginTop: 5,
    color: '#555',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default DonutList;
