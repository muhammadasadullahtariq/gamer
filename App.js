// In App.js in a new project

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import DetailGatherScreen from "./Screens/GatherDetail";
import MainScreen from "./Screens/MainScreen";
import ChatMessage from "./Screens/ChatMessageScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerStyle: {backgroundColor: '#2097f5'}}}
        initialRouteName="MainScreen">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="chatMessage" component={ChatMessage} />
        <Stack.Screen name="detailGather" component={DetailGatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
