import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';

export default function SignupScree() {
    const navigation = useNavigation();


    const handleSignIn = () => {
        navigation.navigate("LOGIN"); // Navigate to login screen
    };

    const handleSignUp = () => {
        navigation.navigate("LESSONS"); // Navigate to lessons screen after creating account
    };

    return (
        <LinearGradient colors={['#8BD68E', '#28D039']} style={styles.container}>
            <SafeAreaView style={styles.headerContainer}>
                <Text style={styles.title}>KUMON nahLEDGE</Text>
                <Image
                    source={require('../assets/favicon.png')} // Ensure the path to your logo is correct
                    style={styles.logo}
                />
                <Text style={styles.subtitle}>Learn Math Today</Text>
            </SafeAreaView>
            <View style={styles.formContainer}>
                <Text style={styles.signUpText}>Sign Up</Text>
                <View style={styles.inputGroup}>
                     
                    <InputField label="Full Name" placeholder="John Doe" />
                    <InputField label="Email Address" placeholder="learnmath221@gmail.com" />
                    <InputField label="Password" placeholder="***************" secureTextEntry={true} />
                </View>
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
                    <Text style={{
                        color: '#000000',
                        textAlign: 'center',
                        fontSize: 14,
                         marginTop: 20,
                    }}>OR</Text>
                <TouchableOpacity onPress={handleSignIn}>
                    <Text style={styles.UnderlineText}>Already have an account?  Log In</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const InputField = ({ label, placeholder, secureTextEntry }) => (
    <View style={styles.inputWrapper}>
        <Text>{label}</Text>
        <TextInput
            style={styles.input}
            placeholder={placeholder}
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
