import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const GetStarted = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate("LOGIN");
  };

  return (
    <LinearGradient colors={['#8BD68E', '#28D039']} style={styles.container}>
     
      <View style={styles.headerContainer}>
        <Text style={styles.title}>KUMON nahLEDGE</Text>
        <Image
          source={require('../assets/favicon.png')} 
          style={styles.logo}
        />
      </View>

      {/* The description fills the middle space */}
      <View style={styles.formContainer}>
        <Text style={styles.Message}>
          In this fun and engaging math journey, our app will explore some of the most important topics that will help you build a strong math foundation. Here's what you can expect:
          {"\n\n"}1. Counting Numbers:We’ll start by learning how to count from 1 and beyond. Counting is the first step to understanding all math concepts
          {"\n"}2. Shapes: Discover the wonderful world of shapes! Circles, squares, triangles, and more are all around us. You’ll learn how to identify and understand different shapes.
          {"\n"}3. Addition: Next we’ll learn how to add numbers together. Addition is like putting things together to see how many we have in total.
          {"\n"}4. Subtraction: Sometimes, we need to take things away, and that’s where subtraction comes in. We’ll figure out how many are left when we subtract.
          {"\n"}5. Multiplication: Imagine you have several groups of the same number. Multiplication will show you how to quickly find the total amount, without adding again and again!
          {"\n"}6. Division: Finally, we’ll explore division, which is all about sharing things equally It helps us figure out how many are in each group.
        </Text>
      </View>

      {/* Button positioned at the bottom of the screen */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.GetStartedbutton} onPress={handleGetStarted}>
          <Text style={styles.GetStartedbuttonText}>Get Started!!</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: 40, // Add padding to push content down a bit
  },
  title: {
    fontSize: 36,
    fontFamily:'Jura-Regular',
  },
  logo: {
    width: 160,
    height: 160,
    marginVertical: 10,
  },
  

  formContainer: {
    marginTop: 30,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  Message: {
    fontSize: 12,
    textAlign: 'justify',
  },
  buttonContainer: {
    position: 'absolute', 
    bottom: 80, // Position the button at the bottom
    left: 0,
    right: 0,
    alignItems: 'center', // Center the button horizontally
  },
  GetStartedbutton: {
    backgroundColor: '#000',
    borderRadius: 30,
    width: 255,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  GetStartedbuttonText: {
    fontSize: 36,
    fontWeight: 'bold',
   justifyContent: 'center',
   color: '#fff',
   
  },
});

export default GetStarted;
