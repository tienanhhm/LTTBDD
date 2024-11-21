import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUserName } from './itemsSlice';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = React.useState('');

  const handleGetStarted = () => {
    dispatch(setUserName(name));
    navigation.navigate('List', { userName: name });
  };

  return (
    <View style={styles.homeContainer}>
      <Text style={styles.homeTitle}>MANAGE YOUR</Text>
      <Text style={styles.homeTitle}>TASK</Text>
      <View style={styles.homeInputContainer}>
        <Icon name="envelope" size = {20} color ="#8A2BE2" style={styles.icon} />
        <TextInput
          style = {styles.homeInput}
          placeholder="Enter your name"
          placeholderTextColor = "#9095A0"
          value={name}
          onChangeText={setName}
        />      
      </View>
      <TouchableOpacity style={styles.homeButton} onPress={handleGetStarted}>
        <Text>GET STARTED ➔</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    padding:20
  },
  homeTitle:{
    fontSize:24,
    fontWeight:'bold',
    color:'#8A2BE2',
    marginBottom:10
  },
  homeInputContainer:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    borderRadius:5,
    width:'100%',
    marginBottom:20,
    paddingHorizontal:10,
    height:30,
    borderColor: '#9095A0'
  },
  icon:{
    marginRight:10,
    color:'black',
    fontSize:16
  },
  homeButton:{
    backgroundColor:'#00BFFF',
    borderRadius:5,
    paddingVertical:15,
    paddingHorizontal:10
  },
  homeInput:{
    fontSize: 16,
    color:'black'
  },
  listContainer:{
    flex:1,
    padding:20,
    backgroundColor:'#FFFFFF'
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  userInforContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  headerText:{
    fontSize:24,
    fontWeight:'bold',
    color:'#000',
    marginLeft:10
  },
  subHeaderText:{
    fontSize:16,
    color:'#000'
  },
  searchContainer:{
    flexDirection: 'row',
    alignItems:'center',
    borderWidth:1,
    borderRadius:5,
    borderColor:"#9095A0",
    marginBottom:20,
    paddingHorizontal:10
  },
  searchIcon:{
    marginRight:10
  },
  searchInput:{
    height:40,
    flex:1,
    color:"#000"
  },
  addButton:{
    
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:'#00BFFF',
    justifyContent:'center',
    alignItems:'center',
    elevation:5,
    
  },
  addButtonText:{
    fontSize:30,
    color:'#FFFFFF'
  },
  item:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderWidth:1,
    borderRadius:5,
    borderColor:'#E0E0E0',
    padding:15,
    marginBottom:10,
    backgroundColor:'#F9F9F9'
  },
  titleItem:{
    fontSize:18,
    color:'#333'
  },
  container:{
    flex:1,
    backgroundColor:'#FFFFFF',
    padding:20,
    alignItems:'center'
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    width:'100%',
    marginBottom:20
  },
  userInfor:{
    flexDirection:'row',
    alignItems:'center'
  },
  userName:{
    fontSize:24,
    fontWeight:'bold',
    color:'#000',
    marginLeft:10
  },
  userGreeting:{
    fontSize:16,
    color:'#000'
  },
  inputWrapper:{
    borderWidth:1,
    borderRadius:5,
    borderColor:'#9095A0',
    width:'100%',
    marginBottom:20,
    paddingHorizontal:10
  },
  inputField:{
    height:40
  },
  finishBunton:{
    marginTop:70,
    backgroundColor:'#00BFFF',
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

// Styles omitted for brevity

export default HomeScreen;