import React from "react";
import {View,StyleSheet,Text,TouchableOpacity} from "react-native"
import { AntDesign } from "@expo/vector-icons";

const History =({navigation})=>{
    return(
        <View style={Style.containerMain}>
<View style={Style.notificationHeader}> 
   <Text  style={Style.notificationText}>
      History
    </Text> 
    <TouchableOpacity style={{width:30,right:220}} onPress={()=>navigation.goBack()}>
    <AntDesign name="left" size={30} />
    </TouchableOpacity>
</View>
<View>
<Text> Abhishek scheduled a meeting on 4 Saturday,2023.</Text>
<Text> Click for Details</Text>
<Text>6:30 P.M</Text>
</View>
</View>
    )
}

export default History



const Style = StyleSheet.create({
containerMain: { flex: 1, backgroundColor: '#dee2e6' },
notificationHeader:{
height:80,
width:'100%',
borderBottomWidth:1,
borderBottomColor:'black',
justifyContent:'center',
alignItems:"center",
flexDirection:'row'
},
notificationText:{
fontSize:20,
fontWeight:'500'

}
})

