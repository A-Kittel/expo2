import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { CategoriesUnit, Baner } from '../components';

function WomanScreen() {
    return (
        <View style={{ flex: 1, width: "100%" }}>
            <Text>Woman</Text>
        </View>
    );
}
function ManScreen() {
    return (
        <View style={{ flex: 1, width: "100%" }}>
            <Text>Man</Text>
        </View>
    );
}
function KidsScreen() {
    return (
        <View style={{ flex: 1, width: "100%" }}>
            <Text>Kids</Text>
        </View>
    );
}
const Tab = createBottomTabNavigator(

);

const Header: React.FC = (props) => {
    return (
        <View style={headerStyle.container}>
            <Text style={headerStyle.text}>Women</Text>
            <Text style={headerStyle.text}>Man</Text>
            <Text style={headerStyle.text}>Kids</Text>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "#1E1F28",
        justifyContent: 'space-between',
    }, image: {
        flex: 3,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        fontSize: 34,
        color: '#F7F7F7',
        padding: 12,
    }

})

export const Categories: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header/>
            <Baner />
            <CategoriesUnit title="New" />
            <CategoriesUnit title="Clothes" />
            <CategoriesUnit title="Shoes" />
            <CategoriesUnit title="Accesories" />
            <CategoriesUnit title="Accesories2" />
            <CategoriesUnit title="Accesories3" />
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