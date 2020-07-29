import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, StatusBar, Platform } from 'react-native';



interface Props {
    title: string;
    onPress: () => void;
}

export const Button: React.FC<Props> = ({title, onPress}) => {
    return (
            <TouchableOpacity style={style.container} onPress={onPress}>
            <Text style={style.text}>{title}</Text>
            </TouchableOpacity>
    );

}; 

const style = StyleSheet.create({
    container: {
    alignItems: 'center',
    backgroundColor: '#EF3651',
    borderRadius: 25,
    marginTop: Platform.OS === 'android' ? 27 : 0,
},
text: {
    fontSize: 14,
    lineHeight: 20,
    paddingVertical: 14,
    textTransform: "uppercase",
    color: '#F5F5F5',
}

})
