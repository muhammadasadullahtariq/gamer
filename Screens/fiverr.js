import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Input,
  Item,
} from 'native-base';

import {db} from '../environment/config';
let itemRef = db.ref('/products');

const logo = require('../images/itemlist.png');

export default class rlist extends React.Component {
  state = {
    dataSource: [],
    filteredData: [],
    loading: '',
    searchText: '',
  };

  componentDidMount() {
    itemRef.on('value', (snapshot) => {
      let item = snapshot.val();
      let dataSource = Object.values(item);
      this.setState({dataSource, filterData: dataSource});
      this.setState({loading: 'false'});
    });
  }

  order = (id, rn, qn) => {
    this.props.navigation.navigate('resourceinfo', {
      rcode: id,
      rname: rn,
      quantity: qn,
    });
  };

  myRenderItem = (myData) => (
    /*<TouchableOpacity>
            <Text>{myData.item.pname}</Text>
        </TouchableOpacity>*/

    <TouchableOpacity
      style={styles.list}
      onPress={() =>
        this.order(myData.item.rcode, myData.item.rname, myData.item.quantity)
      }>
      <Content padder>
        <Card style={styles.mb}>
          <CardItem>
            <Left>
              <Thumbnail source={logo} />
              <Body>
                <Text>Resource Code:</Text>
                <Text>{myData.item.rcode}</Text>
                <Text>Resource Name:</Text>
                <Text note>{myData.item.rname}</Text>
                <Text>Quantity:</Text>
                <Text note>{myData.item.quantity}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.vContainer}>
        <Content>
          <Item regular>
            <Input
              placeholder="Type here ..."
              value={this.state.searchText}
              onChangeText={(val) => {
                var filteredData = [];
                if (val === '') filteredData = [this.state.dataSource];
                else
                  filteredData = this.state.dataSource.filter((item) => {
                    if (
                      item.rname.toLowerCase().match(val.toLowerCase()) ||
                      item.rcode
                        .toString()
                        .toLowerCase()
                        .match(val.toLowerCase())
                    )
                      return item;
                  });
                this.setState({searchText: val, filterData: filteredData});
              }}
            />
          </Item>
        </Content>
        <FlatList
          data={this.state.filterData}
          renderItem={(item) => this.myRenderItem(item)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  vContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: '#fff',
  },
  mb: {
    marginBottom: 5,
  },
  button2: {
    width: 197,
    height: 53,
    backgroundColor: 'rgba(74,144,226,0.5)',
    borderRadius: 63,
    marginTop: 12,
    marginLeft: 86,
  },
  image3: {
    top: 0,
    left: 25,
    width: 55,
    height: 45,
    position: 'absolute',
  },
});
