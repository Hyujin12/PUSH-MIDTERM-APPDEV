import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { gradientColors } from '../COLOR/color';

const addition = [
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

const LESSONADDITION = () => {
  const renderItem = ({ item }) => (
    <View style={styles.outerContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.number} style={styles.numberImage} />
        <Text style={styles.text}>{item.name}</Text>
      </View>
      <View style={styles.itemContainer}>
        {item.id === '1' && (
          <Text style={styles.equations}>
            1 + 1 = 2{'\n'}1 + 2 = 3{'\n'}1 + 3 = 4{'\n'}1 + 4 = 5{'\n'}1 + 5 = 6{'\n'}
            1 + 6 = 7{'\n'}1 + 7 = 8{'\n'}1 + 8 = 9{'\n'}1 + 9 = 10{'\n'}1 + 10 = 11
          </Text>
        )}
        {item.id === '2' && (
          <Text style={styles.equations}>
            2 + 1 = 3{'\n'}2 + 2 = 4{'\n'}2 + 3 = 5{'\n'}2 + 4 = 6{'\n'}2 + 5 = 7{'\n'}
            2 + 6 = 8{'\n'}2 + 7 = 9{'\n'}2 + 8 = 10{'\n'}2 + 9 = 11{'\n'}2 + 10 = 12
          </Text>
        )}
        {item.id === '3' && (
          <Text style={styles.equations}>
            3 + 1 = 4{'\n'}3 + 2 = 5{'\n'}3 + 3 = 6{'\n'}3 + 4 = 7{'\n'}3 + 5 = 8{'\n'}
            3 + 6 = 9{'\n'}3 + 7 = 10{'\n'}3 + 8 = 11{'\n'}3 + 9 = 12{'\n'}3 + 10 = 13
          </Text>
        )}
        {item.id === '4' && (
          <Text style={styles.equations}>
            4 + 1 = 5{'\n'}4 + 2 = 6{'\n'}4 + 3 = 7{'\n'}4 + 4 = 8{'\n'}4 + 5 = 9{'\n'}
            4 + 6 = 10{'\n'}4 + 7 = 11{'\n'}4 + 8 = 12{'\n'}4 + 9 = 13{'\n'}4 + 10 = 14
          </Text>
        )}
        {item.id === '5' && (
          <Text style={styles.equations}>
            5 + 1 = 6{'\n'}5 + 2 = 7{'\n'}5 + 3 = 8{'\n'}5 + 4 = 9{'\n'}5 + 5 = 10{'\n'}
            5 + 6 = 11{'\n'}5 + 7 = 12{'\n'}5 + 8 = 13{'\n'}5 + 9 = 14{'\n'}5 + 10 = 15
          </Text>
        )}
        {item.id === '6' && (
          <Text style={styles.equations}>
            6 + 1 = 7{'\n'}6 + 2 = 8{'\n'}6 + 3 = 9{'\n'}6 + 4 = 10{'\n'}6 + 5 = 11{'\n'}
            6 + 6 = 12{'\n'}6 + 7 = 13{'\n'}6 + 8 = 14{'\n'}6 + 9 = 15{'\n'}6 + 10 = 16
          </Text>
        )}
        {item.id === '7' && (
          <Text style={styles.equations}>
            7 + 1 = 8{'\n'}7 + 2 = 9{'\n'}7 + 3 = 10{'\n'}7 + 4 = 11{'\n'}7 + 5 = 12{'\n'}
            7 + 6 = 13{'\n'}7 + 7 = 14{'\n'}7 + 8 = 15{'\n'}7 + 9 = 16{'\n'}7 + 10 = 17
          </Text>
        )}
        {item.id === '8' && (
          <Text style={styles.equations}>
            8 + 1 = 9{'\n'} 8 + 2 = 10{'\n'}8 + 3 = 11{'\n'}8 + 4 = 12{'\n'}8 + 5 = 13{'\n'}
            8 + 6 = 14{'\n'}8 + 7 = 15{'\n'}8 + 8 = 16{'\n'}8 + 9 = 17{'\n'}8 + 10 = 18
          </Text>
        )}
        {item.id === '9' && (
          <Text style={styles.equations}>
            9 + 1 = 10{'\n'}9 + 2 = 11{'\n'}9 + 3 = 12{'\n'}9 + 4 = 13{'\n'}9 + 5 = 14{'\n'}
            9 + 6 = 15{'\n'}9 + 7 = 16{'\n'}9 + 8 = 17{'\n'}9 + 9 = 18{'\n'}9 + 10 = 19
          </Text>
        )}
        {item.id === '10' && (
          <Text style={styles.equations}>
            10 + 1 = 11{'\n'}10 + 2 = 12{'\n'}10 + 3 = 13{'\n'}10 + 4 = 14{'\n'}10 + 5 = 15{'\n'}
            10 + 6 = 16{'\n'}10 + 7 = 17{'\n'}10 + 8 = 18{'\n'}10 + 9 = 19{'\n'}10 + 10 = 20
          </Text>
        )}
      </View>
    </View>
  );

  return (
    <LinearGradient colors={gradientColors} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('../../assets/favicon.png')} />
          <Text>Learn Math Today</Text>
          <Text style={styles.headerTitle}>LET'S LEARN OUR NUMBERS!</Text>
        </View>
        <FlatList
          data={addition}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={1} // Keeps two items in a row
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
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
    padding: 10,
    width: 260
   

  },
  itemContainer: {
    flex: 1,
    backgroundColor: '#8BD68E',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 290,
    height: 180,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    position: 'relative', // Ensure the container is relatively positioned
    padding: 5, // Adds padding to ensure text fits well
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
    marginBottom: 10,
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

export default LESSONADDITION;
