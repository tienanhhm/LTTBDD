import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const DonutDetail = ({ route }) => {
  const { donut } = route.params;
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity((i) => i + 1);
  };
  const decrease = () => {
    if (quantity > 0) setQuantity((i) => i - 1);
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: donut.image }} style={styles.donutImage} />
      <Text style={styles.donutTitleandPrice}>{donut.title}</Text>
      <Text style={styles.donutDescription}>{donut.description}</Text>
      <Text style={styles.donutTitleandPrice}>
        Price: ${donut.price.toFixed(2)}
      </Text>
      <View style={styles.viewQuantity}>
        <TouchableOpacity onPress={decrease} style={styles.btnQuantity}>
          <Text style={{ fontSize: 25, textAlign: 'center' }}>-</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 25 }}>{quantity}</Text>
        <TouchableOpacity onPress={increase} style={styles.btnQuantity}>
          <Text style={{ fontSize: 25 }}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btnCart}>
        <Text style={{color:'white', fontSize:20}}> Add To Cart </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  donutImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  donutTitleandPrice: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  donutDescription: {
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 10,
  },
  viewQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnQuantity: {
    backgroundColor: 'orange',
    width: 30,
    height: 30,
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnCart:{
    padding:20,
    width:200,
    height:50,
    borderRadius:10,
    alignItems:'center',
    backgroundColor:'red'
  }
});

export default DonutDetail;
