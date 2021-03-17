import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Component from '../Components/CompetitionSreenComponent';

var data = [
  {id: '0', name: 'competition', firstPrice: '1000', game: 'COD Mobile'},
  {id: '1', name: 'competition', firstPrice: '1000', game: 'COD Mobile'},
  {id: '2', name: 'competition', firstPrice: '1000', game: 'COD Mobile'},
  {id: '3', name: 'competition', firstPrice: '1000', game: 'COD Mobile'},
  {id: '4', name: 'competition', firstPrice: '1000', game: 'COD Mobile'},
];
function screen() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={(items) => (
        <Component
          CompetitionName={items.item.name}
          Prize={items.item.firstPrice}
          GameName={items.item.game}
        />
      )}></FlatList>
  );
}

const styles = StyleSheet.create({});

export default screen;
