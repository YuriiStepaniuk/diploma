import { View, Text, Image } from 'react-native';

import { useSelector } from 'react-redux';

const Header = () => {
  const { name, surname } = useSelector((state) => state.user);
  return (
    <View className="flex-row justify-around w-full items-center mt-12">
      <Text className="text-2xl text-gray-100 bold">
        {(name && surname) ? `Welcome ${name} ${surname}` : 'You are not logged in' } !
      </Text>
      <View>
        <Image
          source={require('../assets/profile.jpg')}
          className="w-[48] h-[48] rounded-2xl"
        />
      </View>
    </View>
  );
};

export default Header;
