import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { Entypo, Feather, FontAwesome6 } from "@expo/vector-icons";
import DateTimePicker from 'react-native-modal-datetime-picker';
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import { MaterialIcons } from "@expo/vector-icons";


const AddMeeting = ({ navigation, }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [isTimePickerVisible2, setTimePickerVisibility2] = useState(false);
    const [selectDate, setSelectDate] = useState()
    const [selectDate2, setSelectDate2] = useState()
    const [selectTime, setSelectTime] = useState()
    const [selectTime2, setSelectTime2] = useState()

    //For Add Note
    const [text, setText] = useState('');
    const [isChecked, setIsChecked] = useState(false);



    const addNoteCheck = (inputValue) => {
        setText(inputValue);
        if (inputValue.trim().length > 0) {
            setIsChecked(true); // Set checkbox to true if input is not empty
        } else {
            setIsChecked(false);
        }
    }
  

    // For Search Box

    const namesData = [
        { id: 1, name: "Abhishek" },
        { id: 2, name: "Vaibhav" },
        { id: 3, name: "Keshav" },
        { id: 4, name: "Alice" },
        // Add more persons as needed
    ];


    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChange = (text) => {
        setSearchText(text);
        // Filter names based on search text
        const results = namesData.filter((name) =>
            name.name.toLowerCase().includes(text.toLowerCase())
        );
        setSearchResults(results);
    };


    const handleSelectName = (name) => {
        // Do something with the selected name
        console.log('Selected name:', name);
    };

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

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="cross" size={50} style={Styles.cross} />
                </TouchableOpacity>
                <TouchableOpacity style={Styles.createButton} onPress={() => navigation.navigate('MeetingConfirm')}><Text style={{ color: 'white' }}>Create</Text></TouchableOpacity>
                <View>
                    <TextInput placeholder="Add Title" style={Styles.textinputHead} />
                </View>
                <View style={{ marginTop: 20, }}>
                    <Feather name="clock" size={30} style={{ left: 10 }} />
                    <Text style={{ fontSize: 20, left: 50, bottom: 30, }}>All Day</Text>
                    <View style={Styles.circle}>
                    {isChecked ? 
                        <MaterialIcons
                            name= 'check' 
                            size={24}
                            color="white"
                        /> : null }

                        {isChecked ? <View style={{  height:27,width:27, backgroundColor:'#6a71cf',borderRadius:30,bottom:25.5,zIndex:-1,}}/> :null}
                  
                    </View>
                    <View style={Styles.container2}>
                        <TouchableOpacity style={Styles.dateBox} onPress={showDatePicker}>
                            <Text>{selectDate ? moment(selectDate).format('DD MMM YYYY'): 'Start Date'}</Text>
                        </TouchableOpacity>
                        <View style={{ left: 70, marginTop: 5 }}>
                            <Text>
                                |
                            </Text>
                            <Text>
                                |
                            </Text>
                            <Text style={{marginBottom:5}}>
                                |
                            </Text>

                        </View>
                        <TouchableOpacity style={Styles.dateBox} onPress={showDatePicker2}>
                            <Text>{selectDate2 ? moment(selectDate2).format('DD MMM YYYY'): 'End Date'}</Text>
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
                        <Text style={{ fontSize: 20, left: 50, bottom: 30, }}>Add Note</Text>
                        <TextInput style={Styles.NoteTextInput}
                            multiline={true}
                            onChangeText={addNoteCheck}
                            value={text}
                          />
                        <Feather name='users' size={30} style={{ left: 10 }} />
                        <Text style={{ fontSize: 20, left: 50, bottom: 30, }}>Add People</Text>
                        <View style={Styles.PeopleView}>
                            <TextInput style={Styles.PeopleTextInput}
                                placeholder={'Search people'}
                                onChangeText={handleInputChange}
                                value={searchText}
                                
                            />

                        </View>

                    </View>

                    <FlatList
                        data={searchResults}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleSelectName(item.name)}>
                                <View style={{flexDirection:'row'}}>
                                    <View style={{flex:2}}>
                                    <Text style={Styles.searchName}>{item.name}</Text>
                                    </View>
                              
                                </View>
                          
                            </TouchableOpacity>
                        )}
                       // ListEmptyComponent={<Text>No results found</Text>}
                    />
                </View>
            </ScrollView>
        </View>
    )

}

export default AddMeeting

const Styles = StyleSheet.create({
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
        elevation: 5,
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
        elevation: 5,
        bottom: 220

    },
    container2: {
        height: 180,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        bottom: 20,
        paddingLeft:10
    },
    container3: {
        height: 260,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
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
        paddingTop:2
    


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

    },container: {
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
      
    

})