import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react"
import Loading from "../components/Loading";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authenticate: (token) => { },
    logout: () => { },
});




function AuthContextProvider({ children }) {
    const [authToken, setAuthToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchToken = async () => {
            const storedToken = await AsyncStorage.getItem('token');
            if (storedToken) {
                setAuthToken(storedToken);
            }
            setTimeout(() => setLoading(false), 1000);
        }


        fetchToken();

    }, []);

    if (loading) {
        return <Loading message='Giriş yapılıyor...' />
    }

    const authenticate = (token) => {
        setAuthToken(token);
        AsyncStorage.setItem('token', token);
    }
    const logout = () => {
        setAuthToken(null);
        AsyncStorage.removeItem('token');
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logout: logout,
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}


export default AuthContextProvider