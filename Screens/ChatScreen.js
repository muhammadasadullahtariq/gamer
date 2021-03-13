import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import ChatItem from '../Components/ChatComponent';
import image from '../Asserts/Images/IMG-20200217-WA0140.jpg';

var a=0;
const Screen = (props) => {
  const date=new Date();
  const [list, AddItem] = useState([
    {
      id: 'a',
      name: 'asad ullah',
      image:image,
      date:new Date()
    },
  ]);
  const addItem = () => {
    AddItem(() => [...list, {id: a.toString(), name: 'asad ullah',image:image,date:new Date()}]);
    a++;
  };

  return (
    <View style={styles.mainView}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={(items) => (
          <ChatItem image={items.item.image} text={items.item.name} />
        )}></FlatList>
        <Button title="add" onPress={addItem}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {flex: 1},
});

export default Screen;
