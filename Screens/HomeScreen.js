// In App.js in a new project

import React, {useState} from 'react';
import {View, StyleSheet, Alert, ToastAndroid} from 'react-native';
import TextInputComponent from '../Components/inputComponent';
import TeaxHeadingComponent from '../Components/HeadingText';
import ButtonComponent from '../Components/ButtonComponent';
import parsePhoneNumber from 'libphonenumber-js';
import auth from '@react-native-firebase/auth';

const HomeScreen = ({navigation}) => {
  const createThreeButtonAlert = () => {
    console.log(buttonText);
    if (buttonText === 'Confirm Code') {
      const tokenFlag = confirmCode(codeText);
      if (tokenFlag) navigation.navigate('chat');
      else {
        Alert.alert('Error', 'Please Enter Valid Code');
      }
    } else {
      var phoneNumber = parsePhoneNumber(text.toString(), 'PK');
      console.log(phoneNumber.number);
      Alert.alert(
        'Confirm',
        phoneNumber.number + '\nis your cell Number',
        [
          {
            text: 'No',
            onPress: () => console.log('Cancel Pressed'),
            style: 'destructive',
          },
          {
            text: 'Yes',
            onPress: () => {
              console.log('OK Pressed');
              if (signInWithPhoneNumber(phoneNumber.number)) {
                setButtonText(() => 'Confirm Code');
                setShowState();
              } else {
                if (Platform.OS === 'android') {
                  ToastAndroid.show(
                    'Some Error has occure',
                    ToastAndroid.SHORT,
                  );
                } else {
                  AlertIOS.alert('Some Error has occure');
                }
              }
            },
            style: 'default',
          },
        ],
        {cancelable: false},
      );
    }
  };

  const [text, setText] = useState('');
  const [codeText, codeSetText] = useState('');
  const [showFlag, setShowFlag] = useState(false);
  const [buttonText, setButtonText] = useState('Confirm Number');
  const [confirm, setConfirm] = useState(null);

  const textHandler = (t) => {
    setText(() => t);
  };
  const codeTextHandler = (t) => {
    codeSetText(() => t);
  };
  const setShowState = () => {
    setShowFlag(() => !showFlag);
  };
  async function signInWithPhoneNumber(phoneNumber) {
    var flag = false;
    const confirmation = await auth()
      .signInWithPhoneNumber(phoneNumber)
      .then(() => (flag = true))
      .catch(() => (flag = false));
    setConfirm(confirmation);
    return flag;
  }

  async function confirmCode(code) {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
      console.log(error);
    }
  }

  return (
    <View style={styles.viewContainer}>
      <TeaxHeadingComponent
        child="Sign Up"
        style={styles.textHeadigContainer}
      />
      <TextInputComponent
        placeholderText="Enter Phone Number"
        textHandler={textHandler}
        onPress={createThreeButtonAlert}
        text={text}
      />
      {showFlag && (
        <TextInputComponent
          placeholderText="Enter Code"
          textHandler={codeTextHandler}
          //onPress={createThreeButtonAlert}
          text={codeText}
          style={styles.butttonContainer}
        />
      )}
      <ButtonComponent
        text={buttonText}
        style={styles.butttonContainer}
        onPress={createThreeButtonAlert}
      />
    </View>
  );
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

export default HomeScreen;
