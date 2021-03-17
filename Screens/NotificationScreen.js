import React from 'react';
import {StyleSheet,View,Text, FlatList} from 'react-native';
import NotificationComponent from "../Components/NotificationComponent";


var data = [
  {id: '0', value: 'asad'},
  {id: '1', value: 'ullah'},
  {id: '2', value: 'tariq'},
];
function screen() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={(items) => (
        <NotificationComponent text={items.item.value}/>
      )}></FlatList>
  );
}

const styles = StyleSheet.create({});

export default screen;

//react-native link
