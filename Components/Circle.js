import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const circle = ({
    word = 'Default', color
}) => (
        <View style={{ padding: 9 }}>
            <View style={[{
                ...styles.circle,
                backgroundColor: color ? color : 'transparent'
            }]}>
                <Text style={{ fontSize: 10 }}>{word}</Text>
            </View>
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
