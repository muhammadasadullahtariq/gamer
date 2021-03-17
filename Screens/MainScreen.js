import React from 'react';
import {StyleSheet} from 'react-native';
import ChatScreen from './ChatScreen';
import GlobalCompetitions from './CompetitionScreen';
import EnrollCompetition from './EnrollCompetitionScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NotificationScreen from './NotificationScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialNotification from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

function screen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="message" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Games"
        component={EnrollCompetition}
        options={{
          tabBarLabel: 'Game',
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="gamepad-variant" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Competitions"
        component={GlobalCompetitions}
        options={{
          tabBarLabel: 'Competition',
          tabBarIcon: ({color, size}) => (
            <MaterialNotification
              name="pluscircleo"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({color, size}) => (
            <MaterialNotification
              name="notification"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});

export default screen;
