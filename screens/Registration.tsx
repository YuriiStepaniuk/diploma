import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import ValidationTextInput from '../components/ValidationTextInput';

const RegistrationScreen = ({ navigation }) => {
  const onLoginHandler = () => {
    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View className="bg-white h-full w-full">
        <StatusBar style="dark" />
        <Image
          className="h-full w-full absolute"
          source={require('../assets/background.png')}
        />

        {/* Lights */}
        <View className="flex-row justify-around w-full absolute">
          <Image
            className="h-[225] w-[90]"
            source={require('../assets/light.png')}
          />
          <Image
            className="h-[160] w-[65]"
            source={require('../assets/light.png')}
          />
        </View>

        {/* title and form */}
        <View className="h-full w-full flex justify-around pt-40 pb-8">
          {/* Title */}
          <View className="flex items-center">
            <Text className="text-white font-bold tracking-wider text-5xl">
              Login
            </Text>
          </View>
          <View className="flex items-center mx-4 space-y-4">
            {/* Email */}
            <ValidationTextInput
              placeholder="Email"
              placeholderTextColor="gray"
              regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
              validationMessage="Please enter valid email"
            />

            {/* Password */}
            <ValidationTextInput
              className="bg-black/5 p-5 rounded-2xl w-full"
              placeholder="Password"
              placeholderTextColor="gray"
              secureTextEntry
              regex={
                /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
              }
              validationMessage="Password should be 8 symbols length, contain 1 uppercase symbol, 1 lowercase symbol, 1 number and 1 special character"
            />

            <View className="w-full">
              <TouchableOpacity
                className="w-full bg-sky-400 p-3 rounded-2xl mb-3"
                onPress={onLoginHandler}
              >
                <Text className="text-xl font-bold text-red text-center">
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center">
              <Text>Don`t have an account? </Text>
              <Pressable onPress={() => navigation.navigate('SignUp')}>
                <Text className="text-sky-600">Sign Up</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;
