import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { History, Home, Login, Notification } from '../Screens';



const Stack = createNativeStackNavigator();




export default function RootNavigation() {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}> 
      
      
       <Stack.Screen name='Login' component={Login}/>
       <Stack.Screen name='Home' component={Home}/>
       <Stack.Screen name='Notification' component={Notification}/>
       <Stack.Screen name='History' component={History}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}


