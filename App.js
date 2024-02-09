import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { people } from './assets';
import Textinput from './Component/TextInput';
import Buttons from './Component/Button';


export default function App() {
  return (
    <View style={styles.container}>
       <Textinput placeholder={"Mobile No."} text={"Send OTP"} style={styles.textInput} keyboardType={'number-pad'}/>
       <Textinput placeholder={"Enter OTP"} style={styles.enterOtp}/>
       <Buttons text={"Login"} styletouch={styles.loginTouch} styletext={styles.styletxt} />
    </View>
  );
}

const styles = StyleSheet.create({
  styletxt:{
    color:'white',
    fontSize:18
  },
  loginTouch:{
    backgroundColor:'blue',
    height:50,
    width:320,
    borderRadius:10,
    alignItems:'center',
    marginTop:20,
    justifyContent:'center'
   
  },
  enterOtp:{
    fontSize:20,
     width:205,
     height:50,
     marginLeft:50,
     marginTop:5,

     
    
},
  textInput:{
    fontSize:20,
     width:205,
     height:50,
     marginLeft:50,
     marginTop:5,
     borderRightWidth:1,
     borderRightColor:'grey'
     
    
},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
