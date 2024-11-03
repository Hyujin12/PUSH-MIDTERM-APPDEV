import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { gradientColors } from '../screens/COLOR/color';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../../firebaseConfig';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();
    const auth = FIREBASE_AUTH;

    const handleSignIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            navigation.navigate('LESSONS'); // Navigate to the home screen on successful login
        } catch (error) {
            console.log(error);
            alert('Sign In Failed', error.message); // Show error message
        } finally {
            setLoading(false);
        }
    };

    const handleSignUp = () => {
        navigation.navigate("SIGNUP"); // Navigate to Sign Up screen
    };

    return (
        <LinearGradient colors={gradientColors} style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>KUMON nahLEDGE</Text>
                <Image
                    source={require('../assets/favicon.png')}
                    style={styles.logo}
                />
                <Text style={styles.subtitle}>Learn Math Today</Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.signInText}>Log In To Your Account</Text>
                <View style={styles.inputGroup}>
                    <InputField label="Email Address" placeholder="learnmath221@gmail.com" value={email} onChangeText={setEmail} />
                    <InputField label="Password" placeholder="*************" secureTextEntry={true} value={password} onChangeText={setPassword} />
                </View>

                <TouchableOpacity style={styles.Loginbutton} onPress={handleSignIn} disabled={loading}>
                    <Text style={styles.LoginbuttonText}>{loading ? 'Logging In...' : 'Log In'}</Text>
                </TouchableOpacity>
                <Text style={styles.orText}>OR</Text>

                <TouchableOpacity style={styles.Signupbutton} onPress={handleSignUp} disabled={loading}>
                    <Text style={styles.SignupUnderlineText}>Don't Have An Account? Sign Up</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const InputField = ({ label, placeholder, secureTextEntry, value, onChangeText }) => (
    <View style={styles.inputWrapper}>
        <Text>{label}</Text>
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onChangeText}
        />
    </View>
);


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            padding: 50,
          
        },
        headerContainer: {
            height: 100,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 10,
            
          
        },
        title: {
            fontSize: 20,
            color: '#000',
            marginTop: 30,
            fontFamily:'Jura-Bold',
        },
        logo: {
            height: 70,
            width: 70,
          
        },
        subtitle: {
            color: '#000000',
            textAlign: 'center',
            fontSize: 15,
            gap: 1,
            
        },
        formContainer: {
            marginBottom: 50,
        },
        signInText: {
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'flex-start',
           paddingRight:90,
           marginTop: 50,
           paddingVertical:33,
        },
        inputGroup: {
            gap: 12,
            marginTop: 12,
            fontSize: 12,
        },
        inputWrapper: {
            gap: 6,
        },
        input: {
            padding: 10,
            borderRadius: 50,
            backgroundColor: '#fff',
            paddingLeft:20,
        },
        Loginbutton: {
            backgroundColor: '#000000',
            borderRadius: 50,
            paddingVertical: 15,
            marginTop: 50,
            alignItems: 'center',
        },
        LoginbuttonText: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
        },
        
        SignupUnderlineText: {
            color: '#0000FF',
            fontSize: 12,
            textDecorationLine: 'underline',
            textAlign: 'center',
            
        },
        orText: {
            color: '#fff', 
            textAlign: 'center',
            marginVertical:20  ,
            fontSize: 12,
           
        },
    });
    
 

export default LoginScreen;
