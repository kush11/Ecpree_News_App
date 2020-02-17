import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'
const circle = ({
    word = 'Default', color,icon,clickFunction,data
}) => (
        <View style={{ padding: 9 }}>
            <TouchableOpacity 
            onPress={()=>clickFunction(word,data)}
            style={[{
                ...styles.circle,
                backgroundColor: color ? color : 'transparent'
            }]}>
                {/* <Text style={{ fontSize: 10 }}>{word}</Text> */}
                <Icon name={icon} size={30}/>
            </TouchableOpacity>
        </View>
    );

const styles = StyleSheet.create({
    circle: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        borderColor: 'white',
        borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'center',
        // margin:10
    }
})

export default circle;
