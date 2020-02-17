import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import Share from 'react-native-share';
import Icon from 'react-native-vector-icons/Ionicons';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
import Circle from './Circle';
import {renderTimer} from './RenderTimer';

export const renderCard = (item, props) => {
  console.log('dsdsdsd', props)
  const clickFunction = (data, item) => {
    const shareOptions = {
      title: item.title,
      message: item.content,
      stickerImage: item.urlToImage,
      backgroundImage: item.urlToImage,
      url: item.url,
      social: Share.Social.FACEBOOK,
    };
    data === 'facebook'
      ? Share.shareSingle(shareOptions)
      : Share.open(shareOptions);
    console.log('data from parent to child', data);
    // console.log('data from parent ', item);
  };
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
      }}>
      <View style={{flex: 1.5, backgroundColor: 'gray'}}>
        <ImageBackground
          source={{
            uri: item.urlToImage,
          }}
          style={{
            flex: 1,
            resizeMode: 'cover',
          }}>
          <TouchableOpacity
            style={{padding:10, height:null, width:'10%'}}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Icon name="md-arrow-back" size={30} color="white" />
          </TouchableOpacity>
          <View
            style={{
              position: 'absolute',
              left: 10,
              right: 10,
              bottom: 50,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View style={{flex: 1}}>{renderTimer(item.source.name, '')}</View>
            <View style={{flex: 0.05}} />
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              {renderTimer(
                moment(`${item.publishedAt}`).format('MMMM Do YYYY, h:mm'),
                'ios-time',
              )}
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
          elevation: 5,
          borderWidth: 0.15,
          backgroundColor: 'white',
          borderRadius: 15,
          borderColor: 'transparent',
          shadowOffset: {width: 4, height: 4},
          shadowColor: '#90a4ae',
          shadowOpacity: 5.0,
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
          <Circle
            clickFunction={clickFunction}
            word={'facebook'}
            color={'gray'}
            icon="facebook-with-circle"
            data={item}
          />
          <Circle
            clickFunction={clickFunction}
            word={'share'}
            color={'gray'}
            icon="share"
            data={item}
          />
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
            backgroundColor: '#dcdcdc',
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
};
