import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthForm from './AuthForm'
import ButtonWhite from './ButtonWhite'
import { useNavigation } from '@react-navigation/native'

export default function AuthContent({ isLogin, onAuthenticate }) {
    const navigation = useNavigation();

    const [credentialsIsInvalid, setCredentialsIsInvalid] = useState({
        email: false,
        pass: false,
        confEmail: false,
        confPass: false,
    })

    const submitHandler = (credentials) => {
        let { confEmail, confPass, pass, email } = credentials;

        email = email.trim();
        pass = pass.trim();

        const emailIsValid = email.includes('@');
        const passIsValid = pass.length > 6;
        const emailsAreEqual = email === confEmail;
        const passAreEqual = pass === confPass;


        if (!emailIsValid || !passIsValid || (!isLogin && (!emailsAreEqual || !passAreEqual))) {
            setCredentialsIsInvalid({
                email: !emailIsValid,
                pass: !passIsValid,
                confEmail: !emailIsValid || !emailsAreEqual,
                confPass: !passIsValid || !passAreEqual,
            });
            return Alert.alert('Hopss !', 'Lütfen girdiğiniz değerleri kontrol ediniz !');
        }

        setCredentialsIsInvalid({
            email: false,
            pass: false,
            confEmail: false,
            confPass: false,
        });
        onAuthenticate({ email, pass })
    }

    const switchScreen = () => {
        if (isLogin) {
            navigation.navigate('Signup');
        }
        else {
            navigation.navigate('Login');
        }
    }

    return (
        <View style={styles.container}>
            <AuthForm validations={credentialsIsInvalid} onSubmit={submitHandler} isLogin={isLogin} />
            <View>
                <ButtonWhite onPress={switchScreen} title={isLogin ? "Yeni Kullanıcı Oluştur" : "Giriş Yap"} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blueviolet',
        marginTop: 50,
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 20,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: .5,
        shadowRadius: 4,
    },
})