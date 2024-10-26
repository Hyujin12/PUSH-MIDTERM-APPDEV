import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { gradientColors } from '../COLOR/color'; // Import gradient colors for consistency

const fruits = [
  { id: '1',number: require('../../assets/fruits/Number/1.png'), name: 'One', image: require('../../assets/fruits/cherries.png') },
  { id: '2', number: require('../../assets/fruits/Number/2.png'), name: 'Two', image: require('../../assets/fruits/orange.png') },
  { id: '3', number: require('../../assets/fruits/Number/3.png'), name: 'Three', image: require('../../assets/fruits/apple.png') },
  { id: '4', number: require('../../assets/fruits/Number/4.png'), name: 'Four', image: require('../../assets/fruits/strawberry.png') },
  { id: '5', number: require('../../assets/fruits/Number/5.png'), name: 'Five', image: require('../../assets/fruits/banana.png') },
  { id: '6', number: require('../../assets/fruits/Number/6.png'), name: 'Six', image: require('../../assets/fruits/pineapple.png') },
  { id: '7', number: require('../../assets/fruits/Number/7.png'), name: 'Seven', image: require('../../assets/fruits/grapes.png') },
  { id: '8', number: require('../../assets/fruits/Number/8.png'), name: 'Eight', image: require('../../assets/fruits/peach.png') },
  { id: '9', number: require('../../assets/fruits/Number/9.png'), name: 'Nine', image: require('../../assets/fruits/mango.png') },
  { id: '10', number: require('../../assets/fruits/Number/10.png'), name: 'Ten', image: require('../../assets/fruits/watermelon.png') },
];

const LESSONCOUNTINGNUMBERS = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemRow}>
        <Image source={item.number} style={styles.numberImage} />
        <View style={styles.item}>
          {item.id === '2' ? (
            <View style={styles.imageRow}>
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
            </View>
          ) : item.id === '3' ? (
            <View style={styles.imageRow}>
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
            </View>
          ) : item.id === '4' ? (
            <View style={styles.imageRow}>
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
            </View>
          ) : item.id === '5' ? (
            <View style={styles.imageRow}>
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
            </View>
          ) : item.id === '6' ? (
            <View style={styles.imageRow}>
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
            </View>
          ) : item.id === '7' ? (
            <View style={styles.imageRow}>
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
            </View>
          ) : item.id === '8' ? (
            <View style={styles.imageRow}>
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
            </View>
          ) : item.id === '9' ? (
            <View style={styles.imageRow}>
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
            </View>
          ) : item.id === '10' ? (
            <View style={styles.imageRow}>
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
              <Image source={item.image} style={styles.image} />
            </View>
          ) : (
            <Image source={item.image} style={styles.image} />
          )}
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </View>
    </View>
  );
  

  return (
    <LinearGradient colors={gradientColors} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('../../assets/favicon.png')} />
          <Text>Learn Math Today</Text>
          <Text style={styles.headerTitle}>COUNTING NUMBERS</Text>
        </View>
        <FlatList
          data={fruits}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2} // Keeps two items in a row
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flex: 1,
    backgroundColor: '#8BD68E',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    width: 140, // Adjusted to give more space for number and images
    height: 250,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: '#000',
  },
  itemRow: {
    flexDirection: 'row', // Align items in a row (number on left, images on right)
    alignItems: 'center', // Vertically center the number and images
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  imageRow: {
    flexDirection: 'row', // Arrange images in a row
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
   
  },
  image: {
    width: 30,
    height: 30,
    marginHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 10,

    
  },
  numberImage: {
    width: 40,
    height: 40,
    marginRight: 10, // Adds space between number and images
   

    
  },
  text: {
    marginTop: 5,
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  header: {
    alignItems: 'center',
    marginTop:77,
    marginBottom:62,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  logo: {
    width: 90,
    height: 70,
    resizeMode: 'contain',
    
  },
});

export default LESSONCOUNTINGNUMBERS;
