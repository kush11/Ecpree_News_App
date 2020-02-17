/*This is an Example of Grid View in React Native*/
import React, {Component} from 'react';
//import rect in our project
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ImageBackground,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
//import all the components we will need
const Data = [
  // {
  //   id: 1,
  //   name: 'Top Headlines',
  // },
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
        <StatusBar backgroundColor="lightskyblue" />
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('FrontPageScreen', {
                category: 'Top Headlines',
              });
            }}
            style={[styles.imageThumbnail, {width: '80%'}]}>
            <Text>Top Headlines</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={Data}
          renderItem={({item}) => (
            <View
              style={{flex: 1,flexDirection: 'column', margin: 10}}>
              <TouchableOpacity 
              onPress={() => {
                this.props.navigation.navigate('FrontPageScreen', {
                  category: item.name,
                });
              }}
              style={[styles.imageThumbnail]}>
                <Text>{item.name}</Text>
                {/* <Text>dsd</Text> */}
              </TouchableOpacity>
              {/* <Image style={{height:100,width:null, bottom:100}} source={{uri:'https://i.picsum.photos/id/1076/200/300.jpg'}}>

              </Image> */}
            </View>
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
    backgroundColor:'lightskyblue'
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    elevation: 5,
    borderWidth: 0.15,
    backgroundColor: 'transparent',
    borderRadius: 15,
    borderColor: 'transparent',
    shadowOffset: {width: 4, height: 4},
    shadowColor: '#90a4ae',
    shadowOpacity: 5.0,
    height: 100,
  },
});
