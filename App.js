import { Pressable, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import { useContext } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import TestScreen from './screens/TestScreen';


const Stack = createNativeStackNavigator();

export default function App() {

  const NormalStack = () => {

    return (
      <Stack.Navigator screenOptions={{
        // headerTitle: 'Login', // her sayfada aynı başlığı göstermek için kullanılır 
        headerStyle: {
          backgroundColor: 'blueviolet',
        },
        headerTintColor: 'white',
        contentStyle: {
          // backgroundColor: 'green', // header dışındaki arka planın rengini ayarlar !
        },
      }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{
          headerTitle: 'Kullanıcı Giriş', // Spesifik olarak her sayfanın header kısmı düzenlenebilir !
          headerTitleAlign: 'center', // headerTitle'ı ortalar !
        }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{
          headerTitle: 'Kullanıcı Kayıt', // Spesifik olarak her sayfanın header kısmı düzenlenebilir !
          headerTitleAlign: 'center', // headerTitle'ı ortalar !
        }} />
      </Stack.Navigator>
    );
  }
  const AfterAuthenticatedStack = () => {
    const authContext = useContext(AuthContext);
    return (
      <Stack.Navigator screenOptions={{
        // headerTitle: 'Login', // her sayfada aynı başlığı göstermek için kullanılır 
        headerStyle: {
          backgroundColor: 'blueviolet',
        },
        headerTintColor: 'white',
        headerRight: ({ tintColor }) => (
          <Pressable style={({ pressed }) => pressed && styles.pressed} onPress={authContext.logout}>
            <MaterialIcons name="logout" size={30} color={tintColor} />
          </Pressable>
        ),
        contentStyle: {
          // backgroundColor: 'green', // header dışındaki arka planın rengini ayarlar !
        },
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerTitle: 'Anasayfa', // Spesifik olarak her sayfanın header kısmı düzenlenebilir !
          headerTitleAlign: 'center', // headerTitle'ı ortalar !
        }} />
        <Stack.Screen name="Test" component={TestScreen} options={{
          headerTitle: 'Test', // Spesifik olarak her sayfanın header kısmı düzenlenebilir !
          headerTitleAlign: 'center', // headerTitle'ı ortalar !
        }} />
      </Stack.Navigator>
    );
  }

  const Navigation = () => {
    const authContext = useContext(AuthContext);

    const { isAuthenticated } = authContext;

    return <NavigationContainer>
      {isAuthenticated ? <AfterAuthenticatedStack /> : <NormalStack />}
    </NavigationContainer>
  }
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: .5,
  },
});
