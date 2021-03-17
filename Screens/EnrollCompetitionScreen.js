import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import EnrollComponent from '../Components/EnrollGameComponent';

var data = [
  {id: '0', text: '1st Compition', text2: 'lol'},
  {id: '1', text: '1st Compition', text2: 'lol'},
  {id: '2', text: '1st Compition', text2: 'lol'},
  {id: '3', text: '1st Compition', text2: 'lol'},
  {id: '4', text: '1st Compition', text2: 'lol'},
];

function screen() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={(itmes) => (
        <EnrollComponent text={itmes.item.text} text2={itmes.item.text2} />
      )}></FlatList>
  );
}

const styles = StyleSheet.create({});

export default screen;

//react-native link
