import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ButtonWhite from "./ButtonWhite";
import Input from "./Input";
import Button from "./Button";

export default function AuthForm({ isLogin, onSubmit, validations }) {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPass, setEnteredPass] = useState("");
    const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
    const [enteredConfirmPass, setEnteredConfirmPass] = useState("");

    const {
        confEmail: emailsDontMatch,
        email: emailIsInvalid,
        pass: passIsInvalid,
        confPass: passDontMatch,
    } = validations;


    const updateInput = (inputType, enteredValue) => {
        switch (inputType) {
            case "email":
                setEnteredEmail(enteredValue);
                break;
            case "confirm-email":
                setEnteredConfirmEmail(enteredValue);
                break;
            case "password":
                setEnteredPass(enteredValue);
                break;
            case "confirm-password":
                setEnteredConfirmPass(enteredValue);
                break;
        }
    };

    const submitHandler = () => {
        onSubmit({
            email: enteredEmail,
            pass: enteredPass,
            confEmail: enteredConfirmEmail,
            confPass: enteredConfirmPass,
        });
    };

    return (
        <View>
            <Input
                isInvalid={emailIsInvalid}
                value={enteredEmail}
                label="Email"
                keyboardType="email-address"
                onUpdateValue={updateInput.bind(this, "email")}
            />
            {!isLogin && (
                <Input
                    isInvalid={emailsDontMatch}
                    value={enteredConfirmEmail}
                    label="Emaili Doğrula"
                    keyboardType="email-address"
                    onUpdateValue={updateInput.bind(this, "confirm-email")}
                />
            )}
            <Input
                isInvalid={passIsInvalid}
                value={enteredPass}
                label="Şifre"
                secure
                onUpdateValue={updateInput.bind(this, "password")}
            />
            {!isLogin && (
                <Input
                    isInvalid={passDontMatch}
                    value={enteredConfirmPass}
                    label="Şifreyi Doğrula"
                    secure
                    onUpdateValue={updateInput.bind(this, "confirm-password")}
                />
            )}
            <View style={styles.buttons}>
                <Button
                    onPress={submitHandler}
                    title={isLogin ? "Giriş Yap" : "Kayıt Ol"}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttons: { marginTop: 10 },
});
