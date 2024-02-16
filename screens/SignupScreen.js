import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import AuthContent from '../components/AuthContent'
import { createUser } from '../util/auth'
import Loading from '../components/Loading';
import { AuthContext } from '../store/auth-context';


export default function SignupScreen() {
    const authContext = useContext(AuthContext);

    const [loading, setLoading] = useState(false);



    console.log("AUTH CONTEXT :", authContext);
    const signUpHandler = async ({ email, pass }) => {
        setLoading(true);
        try {
            const token = await createUser(email, pass);
            authContext.authenticate(token);
        } catch (error) {
            Alert.alert('Hatalı giriş yapıldı !', `${error}`);
        }
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