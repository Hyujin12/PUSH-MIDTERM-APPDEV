import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { gradientColors } from '../COLOR/color'; // Import gradient colors for consistency


const shapes = [
  { id: '1', name: 'Circle', image: require('../../assets/shapes/circle.png') },
  { id: '2', name: 'Square', image: require('../../assets/shapes/square.png') },
  { id: '3', name: 'Rectangle', image: require('../../assets/shapes/rectangle.png') },
  { id: '4', name: 'Triangle', image: require('../../assets/shapes/triangle.png') },
  { id: '5', name: 'Diamond', image: require('../../assets/shapes/diamond.png') },
  { id: '6', name: 'Star', image: require('../../assets/shapes/star.png') },
  { id: '7', name: 'Pentagon', image: require('../../assets/shapes/pentagon.png') },
  { id: '8', name: 'Hexagon', image: require('../../assets/shapes/hexagon.png') },
  { id: '9', name: 'Heptagon', image: require('../../assets/shapes/heptagon.png') },
  { id: '10', name: 'Octagon', image: require('../../assets/shapes/octagon.png') },
];

const SHAPE = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  return (
    <LinearGradient colors={gradientColors} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('../../assets/favicon.png')} />
          <Text>Learn Math Today</Text>
          <Text style={styles.title}>LET'S LEARN OUR SHAPES!</Text>
        </View>
        <FlatList
          data={shapes}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop:77,
    marginBottom:62,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  itemContainer: {
    width: 145,
    height: 181,
    backgroundColor: '#8BD68E', 
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 40, // Rounded corners for the container
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Adds shadow for Android
    borderWidth: 5, // Thickness of the black outline
    borderColor: '#000',
  },
  image: {
    width: 100, // Adjusted size for images
    height: 100,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  logo: {
    width: 90,
    height: 70,
    resizeMode: 'contain',
  },
});

export default SHAPE;
