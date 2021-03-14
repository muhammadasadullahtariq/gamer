import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import In from '../Components/inputComponent';
import Second from '../Components/SecondUserComponent';
import FirstCaht from '../Components/FirstUserComponent';
import ButtonComponent from '../Components/ButtonComponent';

function screen(props) {
  const {params} = this.props.navigation.state;
  this.props.navigation.state.rou
  return (  
    <View style={styles.mainViewContainer}>
      <ScrollView style={{marginBottom: '10%'}}>
        <FirstCaht />
        <Second />
      </ScrollView>
      <View style={{justifyContent: 'flex-end', flex: 1}}>
        <View style={styles.bootomViewContainer}>
          <In placeholderText="Enter Message" />
          <ButtonComponent text="Send" style={styles.buttonContainer} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
  },
  bootomViewContainer: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    margin: '1%',
  },
  buttonContainer: {
    marginLeft: '5%',
  },
});

export default screen;
