import React from "react";
import { View,TouchableOpacity ,Text} from "react-native";

const Buttons =({text,styletouch,styletext,onPress})=>{
    return(
<View>
    <TouchableOpacity style={styletouch} onPress={onPress} >
        <Text style={styletext}>{text}</Text>
    </TouchableOpacity>
</View>
    )
}

export default Buttons