import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name={icon} size={20} />
        </View>
      ) : null}
      <Text
        style={{
          // fontStyle: 'italic',
          color: 'black',
        }}>
        {data}
      </Text>
    </View>
  );
};
