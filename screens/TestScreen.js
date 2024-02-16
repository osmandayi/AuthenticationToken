import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

export default function TestScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Button title={'Anasayfaya Git'} onPress={() => navigation.navigate('Home')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
})