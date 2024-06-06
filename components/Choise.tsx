import { Pressable, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface IChoise {
  text: string;
  pictureName: string;
  toScreen: string;
}

const Choise = ({ text, pictureName, toScreen }: IChoise) => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate(toScreen);
  };

  return (
    <View className="w-1/2 h-[280] bg-gray-200 rounded-2xl flex-col justify-center items-center p-2 shadow-md">
      {pictureName === 'chat' ? (
        <Image
          source={require(`../assets/chat.png`)}
          className="w-[120] h-[120]"
        />
      ) : (
        <Image
          source={require(`../assets/Map.png`)}
          className="w-[120] h-[120]"
        />
      )}
      <Text className="text-center text-lg text-sky-900 my-3">{text}</Text>
      <TouchableOpacity
        className="w-full bg-sky-400 rounded-xl p-3"
        onPress={onPressHandler}
      >
        <Text className="text-sky-900 text-center">Dive in!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Choise;
