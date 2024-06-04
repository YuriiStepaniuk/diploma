import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/Home';
import ChatScreen from './screens/Chat';
import SettingsScreen from './screens/Settings';
import RegistrationScreen from './screens/Registration';
import SignUpScreen from './screens/SignUp';
import MapScreen from './screens/Map';
import Mapview from './screens/Mapview';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Registration"
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name='Map' component={MapScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name='Mapview' component={Mapview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
