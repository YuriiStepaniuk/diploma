import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text } from 'react-native';

const CustomButton = ({ children, icon, onPress }) => {
  return (
    <Pressable className='px-3 py-2 m-1 flex-row justify-center items-center rounded-md bg-sky-200' onPress={onPress}>
      <Ionicons name={icon} size={18} />
      <Text className='ml-1'>{children}</Text>
    </Pressable>
  );
};

export default CustomButton