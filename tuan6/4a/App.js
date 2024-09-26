import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  // Ensure you have installed react-native-vector-icons

const products = [
  {
    id: '1',
    name: 'Ca nấu lẩu, nấu mì mini',
    shop: 'Shop Devang',
    image: './assets/ca_nau_lau.png',
  },
  {
    id: '2',
    name: '1KG KHÔ GÀ BƠ TỎI',
    shop: 'Shop LTD Food',
    image: './assets/ga_bo_toi.png',
  },
  {
    id: '3',
    name: 'Xe cần cẩu đa năng',
    shop: 'Thế giới đồ chơi',
    image: './assets/xa_can_cau.png',
  },
  {
    id: '4',
    name: 'Đồ chơi dạng mô hình',
    shop: 'Thế giới đồ chơi',
    image: './assets/do_choi_dang_mo_hinh.png',
  },
  {
    id: '5',
    name: 'Lãnh đạo giản đơn',
    shop: 'Thế giới đồ chơi',
    image: './assets/lanh_dao_gian_don.png',
  },
  {
    id: '6',
    name: 'Hiểu lòng trẻ con',
    shop: 'Thế giới đồ chơi',
    image: './assets/hieu_long_con_tre.png',
  },
];

const ProductItem = ({ item }) => (
  <View style={styles.productContainer}>
    <Image source={{ uri: item.image }} style={styles.productImage} />
    <View style={styles.productDetails}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.shopName}>{item.shop}</Text>
    </View>
    <TouchableOpacity style={styles.chatButton}>
      <Text style={styles.chatText}>Chat</Text>
    </TouchableOpacity>
  </View>
);

const ChatListScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back-outline" size={25} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chat</Text>
        <TouchableOpacity>
          <Icon name="cart-outline" size={25} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Inquiry Text */}
      <Text style={styles.inquiryText}>
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chát với shop.
      </Text>

      {/* FlatList for the products */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem item={item} />}
        contentContainerStyle={styles.productList}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="menu-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="home-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="arrow-forward-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF', // Changed to blue
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff', // Changed to white for better contrast with blue background
  },
  inquiryText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginVertical: 10, // Adjust the space between the text and header/flatlist
    paddingHorizontal: 20,
  },
  productList: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 5,
    resizeMode: 'contain',
    marginRight: 12,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  shopName: {
    fontSize: 14,
    color: '#888',
  },
  chatButton: {
    backgroundColor: '#007AFF', // Updated color to blue
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 5,
    elevation: 1, // Shadow for Android
  },
  chatText: {
    color: '#fff',
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#007AFF', // Footer background color
    paddingVertical: 15,
  },
  footerButton: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ChatListScreen;
