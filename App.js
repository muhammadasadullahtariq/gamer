// In App.js in a new project

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import ChatMessageScreen from './Screens/ChatMessageScreen';
import ChatScreen from './Screens/ChatScreen';
import TestScrenn from './Screens/testScreen';
import DetailGatherScreen from "./Screens/GatherDetail";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerStyle: {backgroundColor: '#2097f5'}}}
        initialRouteName="detailGather">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="chatMessage">
          {(props) => <ChatMessageScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="chat" component={ChatScreen} />
        <Stack.Screen name="test" component={TestScrenn} />
        <Stack.Screen name="detailGather" component={DetailGatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
