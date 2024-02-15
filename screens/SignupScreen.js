import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthContent from '../components/AuthContent'
import { createUser } from '../util/auth'
import Loading from '../components/Loading';


export default function SignupScreen() {

    const [loading, setLoading] = useState(false);

    const signUpHandler = async ({ email, pass }) => {
        setLoading(true);
        await createUser(email, pass);
        setLoading(false);
    }

    if (loading) {

        return <Loading message='Kullanıcı oluşturuluyor...' />
    }

    return (
        <AuthContent onAuthenticate={signUpHandler} />
    )
}

const styles = StyleSheet.create({})