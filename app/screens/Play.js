import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { gradientColors } from '../screens/COLOR/color';

const Play = () => {
  const navigation = useNavigation();
  const handleNavigation = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <LinearGradient colors={gradientColors} style={styles.container}>
      <Image source={require('../assets/favicon.png')} style={styles.logo} />
      <View style={styles.header}>
        <Text style={styles.title}>Let's Play</Text>
      </View>
      {['COUNTING', 'SHAPE', 'ADDITION', 'SUBTRACTION', 'MULTIPLICATION', 'DIVISION'].map((lesson, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.button} 
          onPress={() => handleNavigation(lesson)}
        >
          <Text style={styles.buttonText}>{lesson.replace('_', ' ')}</Text>
        </TouchableOpacity>
      ))}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    width: 200,
    padding: 15,
    borderRadius: 25,
    backgroundColor: '#C9E91E',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Play;