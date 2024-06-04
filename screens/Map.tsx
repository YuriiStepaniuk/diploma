import { View, Text, Pressable, Image } from 'react-native';
import CustomButton from '../components/CustomButton';
import LocationPicker from '../components/LocationPicker';


const MapScreen = () => {
  return (
    <View className="w-full h-full flex justify-center items-center rounded-lg">
      <Image
        className="h-full w-full absolute"
        source={require('../assets/background.png')}
      />
      <Text className="text-4xl text-center text-sky-100 bold mb-16">Start Discovering</Text>
      <LocationPicker />
    </View>
  );
};

export default MapScreen;
