import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import { useState } from 'react';

const ChatScreen = () => {
  const [inputMessage, setInputMessage] = useState();

  const [responseMessage, setResponseMessage] = useState('');

  const sendMessageHandler = async () => {
    try {
      const response = await fetch('http://192.168.0.100:3000/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json();
      setResponseMessage(data.response); // Update the state with the response message
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const textInputHandler = (text) => {
    setInputMessage(text);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View className="w-full h-full flex-col justify-center items-center">
        <View className="flex-1">
          <Text className="text-3xl bold mt-4">Hello from Chat page</Text>
          {responseMessage ? (
            <Text className="mt-2">{responseMessage}</Text>
          ) : null}
        </View>

        <View className="flex-1 flex-row justify-center items-center mb-5 mt-20">
          <TextInput
            placeholder="start talking here"
            className="p-3 rounded-lg bg-black/5 w-2/3"
            value={inputMessage}
            onChangeText={() => textInputHandler(inputMessage)}
          />
          <CustomButton icon="add" onPress={sendMessageHandler}>
            Send
          </CustomButton>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
