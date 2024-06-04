import { View, Text, Image } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

const Header = () => {
  return (
    <View className="flex-row justify-around w-full items-center mt-12">
      <Text className="text-2xl text-gray-100 bold">Welcome /Name Surname/ !</Text>
      <View>
        {/* <Ionicons name='notifications' /> */}
        <Image
          source={require('../assets/profile.jpg')}
          className="w-[48] h-[48] rounded-2xl"
        />
      </View>
    </View>
  );
};

export default Header;
