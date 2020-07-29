import React from 'react';
import { View, ScrollView, StyleSheet, Text, Alert, Image, ImageBackground } from 'react-native';
import { Input, Button, SocialNetworks } from '../components';

const mainImg = require('../../assets/main.png');
const mainSmallM = require('../../assets/mainSmallM.png');
const mainSmallS = require('../../assets/mainSmallS.png');

const Header: React.FC = () => {
    return (
        <View style={headerStyle.container}>
            <ImageBackground source={mainImg} style={headerStyle.image}>
                <Text style={headerStyle.text}>New Collection</Text>
            </ImageBackground>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: "white",
    }, image: {
        flex: 2,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        fontSize: 34,
        color: '#F7F7F7',
        marginTop: 72,
    }

})
const Content: React.FC = () => {
    return (
        <View style={contentStyle.container}>
            <View style={contentStyle.doubleColumn}>
                <View  style={contentStyle.imageSmall}>
                    <Text style={contentStyle.textSpecial}>Summer sales</Text>
                </View>
                <ImageBackground source={mainSmallS} style={contentStyle.imageSmall}>
                    <Text style={contentStyle.text}>Black</Text>
                </ImageBackground>
            </View>
            <View style={contentStyle.singleColumn}>
            <ImageBackground source={mainSmallM} style={contentStyle.imageBig}>
                <Text style={contentStyle.text}>Men's hats</Text>
            </ImageBackground>
            </View>
        </View>
    )
}

const contentStyle = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: "row",
        backgroundColor: "white",
    },doubleColumn:{
        flex: 2, 
        flexDirection: "column",
    },singleColumn:{
        flex:2,
        flexDirection: "column",
    },
     imageBig: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }, imageSmall: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: '#1E1F28',
    },
    text: {
        fontSize: 34,
        color: '#F7F7F7',
        marginTop: 72,
    },
    textSpecial: {
        fontSize: 34,
        color: '#EF3651',
        marginTop: 72,
    }

})

export const Home: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header />
            <Content />
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 16,
    },
    content: {
        flex: 2,
        justifyContent: 'space-between',

    },
    text: {
        color: '#F7F7F7',
    }
})