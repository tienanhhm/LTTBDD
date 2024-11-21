import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from './actions';

const ListScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.dataReducer);
  const userName = route.params?.userName || 'Guest';

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View>
      <Text>Hi {userName}</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Add')}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListScreen;