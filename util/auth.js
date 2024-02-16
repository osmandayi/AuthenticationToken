import axios from "axios";
import { Alert } from "react-native";
const API_KEY = "AIzaSyDqpQ2pvRb78C7sVuByKF9foIwp8_bBRrg";


const authenticate = async (mode, email, password) => {


    const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
        { email: email, password: password, returnSecureToken: true }
    );

    const token = response.data.idToken;


    return token;
}

export const createUser = (email, password) => {
    return authenticate('signUp', email, password);
};
export const login = (email, password) => {
    return authenticate('signInWithPassword', email, password);
};
