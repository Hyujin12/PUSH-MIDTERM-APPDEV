import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { gradientColors } from '../COLOR/color';

const multiplication = [
  { id: '1', number: require('../../assets/fruits/Number/1.png'), name: 'One' },
  { id: '2', number: require('../../assets/fruits/Number/2.png'), name: 'Two' },
  { id: '3', number: require('../../assets/fruits/Number/3.png'), name: 'Three' },
  { id: '4', number: require('../../assets/fruits/Number/4.png'), name: 'Four' },
  { id: '5', number: require('../../assets/fruits/Number/5.png'), name: 'Five' },
  { id: '6', number: require('../../assets/fruits/Number/6.png'), name: 'Six' },
  { id: '7', number: require('../../assets/fruits/Number/7.png'), name: 'Seven' },
  { id: '8', number: require('../../assets/fruits/Number/8.png'), name: 'Eight' },
  { id: '9', number: require('../../assets/fruits/Number/9.png'), name: 'Nine' },
  { id: '10', number: require('../../assets/fruits/Number/10.png'), name: 'Ten' },
];

const LESSONMULTIPLICATION = () => {
  const renderItem = ({ item }) => (
    <View style={styles.outerContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.number} style={styles.numberImage} />
        <Text style={styles.text}>{item.name}</Text>
      </View>
      <View style={styles.itemContainer}>
        {item.id === '1' && (
          <Text style={styles.equations}>
            1 x 1 = 1{'\n'}1 x 2 = 2{'\n'}1 x 3 = 3{'\n'}1 x 4 = 4{'\n'}1 x 5 = 5{'\n'}
            1 x 6 = 6{'\n'}1 x 7 = 7{'\n'}1 x 8 = 8{'\n'}1 x 9 = 9{'\n'}1 x 10 = 10
          </Text>
        )}
        {item.id === '2' && (
          <Text style={styles.equations}>
            2 x 1 = 2{'\n'}2 x 2 = 4{'\n'}2 x 3 = 6{'\n'}2 x 4 = 8{'\n'}2 x 5 = 10{'\n'}
            2 x 6 = 12{'\n'}2 x 7 = 14{'\n'}2 x 8 = 16{'\n'}2 x 9 = 18{'\n'}2 x 10 = 20
          </Text>
        )}
        {item.id === '3' && (
          <Text style={styles.equations}>
            3 x 1 = 3{'\n'}3 x 2 = 6{'\n'}3 x 3 = 9{'\n'}3 x 4 = 12{'\n'}3 x 5 = 15{'\n'}
            3 x 6 = 18{'\n'}3 x 7 = 21{'\n'}3 x 8 = 24{'\n'}3 x 9 = 27{'\n'}3 x 10 = 30
          </Text>
        )}
        {item.id === '4' && (
          <Text style={styles.equations}>
            4 x 1 = 4{'\n'}4 x 2 = 8{'\n'}4 x 3 = 12{'\n'}4 x 4 = 16{'\n'}4 x 5 = 20{'\n'}
            4 x 6 = 24{'\n'}4 x 7 = 28{'\n'}4 x 8 = 32{'\n'}4 x 9 = 36{'\n'}4 x 10 = 40
          </Text>
        )}
        {item.id === '5' && (
          <Text style={styles.equations}>
            5 x 1 = 5{'\n'}5 x 2 = 10{'\n'}5 x 3 = 15{'\n'}5 x 4 = 20{'\n'}5 x 5 = 25{'\n'}
            5 x 6 = 30{'\n'}5 x 7 = 35{'\n'}5 x 8 = 40{'\n'}5 x 9 = 45{'\n'}5 x 10 = 50
          </Text>
        )}
        {item.id === '6' && (
          <Text style={styles.equations}>
            6 x 1 = 6{'\n'}6 x 2 = 12{'\n'}6 x 3 = 18{'\n'}6 x 4 = 24{'\n'}6 x 5 = 30{'\n'}
            6 x 6 = 36{'\n'}6 x 7 = 42{'\n'}6 x 8 = 48{'\n'}6 x 9 = 54{'\n'}6 x 10 = 60
          </Text>
        )}
        {item.id === '7' && (
          <Text style={styles.equations}>
            7 x 1 = 7{'\n'}7 x 2 = 14{'\n'}7 x 3 = 21{'\n'}7 x 4 = 28{'\n'}7 x 5 = 35{'\n'}
            7 x 6 = 42{'\n'}7 x 7 = 49{'\n'}7 x 8 = 56{'\n'}7 x 9 = 63{'\n'}7 x 10 = 70
          </Text>
        )}
        {item.id === '8' && (
          <Text style={styles.equations}>
            8 x 1 = 8{'\n'}8 x 2 = 16{'\n'}8 x 3 = 24{'\n'}8 x 4 = 32{'\n'}8 x 5 = 40{'\n'}
            8 x 6 = 48{'\n'}8 x 7 = 56{'\n'}8 x 8 = 64{'\n'}8 x 9 = 72{'\n'}8 x 10 = 80
          </Text>
        )}
        {item.id === '9' && (
          <Text style={styles.equations}>
            9 x 1 = 9{'\n'}9 x 2 = 18{'\n'}9 x 3 = 27{'\n'}9 x 4 = 36{'\n'}9 x 5 = 45{'\n'}
            9 x 6 = 54{'\n'}9 x 7 = 63{'\n'}9 x 8 = 72{'\n'}9 x 9 = 81{'\n'}9 x 10 = 90
          </Text>
        )}
        {item.id === '10' && (
          <Text style={styles.equations}>
            10 x 1 = 10{'\n'}10 x 2 = 20{'\n'}10 x 3 = 30{'\n'}10 x 4 = 40{'\n'}10 x 5 = 50{'\n'}
            10 x 6 = 60{'\n'}10 x 7 = 70{'\n'}10 x 8 = 80{'\n'}10 x 9 = 90{'\n'}10 x 10 = 100
          </Text>       
        )}
      
      
      </View>
    </View>
  );

  return (
    <LinearGradient colors={gradientColors} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo}  source={require('../../assets/favicon.png')} />
          <Text>Learn Math Today</Text>
          <Text style={styles.headerTitle}>LET'S LEARN OUR NUMBERS!</Text>
        </View>
        <FlatList
          data={multiplication}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={1} 
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
  outerContainer: {
    flexDirection: 'row', // Aligns items in a row
    alignItems: 'center',
    justifyContent: 'center ',
    margin: 10,
    padding: 10,
    width: 260,
    alignSelf: 'center',
  },
  itemContainer: {
    flex: 1,
    backgroundColor: '#8BD68E',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    height: 180,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    position: 'relative', // Ensure the container is relatively positioned
    padding: 5, 
  },
  imageContainer: {
    marginRight: 10, // Adds space between the image and text container
    alignItems: 'center',
  },
  numberImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain', // Ensures the image stays within its bounds
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5, // Adds margin above the text
  },
  equations: {
    fontSize: 12, // Adjusted font size to fit the container
    color: '#000',
    textAlign: 'left',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
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

export default LESSONMULTIPLICATION;
