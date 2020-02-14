import React, {PureComponent} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Upswipe from '../Components/UpSwipe';
import Circle from '../Components/Circle';
import moment from 'moment';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      serverData: [],
    };
    fetch(
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=e9ed76ff6496462b8096d1e4b3178434&pageSize=5',
      // 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e9ed76ff6496462b8096d1e4b3178434',
      // 'https://newsapi.org/v2/top-headlines?country=in&apiKey=e9ed76ff6496462b8096d1e4b3178434',
      {
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(responseJson => this.setState({serverData: responseJson.articles}))
      .catch(err => {
        alert(err, 'Sorry for error');
      });
  }

  renderTime = () => {
    return (
      <View
        style={{
          height: 10,
          width: 50,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          backgroundColor: 'yellow',
        }}>
        <Text>date</Text>
      </View>
    );
  };
  renderCard(item, props) {
    console.log(this.props);
    return (
      <View
        style={{
          flex: 1,
          position: 'absolute',
          height: SCREEN_HEIGHT,
          width: SCREEN_WIDTH,
        }}>
        <View style={{flex: 2.5, backgroundColor: 'gray'}}>
          <ImageBackground
            source={{
              uri: item.urlToImage,
            }}
            style={{
              flex: 1,
            }}>
            <View
              style={{
                height: 30,
                position: 'absolute',
                left: 20,
                right: 20,
                bottom: 50,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  height: 20,
                  width: '100%',
                  // borderTopLeftRadius: 10,
                  // borderTopRightRadius: 10,
                  // borderBottomLeftRadius: 10,
                  // borderBottomRightRadius: 10,
                  backgroundColor: 'transparent',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontStyle: 'italic',
                    color: 'black',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    width: '40%',
                    textAlign: 'center',
                    borderBottomRightRadius: 10,
                    backgroundColor: 'aliceblue',
                  }}>
                  {item.source.name}
                </Text>
              </View>
              <View
                style={{
                  height: 20,
                  width: '100%',
                  // borderTopLeftRadius: 10,
                  // borderTopRightRadius: 10,
                  // borderBottomLeftRadius: 10,
                  // borderBottomRightRadius: 10,
                  backgroundColor: 'transparent',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontStyle: 'italic',
                    color: 'black',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    width: '40%',
                    textAlign: 'center',
                    borderBottomRightRadius: 10,
                    backgroundColor: 'aliceblue',
                  }}>
                  {/* moment('2020-02-14T07:45:00Z').format('MMMM Do YYYY, h:mm:ss a') */}
                  {moment(`${item.publishedAt}`).format('MMMM Do YYYY, h:mm')}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View
          style={{
            flex: 2,
            bottom: 20,
            backgroundColor: 'red',
            // margin: 5,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
          }}>
          <View
            id="share and gmail view"
            style={{
              marginHorizontal: 40,
              flex: 0.25,
              bottom: 30,
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}>
            <TouchableOpacity>
              <Circle word={'gmail'} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Circle word={'share'} color={'gray'} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              // backgroundColor: 'navajowhite',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                padding: 5,
              }}>
              {item.title}
            </Text>
          </View>
          <View style={{flex: 0.1}} />
          <View
            style={{
              flex: 2.5,
              alignItems: 'center',
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              // borderBottomLeftRadius: 40,
              // borderBottomRightRadius: 40,
              backgroundColor: 'orange',
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', fontSize: 20, padding: 5}}>
              {/* {item.description} */}
              {item.content}
              {/* {item.content.substring(0,item.content.length -15)} */}
              <Text
                style={{color: 'blue', textDecorationLine: 'underline'}}
                onPress={() => {
                  console.log('pressed');
                  props.navigation.navigate('WebView', {
                    url: item.url,
                    title: item.title,
                  });
                }}>
                .readmore
              </Text>
            </Text>
          </View>
        </View>
      </View>
    );
  }

  render() {
    console.log('dsdsd', this.state.serverData);
    return (
      <View style={styles.container}>
        <Upswipe
          data={this.state.serverData}
          renderCard={item => this.renderCard(item, this.props)}
          // onSwipeLeft={item => console.log(item, 'onSwipeLeft')}
          // onSwipeRight={item => console.log(item, 'onSwipeRight')}
          // renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
