import React from "react";
import { View, StyleSheet, Text, TouchableOpacity ,Image} from "react-native"
import { AntDesign } from "@expo/vector-icons";

const Notification = ({ navigation }) => {
    return (
        <View style={Style.containerMain}>
            <View style={Style.notificationHeader}>
                <Text style={Style.notificationText}>
                    Notifications
                </Text>
                <TouchableOpacity style={{ width: 30, right: 240 }} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={30} />
                </TouchableOpacity>
            </View>
            <View style={Style.subContainer}>
                <Image source={require('../assets/ALogo.jpg')}  style/>
                <View style={{ left: 80, flex: 1, top: 15 }}>
                    <Text style={{ fontSize: 18, }}> Abhishek scheduled a meeting</Text>
                    <Text style={{ fontSize: 15 }}> 25th December, 2023</Text>
                    <TouchableOpacity style={Style.touchDecline}>
                        <Text style={{ color: '#fff' }}>Decline</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.touchAccept}>
                        <Text style={{ color: '#fff' }}>Accept</Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'grey', left:273,bottom:112}}>6:00 P.M</Text>
                </View>
            </View>
        </View>
    )
}

export default Notification



const Style = StyleSheet.create({
    containerMain: { flex: 1, backgroundColor: '#dee2e6' },
    notificationHeader: {
        height: 80,
        width: '100%',
        borderBottomWidth: 3,
        borderBottomColor: '#adb5bd',
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    notificationText: {
        fontSize: 20,
        fontWeight: '500'

    },
    subContainer: {
        height: 120,
        width: '100%',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',

    }, touchDecline: {
        height: 25,
        width: 100,
        backgroundColor: '#bc4749',
        marginTop: 10,
        left: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        top: 5

    }, touchAccept: {
        height: 25,
        width: 100,
        backgroundColor: '#023e8a',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        left: 110,
        bottom: 30

    }
})

