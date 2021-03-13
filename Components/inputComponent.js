import React,{useState} from 'react';
import {View,StyleSheet, TextInput} from 'react-native';


export const component = (props) => {
  return (
    <View style={[style.mainView,props.style1]}>
      <TextInput
        placeholder={props.placeholderText}
        value={props.text}
        keyboardType={props.keyBoadType}
        onChangeText={props.textHandler}
        style={[style.textCointaner, props.style]}></TextInput>
    </View>
  );
};

const style = StyleSheet.create({
  mainView: {width:"80%"},
  textCointaner: {
    width: "100%",
    borderWidth: 1,
    padding:5,
    borderRadius: 2,
    borderColor: 'black',
    backgroundColor: '#DADDDC',
    height: 40,
    fontSize: 20,
  },
});

export default component;
