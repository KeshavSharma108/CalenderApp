import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Login } from '../Screens';



const Stack = createNativeStackNavigator();




export default function RootNavigation() {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}> 
      
      
       <Stack.Screen name='Login' component={Login}/>
       <Stack.Screen name='Home' component={Home}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}


