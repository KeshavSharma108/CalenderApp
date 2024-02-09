import React,{useState} from "react";
import {View,TextInput,StyleSheet,Text,TouchableOpacity} from "react-native"






const Textinput=({keyboardType,style,text,textinput,placeholder,...Props})=>{
    return(
        <View style={styles.container}>
        
           
        
         <TextInput {...Props} style ={[style]} placeholder={placeholder} keyboardType={keyboardType}/>
         <View>
            <TouchableOpacity style={styles.touchotp}>
            <Text style={{fontSize:18,color:'grey',textAlign:'center'}}>{text}</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    touchotp:{
            
                width:82,
                left:262,
               bottom:37,
    },
    
container:{
    height:60,
    width:350,
    backgroundColor:'lightgrey',
    borderRadius:10,
    marginBottom:20

}
})

export default Textinput        