import React from 'react';
import {StyleSheet, View, Text} from 'react-native';


const component = (props) => {
  return <Text style={(styles.textContainer, props.style)}>{props.child}</Text>;
};


const styles = StyleSheet.create({
  textContainer: {
    color: '#2D2F2E',
    fontFamily: 'serf',
  },
});


export default component;
