import React, {useState} from 'react';
import {View, StyleSheet, Alert, requireNativeComponent} from 'react-native';
import TextInputComponent from '../Components/inputComponent';

const HidenTextView = (props) => {
  if (props.showFlag) {
    return (
      <TextInputComponent
        tplaceholderTex={props.tplaceholderTex}
        textHandler={props.textHandler}
        //onPress={createThreeButtonAlert}
        text={props.text}
        style={styles.butttonContainer}
      />
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  textHeadigContainer: {fontSize: 40, marginBottom: 10},
  butttonContainer: {
    marginTop: 10,
  },
});

export default HidenTextView