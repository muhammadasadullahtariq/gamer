import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Button,
  Text,
  TouchableOpacity,
} from 'react-native';
import im from '../Asserts/Images/IMG-20200217-WA0140.jpg';
import TextComponent from '../Components/DetailScreenTextComponent';

var a = 0;
function screen() {
  const [data, setData] = useState([]);
  const getData = () => {
    setData(() => [
      ...data,
      {key: a.toString(), name: 'name', detail: 'First Competition'},
    ]);
    a++;
    console.log(a);
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollViewcontentContainerStyle}>
      <Image source={im} style={styles.imageContainer}></Image>
      <Text style={styles.textContainer}>{'Personal Detain:'}</Text>
      <View>
        {data.map((item) => (
          <TextComponent key={item.key} Name={item.name} Detail={item.detail} />
        ))}
      </View>
      <Text style={styles.textContainer}>{'Competition Detain:'}</Text>
      <View>
        {data.map((item) => (
          <TextComponent key={item.key} Name={item.name} Detail={item.detail} />
        ))}
      </View>
      <TouchableOpacity>
        <Text style={styles.ruleContainer}>{'Rules'}</Text>
      </TouchableOpacity>
      <Button style={styles.btn} title={'ADD'} onPress={getData}></Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginBottom: 40,
  },
  scrollViewcontentContainerStyle: {flexGrow: 1},
  imageContainer: {
    backgroundColor: '#E8E8E8',
    width: '100%',
    height: 400,
    resizeMode: 'center',
  },
  textContainer: {
    fontSize: 20,
    marginLeft: 5,
  },
  ruleContainer: {
    alignSelf: 'center',
    fontSize: 20,
    margin: 3,
  },
});

export default screen;

//react-native link
