import { View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/Header';
import Choise from '../components/Choise';

const HomeScreen = () => {
  return (
    <View className="w-full h-full flex-col justify-between items-center ">
      <StatusBar style="dark" />
      <Image
        className="h-full w-full absolute"
        source={require('../assets/background.png')}
      />
      <Header></Header>
      <View className="w-full h-full p-8 my-10">
        <Text className="text-3xl text-gray-100 text-center bold my-10">
          How may i assist You today ?
        </Text>
        <View className=" flex-row justify-around items-center">
          <Choise
            text="Start asking any questions"
            toScreen="Chat"
            pictureName="chat.png"
          />
          <Choise
            text="Discover places on real-time map"
            toScreen="Map"
            pictureName="Map.png"
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
