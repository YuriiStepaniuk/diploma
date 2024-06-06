import { View, Text, Pressable, Linking } from 'react-native';

const Footer = () => {
  const onPressHandler = () => {
    const url = 'https://github.com/YuriiStepaniuk';
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

  return (
    <View className='w-full flex-row justify-center items-center mt-8'>
      <Text>2024 Copyright by </Text>
      <Pressable onPress={onPressHandler}>
        <Text className="text-sky-600">Yurii Stepaniuk</Text>
      </Pressable>
    </View>
  );
};

export default Footer;
