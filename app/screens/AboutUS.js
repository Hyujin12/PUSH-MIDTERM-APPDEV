import {  StyleSheet, Text,  View, ScrollView,  Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const AboutUsScreen = () => {
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LinearGradient colors={['#8BD68E', '#28D039']} style={styles.gradient}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.welcome}>WELCOME to Kumon nahLEDGE!</Text>
        <Text style={styles.subheading}>Your Child's Math Learning Companion</Text>
        <Text style={styles.text}>
          Kumon nahLedge is designed to make learning math fun and engaging for elementary students. Our app offers interactive activities that build foundational math skills through playful challenges and exercises. With an easy-to-use interface and colorful design, children will enjoy exploring numbers, counting, addition, and subtraction at their own pace. Whether your child is just beginning their math journey or needs extra practice, Kumon nahLedge is here to support their learning every step of the way!
        </Text>
        <Image 
          source={require('../assets/favicon.png')} 
          style={styles.logo} 
        />

        <Text style={{
          fontSize: 36,
          fontWeight: 'bold',
        }}>Collaborators</Text>

        <View style={styles.collaborator} >
            <Text style={styles.Name}>Cherry Dublin</Text>
            <Text style={styles.Description} >PROJECT MANAGER</Text>
          <Image source={require('../assets/cherry.png')}style={styles.picture}/>
          <Text style={styles.text}>As the group's project manager, I keep the group in balance and make sure that decisions are made correctly. I also work on the application's home page and fix any grammar errors. I also support the group when they need it and check that each member is working on their own task. If the programmer needs to make changes in Figma, I also assist them when they need me.</Text>
        </View>
        <View style={styles.collaborator} >
            <Text style={styles.Name}>Albert Jr. Bandol</Text>
            <Text style={styles.Description} >COLOR SCHEME DESIGNER</Text>
          <Image source={require('../assets/Albert.png')}style={styles.picture}/>
          <Text style={styles.text}>First of all, I implemented Color theory and it's 60-30-10 rules in our project. 60% is for background, 30% for buttons and navigation and finally 10% is for typography. I researched carefully to match our theme with the required color for our project. I use extensions in my search engine called "Color Picker - Eyedropper Tool" to select the color that matches the project and I arrange it in order from light to dark color. In addition to this I am designing the user interface of application games. I refine the designs and elements needed to create a smooth, beautiful and friendly use figma interior.</Text>
          </View>
          <View style={styles.collaborator} >
            <Text style ={styles.Name}>James Carl Amodia</Text>
            <Text style={styles.Description} >TYPOGRAPHY DESIGNER</Text>
          <Image source={require('../assets/james.png')}style={styles.picture}/>
          <Text style={styles.text}>As a typography designer, I worked on selecting fonts and adjusting sizes to enhance readability. I laid out the landing page, organizing elements for a clean and welcoming first impression. Additionally, I managed the spacing to ensure all components are evenly placed for easy reading. I also designed sections to include interactive elements, incorporating arithmetic operations like addition and division to improve the user interface.</Text>
          </View>
          <View style={styles.collaborator} >
            <Text style={styles.Name}>Daniel Atolle</Text>
            <Text style={styles.Description} >OBJECT DESIGNER</Text>
          <Image source={require('../assets/daniel.png')}style={styles.picture}/>
          <Text style={styles.text}>The theme and other elements are created by me as an object designer to make our application more visually appealing. I also design and enter the numbers in Figma.</Text>
          </View>
          <View style={styles.collaborator} >
            <Text style={styles.Name}>John Paul Faderog</Text>
            <Text style={styles.Description} >DEVELOPER</Text>
          <Image source={require('../assets/johnpaul.png')}style={styles.picture}/>
          <Text style={styles.text}>I made interactive games for kids that they can play and answer using the knowledge they've gained from the courses. I also assisted the developer in making the application.</Text>
          </View>
          <View style={styles.collaborator} >
            <Text style={styles.Name}>Eugene Dianito</Text>
            <Text style={styles.Description} >OVERALL DESIGN, PLANNING, & DEVELOPER</Text>
          <Image source={require('../assets/eugene.png')}style={styles.picture}/>
          <Text style={styles.text}>I am the programmer of this application, the creator of the math courses for children, the manager and supervisor of the layout design in Figma, and I assist other member in Figma</Text>
          </View>
          

        
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
   
  },
  gradient: {
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 16,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingTop: 40,
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6347',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    textAlign: 'justify',
    marginHorizontal: 36.5
    
  },
  button: {
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  picture: {
    width: 50,
    height: 50,
    marginBottom: 16,
    justifyContent: 'center',
   
  },
  Description: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  collaborator: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#079FE0',
    padding: 16,
    
    
    
    
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    marginHorizontal: 120,
  },
  Name: {
    fontSize: 20,
        backgroundColor: '#C9E91E',
        borderWidth: 1,
        borderColor: '#000',
        paddingHorizontal: 10,
       
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    textAlign: 'justify',
    marginHorizontal: 36.5
  },
});

export default AboutUsScreen;