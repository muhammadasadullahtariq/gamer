import React,{useState} from 'react';
import {ScrollView, StyleSheet, Image,Text, View} from 'react-native';
import im from '../Asserts/Images/IMG-20200217-WA0140.jpg';

function screen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Image source={im} style={styles.imageContainer}></Image>
      <Text style={styles.textContainer}>{"Personal Detail:"}</Text>
      <View></View>
      <Text style={styles.textContainer}>{"Teams:"}</Text>
      <View></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {flexGrow: 1, backgroundColor: 'brown'},
  imageContainer: {
    width: '100%',
    height: 400,
    resizeMode: 'center',
    backgroundColor: 'white',
  },
  textContainer: {
    fontSize: 20,
    marginLeft: 5,
  },
});

export default screen;

//react-native link
