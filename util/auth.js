import axios from "axios";
const API_KEY = "AIzaSyDqpQ2pvRb78C7sVuByKF9foIwp8_bBRrg";
export const createUser = async (email, password) => {
    const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
        API_KEY,
        { email: email, password: password, returnSecureToken: true }
    ).catch((err) => console.log("ERROR :", err));
};