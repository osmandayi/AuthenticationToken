import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({ label, keyboardType, onUpdateValue, value, secure, isInvalid }) {
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={"padding"}
        >
            <View style={styles.inputContainer}>
                <Text style={[styles.label, isInvalid && styles.labelInvalid]}>{label}</Text>
                <TextInput
                    style={[styles.input, isInvalid && styles.inputInvalid]}
                    value={value}
                    autoCapitalize='none'
                    secureTextEntry={secure}
                    keyboardType={keyboardType}
                    onChangeText={onUpdateValue}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8,
    },
    label: {
        color: 'white',
        marginBottom: 3,
    },
    input: {
        backgroundColor: 'pink',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 20,
        fontSize: 16,
    },
    labelInvalid: { color: 'red' },
    inputInvalid: {
        backgroundColor: 'red',
        color: 'white',
    }
})