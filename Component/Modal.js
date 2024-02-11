import React, { useState } from "react"
import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native"
import DateTimePicker from 'react-native-modal-datetime-picker';
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const Modalfile = ({ onPress, visible }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectDate, setSelectDate] = useState()

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = date => {
        setSelectDate(date)
        hideDatePicker();
    };
    return (
        <Modal visible={visible} transparent={true}>

            <DateTimePicker
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <View style={Styles.modalContainerStyle}>
                <View style={Styles.modalSubContainerStyle} >
                    <View style={Styles.modalHeaderStyle}>
                        <Text style={Styles.modaltextStyle}>
                            Fliter
                        </Text>
                        <TouchableOpacity style={Styles.modalTouchApply} onPress={onPress}>
                            <Text style={Styles.modalTouchText}>
                                Apply
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.modalContentStyle}>
                        <View>
                            <Text style={Styles.contentText}>Start Date</Text>
                            <TouchableOpacity style={Styles.dateBox} onPress={showDatePicker}>

                                <Text>Start Date {selectDate && moment(selectDate).format('DD MMM YYYY')}</Text>

                            </TouchableOpacity>


                        </View>
                        <View>
                            <Text style={{ fontSize: 17, top: 58, fontWeight: '500' }}>- - - - - -</Text>
                        </View>
                        <View>
                            <Text style={Styles.contentText}>End Date</Text>
                            <TouchableOpacity style={Styles.dateBox} onPress={showDatePicker}>
                                <Text>End Date {selectDate && moment(selectDate).format('DD MMM YYYY')}</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>

            </View>

        </Modal>

    )
}


const Styles = StyleSheet.create({
    modalContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalSubContainerStyle: {
        height: 180,
        width: 390,
        borderRadius: 20,
        elevation: 8,
        shadowOffset: { width: 10, height: 200 },
        shadowRadius: 384,


    },
    modalHeaderStyle: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',

    },
    modalContentStyle: {
        flex: 2,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'space-around',
        flexDirection: 'row',


    }, modalTouchApply: {
        width: 55, left: 320, bottom: 15
    },
    modaltextStyle: { fontSize: 20, left: 10, fontWeight: '400', top: 12 },
    modalTouchText: { fontSize: 20, fontWeight: '700', color: 'blue', },
    contentText: {
        top: 10,
        fontSize: 15,
        left: 40,
        fontWeight: '500'

    },
    modaltextStyle2: {
        fontSize: 20,
        left: 5,
        fontWeight: '400',
        top: 12
    },
    dateBox: {
        height: 40,
        width: 150,
        borderRadius: 50,
        marginTop: 30,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        elevation: 5,

    }


})


export default Modalfile

