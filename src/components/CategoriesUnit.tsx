import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, StatusBar, Platform, ImageBackground } from 'react-native';

const img = require('../../assets/cat1.png');

interface Props {
    title: string;
    source?: "";
}



export const CategoriesUnit: React.FC<Props> = ({title}) => {
    return (
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
                <ImageBackground source={img} style={styles.img}>
                </ImageBackground>
            </View>
    );

}; 

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2C36',
    borderRadius: 5,
    marginTop: Platform.OS === 'android' ? 27 : 0,
    height: 100,
},
text: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    paddingVertical: 14,
    textTransform: "uppercase",
    color: '#F7F7F7',
},img: {
    flex: 1,
    paddingVertical: 14,
    height: 100,
},


})