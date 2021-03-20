import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function screen(props) {
  return (
    <View style={styles.mainViewContainer}>
      <Text style={styles.nameTextContainer}>{props.Name}</Text>
      <Text style={styles.detailTextContainer}>{props.Detail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainViewContainer: {
    flexDirection: 'row',
    height: 45,
    width: '100%',
    marginTop: 1,
  },
  nameTextContainer: {
    color: '#BDBDBD',
    fontSize: 20,
    alignSelf: 'center',
    marginRight: 10,
    marginLeft: 5,
  },
  detailTextContainer: {alignSelf: 'center', fontSize: 25},
});

export default screen;

//react-native link
