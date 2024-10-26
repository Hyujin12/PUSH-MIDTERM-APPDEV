import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const shapes = [
  { name: 'circle', image: require('../../assets/shapes/circle.png') },
  { name: 'diamond', image: require('../../assets/shapes/diamond.png') },
  { name: 'heptagon', image: require('../../assets/shapes/heptagon.png') },
  { name: 'octagon', image: require('../../assets/shapes/octagon.png') },
  { name: 'pentagon', image: require('../../assets/shapes/pentagon.png') },
  { name: 'rectangle', image: require('../../assets/shapes/rectangle.png') },
  { name: 'square', image: require('../../assets/shapes/square.png') },
  { name: 'star', image: require('../../assets/shapes/star.png') },
  { name: 'triangle', image: require('../../assets/shapes/triangle.png') },
];

const getRandomShapes = (num) => {
  let randomShapes = [];
  for (let i = 0; i < num; i++) {
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    randomShapes.push(randomShape);
  }
  return randomShapes;
};

const CountPlay = () => {
  const navigation = useNavigation();
  const [randomShapes, setRandomShapes] = useState([]);
  const [targetShape, setTargetShape] = useState(null);
  const [choices, setChoices] = useState([]);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [isGameOver, setIsGameOver] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const timer = useRef(null);

  useEffect(() => {
    startNewGame();
    startTimer();
    return () => clearInterval(timer.current); // Clear timer on unmount
  }, []);

  useEffect(() => {
    if (isGameOver) {
      showScoreAlert();
    }
  }, [isGameOver]); // Show alert when game is over

  const startTimer = () => {
    timer.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer.current);
          setIsGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const startNewGame = () => {
    const shapesToDisplay = getRandomShapes(20); // Display 20 random shapes
    setRandomShapes(shapesToDisplay);
    const randomShapeToCount = shapes[Math.floor(Math.random() * shapes.length)];
    setTargetShape(randomShapeToCount);
    
    const correctCount = shapesToDisplay.filter(shape => shape.name === randomShapeToCount.name).length;

    // Generate unique incorrect answer
    let incorrectCount;
    do {
      incorrectCount = correctCount + Math.floor(Math.random() * 5) - 2; // Generate an incorrect answer
    } while (incorrectCount === correctCount || incorrectCount < 0); // Ensure it's not the same as correct and is non-negative

    const allChoices = [correctCount, incorrectCount].sort(() => Math.random() - 0.5);
    setChoices(allChoices);
    setSelectedChoice(null);
    setIsCorrect(null);
  };

  const handleAnswer = (choice) => {
    if (!isGameOver) {
      setSelectedChoice(choice);
      const correctCount = randomShapes.filter(shape => shape.name === targetShape.name).length;
      const correctChoice = choice === correctCount;
      setIsCorrect(correctChoice);
      if (correctChoice) {
        setScore(score + 1);
        // Optionally, add 5 seconds to the timer for a correct answer
      }
      setTimeout(() => {
        startNewGame(); // Generate a new question after a short delay
      }, 1000); // Delay to show the result
    }
  };

  const showScoreAlert = () => {
    Alert.alert(
      "Time's up!",
      `Your final score is: ${score}`,
      [
        { text: "Try Again", onPress: restartGame },
        { text: "Exit", onPress: () => navigation.goBack() }
      ]
    );
  };

  const restartGame = () => {
    setScore(0);
    setTimeRemaining(30);
    setIsGameOver(false);
    startNewGame();
    startTimer(); // Start the timer again
  };

  return (
    <LinearGradient colors={['#ffcc00', '#ff6699']} style={styles.container}>
      <Text style={styles.score}>{isGameOver ? `Final Score: ${score}` : `Score: ${score}`}</Text>
      <Text style={styles.timer}>Time Remaining: {timeRemaining}s</Text>
      {targetShape && <Text style={styles.question}>How many {targetShape.name}s are there?</Text>}
      <View style={styles.shapeContainer}>
        {randomShapes.map((shape, index) => (
          <Image key={index} source={shape.image} style={styles.shapeImage} />
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {choices.map((choice, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.button,
              selectedChoice === choice && (isCorrect ? styles.correctButton : styles.incorrectButton)
            ]}
            onPress={() => handleAnswer(choice)}
            disabled={isGameOver}
          >
            <Text style={styles.buttonText}>{choice}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    fontSize: 40,
    marginBottom: 20,
    marginTop: 20,
  },
  score: {
    fontSize: 50,
    marginBottom: 10,
    marginTop: 20,
  },
  question: {
    fontSize: 30,
    marginBottom: 20,
  },
  shapeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '90%',
    marginBottom: 20,
  },
  shapeImage: {
    width: 50,
    height: 50,
    margin: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 5,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 24,
    textAlign: 'center',
  },
  correctButton: {
    backgroundColor: 'green',
  },
  incorrectButton: {
    backgroundColor: 'red',
  },
});

export default CountPlay;
