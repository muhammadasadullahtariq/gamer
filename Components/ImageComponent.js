import React from 'react';
import {Image, StyleSheet} from 'react-native';

function screen(props) {
  return (<Image source={props.source} style={props.style}></Image>);
}

const styles = StyleSheet.create({});

export default screen;

//react-native link
