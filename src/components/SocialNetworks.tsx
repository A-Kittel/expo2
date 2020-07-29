import React from 'react';
import { View, Text, StyleSheet, Image, Platform } from 'react-native';
import SvgGoogle from '../../svgs/SvgGoogle';
import SvgFb from '../../svgs/SvgFb';

export const SocialNetworks: React.FC = () => {
    return (
        <View style={style.container}>
            <View style={style.element}>
                <SvgGoogle />
            </View>
            <View style={style.element}>
                <SvgFb />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'android' ? 27 : 0,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },
    element: {
        width: 92,
        height: 64,
        borderRadius: 24,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    }
})