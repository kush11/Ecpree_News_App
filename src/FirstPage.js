/*This is an Example of Grid View in React Native*/
import React, {Component} from 'react';
//import rect in our project
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
//import all the components we will need
const Data = [
  {
    id: 1,
    name: 'Top Headlines',
  },
  {
    id: 2,
    name: 'Entertainment',
  },
  {
    id: 3,
    name: 'General',
  },
  {
    id: 4,
    name: 'Health',
  },
  {
    id: 5,
    name: 'Science',
  },
  {
    id: 6,
    name: 'Sports',
  },
  {
    id: 7,
    name: 'Technology',
  },
];
export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={Data}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                console.log(item.name)
                console.log(this.props);
                this.props.navigation.navigate('FrontPageScreen', {
                  category: item.name
                });
              }}
              style={{flex: 1, flexDirection: 'column', margin: 1}}>
              <View style={styles.imageThumbnail}>
                <Text>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    height: 100,
  },
});
