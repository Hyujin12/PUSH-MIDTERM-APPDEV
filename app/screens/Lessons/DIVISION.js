import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { gradientColors } from '../COLOR/color';

const division = [
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

const LESSONDIVISION = () => {
  const renderItem = ({ item }) => (
    <View style={styles.outerContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.number} style={styles.numberImage} />
        <Text style={styles.text}>{item.name}</Text>
      </View>
      <View style={styles.itemContainer}>
        {item.id === '1' && (
          <Text style={styles.equations}>
            1 / 1 = 1{'\n'}1 / 2 = 0.5{'\n'}1 / 3 = 0.33{'\n'}1 / 4 = 0.25{'\n'}1 / 5 = 0.20{'\n'}
            1 / 6 = 0.17{'\n'}1 / 7 = 0.14{'\n'}1 / 8 = 0.13{'\n'}1 / 9 = 0.11{'\n'}1 / 10 = 0.10
          </Text>
        )}
        {item.id === '2' && (
          <Text style={styles.equations}>
            2 / 1 = 2{'\n'}2 / 2 = 1{'\n'}2 / 3 = 0.67{'\n'}2 / 4 = 0.5{'\n'}2 / 5 = 0.40{'\n'}
            2 / 6 = 0.33{'\n'}2 / 7 = 0.29{'\n'}2 / 8 = 0.25{'\n'}2 / 9 = 0.22{'\n'}2 / 10 = 0.20
          </Text>
        )}
        {item.id === '3' && (
          <Text style={styles.equations}>
            3 / 1 = 3{'\n'}3 / 2 = 1.5{'\n'}3 / 3 = 1{'\n'}3 / 4 = 0.75{'\n'}3 / 5 = 0.60{'\n'}
            3 / 6 = 0.50{'\n'}3 / 7 = 0.43{'\n'}3 / 8 = 0.38{'\n'}3 / 9 = 0.33{'\n'}3 / 10 = 0.30
          </Text>
        )}
        {item.id === '4' && (
          <Text style={styles.equations}>
            4 / 1 = 4{'\n'}4 / 2 = 2{'\n'}4 / 3 = 1.33{'\n'}4 / 4 = 1{'\n'}4 / 5 = 0.80{'\n'}
            4 / 6 = 0.67{'\n'}4 / 7 = 0.57{'\n'}4 / 8 = 0.50{'\n'}4 / 9 = 0.44{'\n'}4 / 10 = 0.40
          </Text>   
        )}
        {item.id === '5' && (
          <Text style={styles.equations}>
            5 / 1 = 5{'\n'}5 / 2 = 2.5{'\n'}5 / 3 = 1.67{'\n'}5 / 4 = 1.25{'\n'}5 / 5 = 1{'\n'}
            5 / 6 = 0.83{'\n'}5 / 7 = 0.71{'\n'}5 / 8 = 0.62{'\n'}5 / 9 = 0.56{'\n'}5 / 10 = 0.50          
          </Text>
        )}
        {item.id === '6' && (
          <Text style={styles.equations}>
            6 / 1 = 6{'\n'}6 / 2 = 3{'\n'}6 / 3 = 2{'\n'}6 / 4 = 1.5{'\n'}6 / 5 = 1.20{'\n'}
            6 / 6 = 1{'\n'}6 / 7 = 0.86{'\n'}6 / 8 = 0.75{'\n'}6 / 9 = 0.67{'\n'}6 / 10 = 0.60
          </Text>
        )}
        {item.id === '7' && (
          <Text style={styles.equations}>
            7 / 1 = 7{'\n'}7 / 2 = 3.5{'\n'}7 / 3 = 2.33{'\n'}7 / 4 = 1.75{'\n'}7 / 5 = 1.40{'\n'}
            7 / 6 = 1.17{'\n'}7 / 7 = 1{'\n'}7 / 8 = 0.88{'\n'}7 / 9 = 0.78{'\n'}7 / 10 = 0.70
          </Text>
        )}
        {item.id === '8' && (
          <Text style={styles.equations}>
            8 / 1 = 8{'\n'}8 / 2 = 4{'\n'}8 / 3 = 2.67{'\n'}8 / 4 = 2{'\n'}8 / 5 = 1.60{'\n'}
            8 / 6 = 1.33{'\n'}8 / 7 = 1.14{'\n'}8 / 8 = 1{'\n'}8 / 9 = 0.89{'\n'}8 / 10 = 0.80
          </Text>
        )}
        {item.id === '9' && (
          <Text style={styles.equations}>
            9 / 1 = 9{'\n'}9 / 2 = 4.5{'\n'}9 / 3 = 3.33{'\n'}9 / 4 = 2.75{'\n'}9 / 5 = 2.20{'\n'}  
            9 / 6 = 1.83{'\n'}9 / 7 = 1.57{'\n'}9 / 8 = 1.38{'\n'}9 / 9 = 1{'\n'}9 / 10 = 0.90
          </Text>
        )}
        {item.id === '10' && (
          <Text style={styles.equations}>
            10 / 1 = 10{'\n'}10 / 2 = 5{'\n'}10 / 3 = 3.67{'\n'}10 / 4 = 2.50{'\n'}10 / 5 = 2.00{'\n'}
            10 / 6 = 1.67{'\n'}10 / 7 = 1.43{'\n'}10 / 8 = 1.25{'\n'}10 / 9 = 1.11{'\n'}10 / 10 = 1
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
          data={division}
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
    width:260,
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

export default LESSONDIVISION;
