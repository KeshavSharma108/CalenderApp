import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, Image, Alert, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import firebase from 'firebase/compat/app';
import { Feather } from '@expo/vector-icons'
import { Foundation } from '@expo/vector-icons';
import FirebaseConfig from '../Firebase/FireBase';


const Login = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState()
    const [code, setCode] = useState('');
    const [codeError, setCodeError] = useState('')
    const [verficationId, setVerificationId] = useState(null)
    const recaptchaVerfier = useRef(null);


    const sendVerificaton = () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
            .verifyPhoneNumber(`+91${phoneNumber}`, recaptchaVerfier.current)
            .then(setVerificationId);
    };

    const confirmCode = () => {
    
        if (phoneNumber.length < 10 ) {
            return setPhoneNumberError('Please enter valid mobile number')
        }
        if (code.length < 6 ) {
           return setCodeError('Please enter valid code')
        }

        const credentail = firebase.auth.PhoneAuthProvider.credential(
            verficationId,
            code
        );
        firebase.auth().signInWithCredential(credentail)
            .then(() => {
                setCode("");
              
            })
            .catch((error) => {
                //show an alert when error
                alert('Error!', error)
            })
       
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={require('../assets/Logo.png')} style={styles.logoStyle} />
                <Image source={require('../assets/login.jpg')} style={styles.loginStyle} />

                <View style={styles.container2}>
                    <TextInput style={styles.textInputStyle} placeholder='Mobile No.' keyboardType='phone-pad'
                     onChangeText={(text) => {
                        setPhoneNumberError();
                        setPhoneNumber(text);
                        }} autoComplete='tel' maxLength={10} />
                    <Feather name="users" size={30} style={styles.iconUser} color={"#adb5bd"} />
                    <TouchableOpacity style={styles.touchOtpStyle}
                        onPress={sendVerificaton}>
                        <Text style={styles.touchOtpText}>Send OTP</Text>
                    </TouchableOpacity>
                </View>
                {phoneNumberError ? <Text style={{ color: 'red' }}>{phoneNumberError}</Text> : null}
                <View style={styles.container3}>
                    <TextInput style={styles.textInputStyle2}
                        placeholder='Enter OTP' keyboardType='phone-pad'
                        onChangeText={(text)=>{setCode(text); setCodeError();}} 
                        autoComplete='sms-otp' maxLength={6} />
                    <Foundation name="key" size={30} style={styles.iconUser} color={"#adb5bd"} />
                </View>
                {codeError ? <Text style={{ color: 'red' }}>{codeError}</Text> : null}
                <TouchableOpacity style={styles.loginButtonStyle} onPress={confirmCode}>
                    <Text style={styles.loginTextStyle}>Login</Text>
                </TouchableOpacity>

                <FirebaseRecaptchaVerifierModal
                    ref={recaptchaVerfier}
                    firebaseConfig={FirebaseConfig}
                />

            </View>
        </ScrollView>
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