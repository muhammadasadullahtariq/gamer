import React from 'react';
import {StyleSheet, View,TouchableOpacity,Text} from 'react-native';

function screen(props) {
  return (
    <TouchableOpacity>
      <View style={styles.viewContainer}>
        <Text style={styles.textContainer}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    fontSize: 15,
    color: '#2D2F2E',
    padding: 10,
  },
  viewContainer: {
    marginBottom: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: '#2D2F2E',
  },
});

export default screen;

//react-native link
