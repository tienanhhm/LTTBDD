import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, deleteItem } from './itemsSlice';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data, loading, error, userName } = useSelector(
    (state) => state.items
  );

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleDelete = (id) => {
    console.log('Delete button pressed');
    dispatch(deleteItem(id));
  };

  const handleEdit = (item) => {
    navigation.navigate('Add', { userName, item });
  };

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={styles.listContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>
        <View style={styles.userInforContainer}>
          <Icon
            name="user"
            size={20}
            color="#000"
            style={{ marginRight: 10 }}
          />
          <View>
            <Text style={styles.headerText}>Hi {userName}</Text>
            <Text style={styles.subHeaderText}>Have a great day ahead</Text>
          </View>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Icon
          name="search"
          size={20}
          color="#A9A9A9"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="sreach"
          placeholderTextColor="#A9A9A9"
        />
      </View>
      <SafeAreaView style={styles.containerItem}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
              <TouchableOpacity onPress={() => handleEdit(item)}>
                <Icon name="pencil" size={20} color="blue" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Icon name="times" size={20} color="red" />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          left: '50%',
          marginLeft: -30, 
        }}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleEdit}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  homeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8A2BE2',
    marginBottom: 10,
  },
  homeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
    height: 30,
    borderColor: '#9095A0',
  },
  icon: {
    marginRight: 10,
    color: 'black',
    fontSize: 16,
  },
  homeButton: {
    backgroundColor: '#00BFFF',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  homeInput: {
    fontSize: 16,
    color: 'black',
  },
  listContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInforContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#000',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#9095A0',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    height: 40,
    flex: 1,
    color: '#000',
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#00BFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  addButtonText: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E0E0E0',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#F9F9F9',
  },
  titleItem: {
    fontSize: 18,
    color: '#333',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  userInfor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
  userGreeting: {
    fontSize: 16,
    color: '#000',
  },
  inputWrapper: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#9095A0',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  inputField: {
    height: 40,
  },
  finishBunton: {
    marginTop: 70,
    backgroundColor: '#00BFFF',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 40,
  },
  finishButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  imageWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default ListScreen;
