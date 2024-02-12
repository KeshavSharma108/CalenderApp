import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { Entypo, Feather, FontAwesome6, AntDesign } from "@expo/vector-icons";
import DateTimePicker from 'react-native-modal-datetime-picker';
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";

const MeetingConfirm = ({ navigation, }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [isTimePickerVisible2, setTimePickerVisibility2] = useState(false);
    const [selectDate, setSelectDate] = useState()
    const [selectDate2, setSelectDate2] = useState()
    const [selectTime, setSelectTime] = useState()
    const [selectTime2, setSelectTime2] = useState()




    //For Date
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const showDatePicker2 = () => {
        setDatePickerVisibility2(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const hideDatePicker2 = () => {
        setDatePickerVisibility2(false);
    };

    const handleConfirm = date => {
        setSelectDate(date)
        hideDatePicker();
    };
    const handleConfirm2 = date2 => {
        setSelectDate2(date2)
        hideDatePicker2();
    };
    //For Time
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };
    const showTimePicker2 = () => {
        setTimePickerVisibility2(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);

    };
    const hideTimePicker2 = () => {
        setTimePickerVisibility2(false);
    }

    const timeConfirm = time => {
        setSelectTime(time)
        hideTimePicker();
    };
    const timeConfirm2 = time2 => {
        setSelectTime2(time2)
        hideTimePicker2();
    };
    return (
        <View style={Styles.mainContainer}>

            <DateTimePicker
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <DateTimePicker
                isVisible={isDatePickerVisible2}
                mode="date"
                onConfirm={handleConfirm2}
                onCancel={hideDatePicker2}
            />
            <DateTimePicker
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={timeConfirm}
                onCancel={hideTimePicker}
            />
            <DateTimePicker
                isVisible={isTimePickerVisible2}
                mode="time"
                onConfirm={timeConfirm2}
                onCancel={hideTimePicker2}
            />
            <ScrollView>
                <View style={Styles.ChevronDown}>
                    <TouchableOpacity style={{ width: 50 }} onPress={() => navigation.navigate('Home')}>
                        <AntDesign name={'left'} size={40} color={'grey'} />
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={Styles.textinputHead} ><Text style={Styles.Meeting}>Meeting</Text></View>
                </View>
                <View style={{ marginTop: 20, }}>
                    <Feather name="clock" size={30} style={{ left: 10 }} />
                    <Text style={{ fontSize: 20, left: 50, bottom: 30, }}>All Day</Text>
                    <View style={Styles.circle}>
                    </View>
                    <View style={Styles.container2}>
                        <TouchableOpacity style={Styles.dateBox} onPress={showDatePicker}>
                            <Text> {selectDate ? moment(selectDate).format('DD MMM YYYY'):'Start Date'}</Text>
                        </TouchableOpacity>
                        <View style={{ left: 70, marginTop: 5 }}>
                            <Text>
                                |
                            </Text>
                            <Text>
                                |
                            </Text>
                            <Text style={{ marginBottom: 5 }}>
                                |
                            </Text>

                        </View>
                        <TouchableOpacity style={Styles.dateBox} onPress={showDatePicker2}>
                            <Text>{selectDate2 ? moment(selectDate2).format('DD MMM YYYY'):'End Date '}</Text>
                        </TouchableOpacity>
                        <View style={{ left: 240, }}>
                            <TouchableOpacity style={Styles.dateBox2} onPress={showTimePicker}>
                                <Text> {selectTime ? moment(selectTime).format('HH:mm a'):'Time'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={Styles.dateBox2} onPress={showTimePicker2} >
                                <Text>{selectTime2 ? moment(selectTime2).format('HH:mm a'):'Time'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={Styles.container3}>
                        <FontAwesome6 name='bars-staggered' size={30} style={{ left: 10 }} />
                        <Text style={Styles.NoNote}>No Note</Text>
                        <Feather name='users' size={30} style={{ left: 10 }} />
                        <Text style={Styles.peopleText}> People:</Text>
                    </View>
             <View style={Styles.PeopleContainer}>
             
                        <View style={Styles.PeopleSubContainer}>
                            <Text >Abhishek</Text>
                        </View>
                        <View style={Styles.PeopleSubContainer}>
                            <Text>Vaibhav</Text>
                        </View>
                    </View>
             </View>


               
            </ScrollView>
        </View>
    )

}

export default MeetingConfirm

const Styles = StyleSheet.create({
    Meeting: {
        fontSize: 30,
        top: 40
    },
    ChevronDown: {
        height: 60,
        width: 40,
        top: 15,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    peopleText:{ fontSize: 20, left: 50, bottom: 30, },
    NoNote:{ fontSize: 20, left: 50, bottom: 30},
    textinputHead: {
        height: 100,
        fontSize: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        backgroundColor: 'white',
        paddingLeft: 20,
        fontWeight: '400',


    },
    mainContainer: {
        backgroundColor: 'white',
        flex: 1

    },
    cross: {
        top: 20,
        left: 10
    }, createButton: {
        height: 40,
        width: 90,
        backgroundColor: 'blue',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        left: 290,
        bottom: 30,

    }, circle: {
        height: 30,
        width: 30,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 20,
        left: 350,
        bottom: 55,


    },
    dateBox: {
        height: 40,
        width: 150,
        borderRadius: 50,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 2

    },
    dateBox2: {
        height: 40,
        width: 150,
        borderRadius: 50,
        marginTop: 70,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        alignItems: 'center',

        bottom: 220

    },
    container2: {
        height: 180,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        bottom: 20
    },
    container3: {
        height: 100,
        width: '100%',
        borderBottomWidth:1
    },
    NoteTextInput: {
        height: 80,
        width: 350,
        borderWidth: 1,
        left: 40,
        borderRadius: 20,
        borderColor: 'lightblue',
        bottom: 20,
        paddingLeft: 10,
        paddingTop: 2



    },
    PeopleTextInput: {
        height: 50,
        width: 200,
        borderRadius: 10,
        paddingLeft: 10

    },
    PeopleView: {
        height: 50,
        width: 350,
        bottom: 20,
        borderRadius: 10,
        left: 40,
        elevation: 5,
        backgroundColor: "#fff"
    },
    searchName: {
        height: 30,
        width: 100,
        backgroundColor: '#fff',
        borderRadius: 10,
        fontSize: 20,
        left: 20,
        margin: 10,
        textAlign: 'center',
        elevation: 5

    }, container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 10,
        paddingHorizontal: 10,
    },
    PeopleContainer:{height:80,width:'100%',flexDirection:'row',marginLeft:10,},
    PeopleSubContainer: {
        height: 40,
        width:100,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginBottom: 10,
        left: 10,
        marginTop:10,
        marginLeft:10
    },

  


})