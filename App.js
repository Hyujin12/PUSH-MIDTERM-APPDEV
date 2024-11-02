import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from './app/screens/GetStarted';
import LoginScreen from './app/screens/LoginScreen';
import Lessons from './app/screens/Lesson';
import SignUp from './app/screens/SignUp';
import MultiScreen from './app/screens/Games/MultiScreen';
import DiviScreen from './app/screens/Games/DiviScreen';
import AddiScreen from './app/screens/Games/AddiScreen';
import SubScreen from './app/screens/Games/SubScreen';
import LessonGuessShape from './app/screens/Lessons/SHAPE';
import LessonCountingNumbers from './app/screens/Lessons/COUNTING';
import ShapePlay from './app/screens/Games/ShapePlay';
import CountPlay from './app/screens/Games/CountPlay';
import LessonAddition from './app/screens/Lessons/ADDITION';
import LessonDivision from './app/screens/Lessons/DIVISION';
import LessonMultiplication from './app/screens/Lessons/MULTIPLICATION';
import LessonSubtraction from './app/screens/Lessons/SUBTRACTION';

const Stack = createNativeStackNavigator();

const loadFonts = async () => {
  await Font.loadAsync({
    'Jura-Regular': require('./app/assets/fonts/Jura/static/Jura-Regular.ttf'),
    'Jura-Bold': require('./app/assets/fonts/Jura/static/Jura-Bold.ttf'),
  });
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="GETSTARTED" component={GetStarted} />
        <Stack.Screen name="LOGIN" component={LoginScreen} />
        <Stack.Screen name="LESSONS" component={Lessons} />
        <Stack.Screen name="SIGNUP" component={SignUp} />
        <Stack.Screen name="MULTIPLICATION" component={MultiScreen} />
        <Stack.Screen name="DIVISION" component={DiviScreen} />
        <Stack.Screen name="ADDITION" component={AddiScreen} />
        <Stack.Screen name="SUBTRACTION" component={SubScreen} />
        <Stack.Screen name="LESSONSHAPE" component={LessonGuessShape} />
        <Stack.Screen name="LESSONCOUNTING" component={LessonCountingNumbers} />
        <Stack.Screen name="LESSONADDITION" component={LessonAddition} />
        <Stack.Screen name="LESSONSUBTRACTION" component={LessonSubtraction} />
        <Stack.Screen name="LESSONDIVISION" component={LessonDivision} />
        <Stack.Screen name="LESSONMULTIPLICATION" component={LessonMultiplication} />
        <Stack.Screen name="SHAPE" component={ShapePlay} />
        <Stack.Screen name="COUNTING" component={CountPlay} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
