import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, Alert, TextInput, TouchableOpacity } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebasefile } from '../Firebase';
import firebase from 'firebase/compat/app';
import { Feather } from '@expo/vector-icons'
import { Foundation } from '@expo/vector-icons';


const Login = ({ navigation }) => {
    const [PhoneNumber, setPhoneNumer] = useState('')
    const [code, setCode] = useState('');
    const [verficationId, setVerificationId] = useState(null)
    const recaptchaVerfier = useRef(null);


    const sendVerficaton = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verfiyPhoneNumber(PhoneNumber, recaptchaVerfier.current)
            .then(setVerificationId);
        PhoneNumber('')
    };

    const confirmCode = () => {
        const credentail = firebase.auth.PhoneAuthCredential.credentail(
            verficationId,
            code
        )

        firebase.auth().signInWithCredential(credentail)
            .then(() => {
                setCode("");
            })
            .catch((error) => {
                //show an alert when error
                alert(error)
            })
        Alert.alert(
            'Login Success'
        )
    }

    return (

        <View style={styles.container}>
            <Image source={require('../assets/Logo.png')} style={styles.logoStyle} />
            <Image source={require('../assets/login.jpg')} style={styles.loginStyle} />

            <View style={styles.container2}>
                <TextInput style={styles.textInputStyle} placeholder='Mobile No.' keyboardType='number-pad' />
                <Feather name="users" size={30} style={styles.iconUser} color={"#adb5bd"} />
                <TouchableOpacity style={styles.touchOtpStyle}><Text style={styles.touchOtpText}>Send OTP</Text></TouchableOpacity>
            </View>
            <View style={styles.container3}>
                <TextInput style={styles.textInputStyle2} placeholder='Enter OTP' keyboardType='number-pad' />
                <Foundation name="key" size={30} style={styles.iconUser} color={"#adb5bd"} />
            </View>

            <TouchableOpacity style={styles.loginButtonStyle}>
                <Text style={styles.loginTextStyle}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    loginTextStyle: {
        color: '#ffff',
        fontSize: 20
    },
    loginButtonStyle: {
        backgroundColor: '#023e8a',
        width: 380,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
        borderRadius: 10
    },
    textInputStyle2: {
        height: 40,
        width: 250,
        backgroundColor: '#F5F5F5',
        color: '#003049',
        fontSize: 20,
        fontWeight: '300'
    },
    touchOtpText: {
        fontSize: 15,
        color: '#adb5bd',
        fontWeight: '500'
    },
    container3: {
        height: 65,
        width: 380,
        paddingLeft: 55,
        paddingTop: 12,
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
        marginTop: 20
    },
    touchOtpStyle: {
        left: 255,
        bottom: 60,
        width: 68,
    },
    iconUser: {
        right: 40,
        bottom: 34
    },
    textInputStyle: {
        height: 40,
        width: 250,
        borderRightWidth: 1,
        borderRightColor: '#6c757d',
        backgroundColor: '#F5F5F5',
        color: '#003049',
        fontSize: 20,
        fontWeight: '300'
    },
    container2: {
        height: 65,
        width: 380,
        paddingLeft: 55,
        paddingTop: 12,
        borderRadius: 10,
        backgroundColor: '#F5F5F5',
        marginTop: 150

    },
    loginStyle: {
        width: 300,
        height: 300,
        top: 90
    },
    logoStyle: {
        width: 190,
        height: 90,
        top: 50
    },
    styletxt: {
        color: 'white',
        fontSize: 18
    },
    loginTouch: {
        backgroundColor: 'blue',
        height: 50,
        width: 320,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        justifyContent: 'center'
    },
    enterOtp: {
        fontSize: 20,
        width: 205,
        height: 50,
        marginLeft: 50,
        marginTop: 5,
    },
    textInput: {
        fontSize: 20,
        width: 205,
        height: 50,
        marginLeft: 50,
        marginTop: 5,
        borderRightWidth: 1,
        borderRightColor: 'grey'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',


    },
});
export default Login