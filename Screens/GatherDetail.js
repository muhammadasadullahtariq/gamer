import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import im from '../Asserts/Images/IMG-20200217-WA0140.jpg';
import InputComponent from '../Components/inputComponent';
import Checkox from 'react-native-bouncy-checkbox';
import TextComponent from '../Components/HeadingText';
import ButtonComponent from '../Components/ButtonComponent';
import {launchImageLibrary} from 'react-native-image-picker';
import parsePhoneNumber from 'libphonenumber-js';
import {textData, uploadImage} from '../Components/dataUpload';

var gameArr = [];
function screen() {
  const [imageuri, setImage] = useState(im);
  const [cod, setCode] = useState(false);
  const [pubg, setPubg] = useState(false);
  const [codMobile, setCodemobile] = useState(false);
  const [uName, setUname] = useState('');
  const [gName, setGname] = useState('');
  const [jNumber, setJnumber] = useState('');
  const image = () => {
    const options = {
      title: 'Image Pick',
      width: 720,
      height: 720,
    };
    launchImageLibrary(options, (response) => {
      console.log(response);
      setImage({uri: response.uri});
    });
  };
  const uNameHandler = (t) => {
    setUname(() => t);
  };
  const gNameHandler = (t) => {
    setGname(() => t);
  };
  const jNumberHandler = (t) => {
    setJnumber(() => t);
  };
  const submitt = () => {
    if (cod) gameArr.push('code');
    else if (gameArr.indexOf('code') > -1)
      gameArr.splice(gameArr.indexOf('code'));
    if (codMobile) gameArr.push('codeMobile');
    else if (gameArr.indexOf('codeMobile') > -1)
      gameArr.splice(gameArr.indexOf('codeMobile'));
    if (pubg) gameArr.push('pubg');
    else if (gameArr.indexOf('pubg') > -1)
      gameArr.splice(gameArr.indexOf('pubg'));
    gameArr = getUnique(gameArr);
    var phoneNumber = parsePhoneNumber(jNumber, 'PK');
    var obj = {
      games: gameArr,
      userName: uName,
      gameName: gName,
      jazzCash: phoneNumber.number,
    };
    console.log({obj});
    textData(obj);
    uploadImage(imageuri);
  };
  function getUnique(array) {
    var uniqueArray = [];

    // Loop through array values
    for (var i = 0; i < array.length; i++) {
      if (uniqueArray.indexOf(array[i]) === -1) {
        uniqueArray.push(array[i]);
      }
    }
    return uniqueArray;
  }
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.viewContainer}>
        <TouchableWithoutFeedback onPress={image}>
          <Image source={imageuri} style={styles.imageContainer}></Image>
        </TouchableWithoutFeedback>
      </View>
      <InputComponent
        placeholderText="Enter Name"
        style1={styles.InputComponentContainer}
        textHandler={uNameHandler}
      />
      <InputComponent
        placeholderText="Enter Gamer Name"
        style1={styles.InputComponentContainer}
        textHandler={gNameHandler}
      />
      <InputComponent
        placeholderText="Enter JazzCash Account "
        style1={styles.InputComponentContainer}
        textHandler={jNumberHandler}
      />
      <View style={styles.itemSelectContainer}>
        <TextComponent
          child={'Select The Games you play'}
          style={styles.textContainer}
        />
        <Checkox
          textColor="#000"
          fillColor="red"
          text="PuG"
          fontFamily="JosefinSans-Regular"
          onPress={() => {
            setPubg(!pubg);
            console.log(pubg);
          }}
        />
        <Checkox
          textColor="#000"
          fillColor="red"
          text="COD Mobile"
          fontFamily="JosefinSans-Regular"
          onPress={() => {
            setCodemobile(!codMobile);
            console.log(codMobile);
          }}
        />
        <Checkox
          textColor="#000"
          fillColor="red"
          text="COD"
          fontFamily="JosefinSans-Regular"
          onPress={() => {
            setCode(!cod);
            console.log(cod);
          }}
        />
      </View>
      <ButtonComponent
        text={'Submit'}
        onPress={submitt}
        style={styles.buttonContainer}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {width: 75, alignSelf: 'center'},
  textContainer: {
    fontSize: 20,
  },
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
  itemSelectContainer: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
  },
});

export default screen;
