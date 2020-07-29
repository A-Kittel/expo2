import React from 'react';
import { View, Animated, StyleSheet, Text } from 'react-native';

export const Baner: React.FC = () => {
    return (
        <View style={styles.container}>
                <Text style={styles.texth1}>Summer sales</Text>
                <Text style={styles.texth2}>Up to 50% off</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FF3E3E",
        height: 100,
        borderRadius: 8,
    },
    texth1: {
        fontWeight: 'bold',
        fontSize: 24,
        letterSpacing: 2.5,
        textTransform: "uppercase",
        color: "#F7F7F7",

    },  texth2: {
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 2.5,
        color: "#F7F7F7",

    },
});
