import { Button, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, Image } from 'react-native';
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
          <Text>The project manager is responsible for overseeing the successful development and implementation of our projects. With a keen eye for detail and a strong background in project management, they expertly facilitate communication between team members, ensuring that project milestones are met on time and within scope. They play a critical role in organizing tasks, coordinating efforts, and addressing any challenges that arise, all while keeping the team motivated and focused. Their leadership ensures that every aspect of the project progresses smoothly, resulting in high-quality outcomes.</Text>
        </View>
        <View style={styles.collaborator} >
            <Text style={styles.Name}>Albert Jr. Bandol</Text>
            <Text style={styles.Description} >COLOR SCHEME DESIGNER</Text>
          <Image source={require('../assets/Albert.png')}style={styles.picture}/>
          <Text>This is the person who manages the selection of colors for our projects. He carefully chooses palettes that are both visually appealing and functional, ensuring the design is cohesive and enhances the overall user experience. With his deep understanding of color theory and design principles, he makes sure that the colors not only align with our brand but also create a harmonious and engaging interface. His work is what makes our projects truly stand out!</Text>
          </View>
          <View style={styles.collaborator} >
            <Text style ={styles.Name}>James Carl Amodia</Text>
            <Text style={styles.Description} >TYPOGRAPHY DESIGNER</Text>
          <Image source={require('../assets/james.png')}style={styles.picture}/>
          <Text>This is the person responsible for designing the lessons in our project. He carefully crafts engaging and educational content that is tailored to meet the needs of our target audience. With a deep understanding of instructional design and pedagogy, he ensures that the lessons are not only informative but also interactive and easy to follow. His work is crucial in creating an enjoyable and effective learning experience, making sure that each lesson is both accessible and impactful for the students. </Text>
          </View>
          <View style={styles.collaborator} >
            <Text style={styles.Name}>Daniel Atolle</Text>
            <Text style={styles.Description} >OBJECT DESIGNER</Text>
          <Image source={require('../assets/daniel.png')}style={styles.picture}/>
          <Text>This is the person responsible for designing the lessons in our project. He carefully crafts engaging and educational content that is tailored to meet the needs of our target audience. With a deep understanding of instructional design and pedagogy, he ensures that the lessons are not only informative but also interactive and easy to follow. His work is crucial in creating an enjoyable and effective learning experience, making sure that each lesson is both accessible and impactful for the students. </Text>
          </View>
          <View style={styles.collaborator} >
            <Text style={styles.Name}>John Paul Faderog</Text>
            <Text style={styles.Description} >DEVELOPER</Text>
          <Image source={require('../assets/johnpaul.png')}style={styles.picture}/>
          <Text>This is the person responsible for designing the lessons in our project. He carefully crafts engaging and educational content that is tailored to meet the needs of our target audience. With a deep understanding of instructional design and pedagogy, he ensures that the lessons are not only informative but also interactive and easy to follow. His work is crucial in creating an enjoyable and effective learning experience, making sure that each lesson is both accessible and impactful for the students. </Text>
          </View>
          <View style={styles.collaborator} >
            <Text style={styles.Name}>Eugene Dianito</Text>
            <Text style={styles.Description} >OVERALL DESIGN, PLANNING, & DEVELOPER</Text>
          <Image source={require('../assets/eugene.png')}style={styles.picture}/>
          <Text>This is the person responsible for designing the lessons in our project. He carefully crafts engaging and educational content that is tailored to meet the needs of our target audience. With a deep understanding of instructional design and pedagogy, he ensures that the lessons are not only informative but also interactive and easy to follow. His work is crucial in creating an enjoyable and effective learning experience, making sure that each lesson is both accessible and impactful for the students. </Text>
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
       
  }
});

export default AboutUsScreen;