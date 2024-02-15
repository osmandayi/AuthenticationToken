import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';


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
  return (
    <NavigationContainer>
      <NormalStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
