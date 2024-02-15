import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Loading({ message }) {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>{message}</Text>
            <ActivityIndicator size='large' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
})