import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { gradientColors } from '../screens/COLOR/color.js';
import { FIREBASE_AUTH } from '../../firebaseConfig.js';
import { createUserWithEmailAndPassword} from 'firebase/auth';

export default function SignupScreen() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false); // Added loading state
    const auth = FIREBASE_AUTH;
    const navigation = useNavigation();

    const handleSignIn =  () => {
        navigation.navigate("LOGIN");
    };
       

    const handleSignUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert('Sign Up Successful',response.message);
            navigation.navigate('LOGIN');
        } catch (error) {
            console.log(error);
            alert('Sign Up Failed: ' , error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <LinearGradient colors={gradientColors} style={styles.container}>
            <SafeAreaView style={styles.headerContainer}>
                <Text style={styles.title}>KUMON nahLEDGE</Text>
                <Image
                    source={require('../assets/favicon.png')}
                    style={styles.logo}
                />
                <Text style={styles.subtitle}>Learn Math Today</Text>
            </SafeAreaView>
            <View style={styles.formContainer}>
                <Text style={styles.signUpText}>Sign Up</Text>
                <View style={styles.inputGroup}>
                    <InputField label="Full Name" value={username} placeholder="John Doe" onChangeText={(text) => setUsername(text)} />
                    <InputField label="Email Address" value={email} placeholder="learnmath221@gmail.com" onChangeText={(text) => setEmail(text)} />
                    <InputField label="Password" value={password} placeholder="*************" onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>{loading ? 'Creating Account...' : 'Create Account'}</Text>
                </TouchableOpacity>
                <Text style={{
                    color: '#000000',
                    textAlign: 'center',
                    fontSize: 14,
                    marginTop: 20,
                }}>OR</Text>
                <TouchableOpacity onPress={handleSignIn}>
                    <Text style={styles.UnderlineText}>Already have an account? Log In</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const InputField = ({ label, value, placeholder, onChangeText, secureTextEntry }) => (
    <View style={styles.inputWrapper}>
        <Text>{label}</Text>
        <TextInput
            style={styles.input}
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 50,
        paddingTop: 30,
    },
    headerContainer: {
        height: 200,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 20,
    },
    title: {
        fontSize: 20,
        color: '#000',
        marginTop: 30,
        fontFamily: 'Jura-Bold',
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
        marginTop: 20,
    },
    signUpText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    inputGroup: {
        gap: 12,
        marginTop: 12,
        fontSize: 12,
        marginBottom: 15,
    },
    inputWrapper: {
        gap: 6,
    },
    input: {
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#fff',
        paddingLeft: 20,
    },
    button: {
        backgroundColor: '#000000',
        borderRadius: 50,
        paddingVertical: 15,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    UnderlineText: {
        textDecorationLine: 'underline',
        textAlign: 'center',
        color: '#0000FF',
        marginTop: 20,
    },
});