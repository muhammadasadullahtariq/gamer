import React from 'react';
import {StyleSheet, Image, ScrollView, View} from 'react-native';
import im from '../Asserts/Images/IMG-20200217-WA0140.jpg';
import InputComponent from '../Components/inputComponent';

let data = [
  "Asad","Ullah","Tariq"
];

function screen() {  
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.viewContainer}>
        <Image source={im} style={styles.imageContainer}></Image>
      </View>
      <InputComponent
        placeholderText="Enter Phone Number"
        style1={styles.InputComponentContainer}
      />
      <InputComponent
        placeholderText="Enter Phone Number"
        style1={styles.InputComponentContainer}
      />
      <InputComponent
        placeholderText="Enter Phone Number"
        style1={styles.InputComponentContainer}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    borderRadius: 200,
    width: 300,
    height: 300,
  },
  InputComponentContainer: {
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default screen;
