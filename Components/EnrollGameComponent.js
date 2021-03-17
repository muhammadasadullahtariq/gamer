import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
import image from '../Asserts/Images/IMG-20200217-WA0140.jpg';
import {useNavigation} from '@react-navigation/native';


const component = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate('chatMessage')}>
      <View style={styles.mainViewContainer}>
        <Image source={image} style={styles.imageContainer}></Image>
        <View style={styles.nameViewContainer}>
          <Text
            style={styles.textContainer}
            numberOfLines={1}
            ellipsizeMode="tail">
            {props.text}
          </Text>
          <View style={styles.opositionAndPositionContainer}>
            <TouchableWithoutFeedback onPress={()=>console.log("What tha fuck jani")}>
              <Text style={styles.opositTextContainer}>{props.text2}</Text>
            </TouchableWithoutFeedback>
            <Text style={styles.positionContainer}>{'Position'}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  opositionAndPositionContainer: {
    flexDirection: 'row',
    height: '55%',
    width: '100%',
  },
  nameViewContainer: {width: '100%',marginLeft:10},
  mainViewContainer: {
    backgroundColor: '#B6B9B8',
    height: 90,
    flexDirection: 'row',
    width: '100%',
    borderRadius: 10,
    marginBottom:1,
  },
  textContainer: {
    fontSize: 25,
    width: '100%',
    height: '40%',
  },
  imageContainer: {
    width: 75,
    height: 75,
    alignSelf: 'center',
    borderRadius: 150 / 2,
    marginHorizontal: '2%',
  },
  opositTextContainer: {
    width: '60%',
    fontSize: 20,
  },
  positionContainer: {
    width: '40%',
    alignSelf:"flex-end"
  },
});

export default component;
