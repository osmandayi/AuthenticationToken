import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ButtonWhite({ title, onPress }) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed]}>
            <View>
                <Text style={styles.text}>{title}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        borderRadius: 20,
    },
    pressed: {
        opacity: .5,
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
})