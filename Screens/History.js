import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { AntDesign } from "@expo/vector-icons";
import TimeDisplay from "../Component/Time";

const History = ({ navigation }) => {
    return (
     
        <View style={Style.containerMain}>
            <View style={Style.historyHeader}>
                <Text style={Style.historyText}>
                    History
                </Text>
                <TouchableOpacity style={{ width: 30, right: 220 }} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={30} />
                </TouchableOpacity>
            </View>
            <View style={Style.subContainer}>
                <View style={{ left: 20, top: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: '300', color: 'grey', }}>Sat</Text>
                    <Text style={{ fontSize: 22, fontWeight: '500', }}>4</Text>
                </View>

                <View style={{ left: 25, top: 15 }} >
                    <Text style={{ fontSize: 15, fontWeight: '700' }}> Abhishek scheduled a meeting on 4 Saturday,2023.</Text>
                    <Text> Click for Details</Text>
                    <View style={{ left: 280, top: 5 }}><TimeDisplay /></View>
                </View>
            </View>
        </View>

    )
}

export default History



const Style = StyleSheet.create({
    containerMain: { flex: 1, backgroundColor: '#dee2e6' },
    historyHeader: {
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: "center",
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    historyText: {
        fontSize: 20,
        fontWeight: '500'

    }, subContainer: {
        height: 80,
        width: '100%',
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        marginTop: 3,
        flexDirection: 'row'



    },
})

