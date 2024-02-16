import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Hoşgeldiniz !</Text>
                <Text>Başarılı bir şekilde giriş yaptınız !</Text>
            </View>
            <View style={styles.button}>
                <Button title={'TESTE GIT'} onPress={() => navigation.navigate('Test')} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
})