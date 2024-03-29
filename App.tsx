import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Sign from './screens/Sign';
import Message from './screens/message';


export default function App() {
  const Stack=createNativeStackNavigator();

  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="LogIn" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={Sign} options={{headerShown:false}}/>
      <Stack.Screen name="Message" component={Message} options={{headerShown:false}}/>
    </Stack.Navigator>
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
