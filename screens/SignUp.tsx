import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useState } from 'react';
import ValidationTextInput from '../components/ValidationTextInput';
import { useDispatch } from 'react-redux';
import { setUserData } from '../store/userSlice';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const validateFields = () => {
    const firstNameValid = /^[A-Z][a-z]+$/.test(firstName);
    const lastNameValid = /^[A-Z][a-z]+$/.test(lastName);
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const confirmPasswordValid = password === confirmPassword;

    setIsFirstNameValid(firstNameValid);
    setIsLastNameValid(lastNameValid);
    setIsEmailValid(emailValid);
    setIsPasswordValid(passwordValid);
    setIsConfirmPasswordValid(confirmPasswordValid);

    return firstNameValid && lastNameValid && emailValid && passwordValid && confirmPasswordValid;
  };

  const onSignUpHandler = async () => {

    if (!validateFields()) {
      Alert.alert('Failed to sign up', 'Some fields are filled inappropriately')
      return;
    }

    dispatch(setUserData({ name: firstName, surname: lastName }));
    navigation.navigate('Home');
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View className="flex w-full h-full bg-slate-200 justify-center">
        <View className="pt-20 mx-4 flex justify-center">
          <Text className="text-5xl m-4 text-center">Sign Up </Text>
          <ValidationTextInput
            placeholder="First Name"
            placeholderTextColor="gray"
            regex={/^[A-Z][a-z]+$/}
            validationMessage="Please enter valid name"
            value={firstName}
            onChangeText={setFirstName}
          />
          <ValidationTextInput
            placeholder="Second Name"
            placeholderTextColor="gray"
            regex={/^[A-Z][a-z]+$/}
            validationMessage="Please enter valid surname"
            value={lastName}
            onChangeText={setLastName}
          />
          <ValidationTextInput
            placeholder="Email"
            placeholderTextColor="gray"
            regex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
            validationMessage="Please enter valid email"
            value={email}
            onChangeText={setEmail}
          />
          <ValidationTextInput
            placeholder="Password"
            placeholderTextColor="gray"
            regex={/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/}
            validationMessage="Please enter valid password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <ValidationTextInput
            placeholder="Confirm Password"
            placeholderTextColor="gray"
            regex={/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/}
            validationMessage="Passwords should be equal"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <View className="flex-row justify-center mt-2">
            <Text>I Agree with </Text>
            <Pressable>
              <Text className="text-sky-600">Terms </Text>
            </Pressable>
            <Text>and </Text>
            <Pressable>
              <Text className="text-sky-600">Policy</Text>
            </Pressable>
          </View>
          <Pressable
            className="w-full bg-sky-400 p-3 rounded-2xl mb-3 mt-8"
            onPress={onSignUpHandler}
          >
            <Text className="text-2xl text-center text-sky-900">Confirm</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
