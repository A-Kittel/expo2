import React from 'react';
import { View, ScrollView, StyleSheet, Text, Alert, Image } from 'react-native';
import { Input, Button, SocialNetworks } from '../components';

const Header: React.FC = () => {
    return (
        <View>
            <Text style={headerStyle.text}>Login</Text>
        </View>
    )
}

const headerStyle = StyleSheet.create({
    text: {
        fontSize: 34,
        color: 'white',
        marginTop: 72,
    }
})

export const Login: React.FC = () => {
    return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={{ flex:1 }}>
                <Header />
            </View>
            <View style={styles.content}>
            <Input label="Email" />
            <Input label="Password" />
                <Text style={styles.text}>
                    Already have a account?
                </Text>
            <Button title="Login" onPress={() => Alert.alert("press me")} />
            </View>
            <View style={{ flex:2, justifyContent: 'flex-end' }}>
                <Text style={styles.text}>Or login with social account</Text>
               <SocialNetworks/>
            </View>

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