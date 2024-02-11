import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Modal, } from "react-native";
import { Feather, FontAwesome6, } from "@expo/vector-icons";
import Modalfile from "../Component/Modal";


const Home = ({ navigation }) => {

    const [showModal, setShowModal] = useState(false)
  
    return (
        <View style={Styles.containerMain}>    
            <Modalfile visible={showModal} onPress={() => setShowModal(false)} />
            <StatusBar hidden={true} />
            <View style={Styles.headerStyleMain}>
                <View style={Styles.headerStyleRow1}>
                    <TouchableOpacity style={Styles.touchFilterStyle} onPress={() => setShowModal(true)} >
                        <Feather name="filter" size={30} />
                    </TouchableOpacity>
                 
                </View>
                <View style={Styles.headerStyleRow2}>
                    <Text style={Styles.headerTextStyle}> Home</Text>
                </View>
                <TouchableOpacity style={Styles.headerStyleRow3} onPress={()=>navigation.navigate('Notification')}>
                    <Feather name={"bell"} size={30}  />
                   
                </TouchableOpacity>
                <TouchableOpacity style={Styles.headerStyleRow4} onPress={()=>navigation.navigate('History')}>
                <FontAwesome6 name='bars-progress' size={30}  />
                </TouchableOpacity>
            </View>

            <View style={Styles.titleContainer}>
                <Text style={Styles.titleText}>Upcomming</Text>
            </View>

            <View style={{ marginTop: 10, left: 10 }} >
                <Text style={Styles.week}>Fri</Text>
                <Text style={Styles.num}>3</Text>
            </View>

            <View style={{ marginTop: 10, left: 10 }} >
                <Text style={Styles.week2}>Sat</Text>
                <Text style={Styles.num1}>4</Text>
            </View>

            <View style={Styles.meetingContainer}>
                <Text style={{ fontSize: 20, color: '#003049' }}>Meeting For Business</Text>
                <Text style={{ color: '#6c757d' }}>7:35 - 8:30 P.M</Text>
                <Feather name='user' size={30} color={'#0096c7'} style={{ left: 240, bottom: 35 }} />
                <Text style={{ color: '#0096c7', left: 275, bottom: 65, fontSize: 25 }}>2</Text>
            </View>
    <View style={Styles.meetingContainer}>
                <Text style={{ fontSize: 20, color: '#003049' }}>Family Night Plan</Text>
                <Text style={{ color: '#6c757d' }}>9:00 - 11:30 P.M</Text>
                <Feather name='user' size={30} color={'#0096c7'} style={{ left: 240, bottom: 35 }} />
                <Text style={{ color: '#0096c7', left: 275, bottom: 65, fontSize: 25 }}>4</Text>
            </View>




            <TouchableOpacity style={Styles.plusButton} onPress={()=>navigation.navigate('AddMeeting')}>
                <Text style={{ color: '#fff', fontSize: 50, fontWeight: '200', bottom: 5, right: 1.5 }}>+</Text>
            </TouchableOpacity>


        </View>

    )
}

const Styles = StyleSheet.create({

    containerMain: { flex: 1, backgroundColor: '#dee2e6' },
    headerStyleMain: {
        height: 80,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        flexDirection: 'row',
    },
    headerTextStyle: { fontSize: 25, fontWeight: '500', },
    headerStyleRow1: { right:120 },
    headerStyleRow2: {  alignItems: 'center'},
    headerStyleRow3: {left: 90},
    headerStyleRow4: {left: 100},
    titleContainer: {
        borderLeftWidth: 3,
        borderLeftColor: 'blue',
        left: 10,
        marginTop: 10,
        paddingLeft: 10,

    },
    titleText: { fontSize: 30 },
    touchFilterStyle: { width: 30 },
    plusButton: {
        backgroundColor: 'blue',
        height: 60,
        width: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        top: 250,
        left: 320,
        elevation: 10
    },
    num: {
        fontSize: 20,
        height: 50,
        width: 50, backgroundColor: 'blue',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#fff',
        borderRadius: 50,

    },
    num1: {
        fontSize: 20,
        height: 30,
        width: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 50,

    },
    week: {
        width: 50,
        color: 'grey',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 3,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    week2: {
        width: 50,
        color: 'grey',
        fontSize: 18,
        marginTop: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    meetingContainer: {
        width: 320,
        height: 70,
        borderRadius: 20,
        backgroundColor: '#fff',
        left: 70,
        bottom: 150,
        paddingLeft: 12,
        paddingTop: 8,
        marginBottom:20
    }

})
export default Home


