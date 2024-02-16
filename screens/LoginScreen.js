import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import AuthContent from '../components/AuthContent'
import { login } from '../util/auth'
import Loading from '../components/Loading';
import { AuthContext } from '../store/auth-context';

export default function LoginScreen() {
    const authContext = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    console.log("AUTH CONTEXT :", authContext);

    const loginHandler = async ({ email, pass }) => {
        setLoading(true);
        try {
            const token = await login(email, pass);
            authContext.authenticate(token);
            console.log("Token :", token);
        } catch (error) {
            Alert.alert('Hatalı giriş yapıldı !', `${error}`);
        }
        setLoading(false);
    }


    if (loading) {
        return <Loading message='Giriş yapılıyor...' />
    }

    return (
        <AuthContent onAuthenticate={loginHandler} isLogin />
    )
}

const styles = StyleSheet.create({})