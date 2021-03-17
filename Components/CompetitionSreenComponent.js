import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import image from '../Asserts/Images/IMG-20200217-WA0140.jpg';
import {useNavigation} from '@react-navigation/native';

const component = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate('chatMessage')}>
      <View style={styles.mainViewContainer}>
        <View>
          <Image source={image} style={styles.imageContainer}></Image>
          <Text style={styles.gameNameContainer}>{props.GameName}</Text>
        </View>
        <View style={styles.nameViewContainer}>
          <Text
            style={styles.textContainer}
            numberOfLines={1}
            ellipsizeMode="tail">
            {props.CompetitionName}
          </Text>
          <View style={styles.opositionAndPositionContainer}>
            <TouchableWithoutFeedback
              onPress={() => console.log('What tha fuck jani')}>
              <Text style={styles.opositTextContainer}>{props.Prize}</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gameNameContainer: {alignSelf: 'center'},
  opositionAndPositionContainer: {
    flexDirection: 'row',
    height: '40%',
    width: '100%',
  },
  nameViewContainer: {width: '100%',marginLeft:10},
  mainViewContainer: {
    backgroundColor: '#9B9B9B',
    height: 100,
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
      marginTop:3,
    alignSelf: 'center',
    width: 75,
    height: 75,
    borderRadius: 150 / 2,
    marginHorizontal: '2%',
  },
  opositTextContainer: {
    width: '100%',
    fontSize: 20,
  },
});

export default component;
