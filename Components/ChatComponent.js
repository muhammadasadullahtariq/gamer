import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import image from '../Asserts/Images/IMG-20200217-WA0140.jpg';
import {useNavigation} from '@react-navigation/native';

const component = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate('chatMessage')}>
      <View style={styles.mainViewContainer}>
        <Image source={props.image} style={styles.imageContainer}></Image>
        <Text
          style={styles.textContainer}
          numberOfLines={1}
          ellipsizeMode="tail">
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainViewContainer: {
    marginBottom: 1,
    backgroundColor: '#BDBDBD',
    height: 80,
    flexDirection: 'row',
    width: '100%',
  },
  textContainer: {
    fontSize: 20,
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    alignSelf: 'center',
    width: 75,
    height: 75,
    borderRadius: 150 / 2,
    marginHorizontal: '2%',
  },
});

export default component;
