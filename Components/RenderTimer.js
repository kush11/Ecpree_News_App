import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
export const renderTimer = (data, icon) => {
  const height = 24;
  return (
    <View
      style={{
        height: height,
        //   width: data.length * 14 > 140 ? 140 : data.length * 14,
        width: '100%',
        borderTopLeftRadius: height / 2,
        borderTopRightRadius: height / 2,
        borderBottomLeftRadius: height / 2,
        borderBottomRightRadius: height / 2,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      {icon ? (
        <View
          style={{
            flex: 0.5,
            // backgroundColor:'red',
            right:5,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <Icon name={icon} size={20} />
        </View>
      ) : null}
      <Text
        style={{
          // fontStyle: 'italic',
          alignItems:'center',
          color: 'black',
        }}>
        {data}
      </Text>
    </View>
  );
};
