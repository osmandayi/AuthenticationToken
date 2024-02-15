import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Button({ title, onPress }) {
    return (
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={onPress} >
            <View>
                <Text style={styles.text}>{title}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        paddingVertical: 10,
        borderRadius: 20,
    },
    pressed: {
        opacity: .5,
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
})