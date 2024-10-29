import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Play from './Play'; // Import the Play component
import AboutUs from './AboutUS'; // Import the About Us component

// About Screen with buttons for Multiplication, Division, etc.
const AboutScreen = () => {
  const navigation = useNavigation();
  const handleNavigation = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <LinearGradient colors={['#a8e063', '#56ab2f']} style={styles.container}>
      <Image source={require('../assets/favicon.png')} style={styles.logo} />
      <View style={styles.header}>
        <Text style={styles.title}>Learn Math Today</Text>
      </View>
      {/* Navigation to Play Screen */}
      <TouchableOpacity style={styles.button} onPress={() => handleNavigation("Play")}>
        <Text style={styles.buttonText}>PLAY</Text>
      </TouchableOpacity>
      {/* Navigation to About Us Screen */}
      <TouchableOpacity style={styles.button} onPress={() => handleNavigation("AboutUs")}>
        <Text style={styles.buttonText}>ABOUT US</Text>
      </TouchableOpacity>
      {/* Navigation to Lessons */}
      {['LESSONMULTIPLICATION', 'LESSONDIVISION', 'LESSONADDITION', 'LESSONSUBTRACTION', 'LESSONCOUNTING', 'SHAPE'].map((lesson, index) => (
        <TouchableOpacity key={index} style={styles.button} onPress={() => handleNavigation(lesson)}>
          <Text style={styles.buttonText}>{lesson.replace('LESSON', ' ')}</Text>
        </TouchableOpacity>
      ))}
    </LinearGradient>
  );
};

// Lesson Screen with navigation to individual lessons
const LessonScreen = () => {
  const navigation = useNavigation();
  const handleNavigation = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <LinearGradient colors={['#a8e063', '#56ab2f']} style={styles.container}>
      <Image source={require('../assets/favicon.png')} style={styles.logo} />
      <View style={styles.header}>
        <Text style={styles.title}>Choose a Lesson</Text>
      </View>
      {['LESSONCOUNTING', 'LESSONSHAPE', 'LESSONADDITION', 'LESSONSUBTRACTION', 'LESSONMULTIPLICATION', 'LESSONDIVISION'].map((lesson, index) => (
        <TouchableOpacity key={index} style={styles.button} onPress={() => handleNavigation(lesson)}>
          <Text style={styles.buttonText}>{lesson.replace('LESSON', ' ')}</Text>
        </TouchableOpacity>
      ))}
    </LinearGradient>
  );
};

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Lesson') {
            iconName = focused ? 'pencil' : 'pencil-outline';
          } else if (route.name === 'Play') {
            iconName = focused ? 'play-circle' : 'play-circle-outline';
          } else if (route.name === 'About Us') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Lesson" component={LessonScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Play" component={Play} options={{ headerShown: false }} />
      <Tab.Screen name="About Us" component={AboutUs} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

// Styles
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

export default App;