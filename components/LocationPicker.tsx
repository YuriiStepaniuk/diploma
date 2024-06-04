import { View, Alert, Image, Text } from 'react-native';
import { useEffect, useState } from 'react';
import CustomButton from './CustomButton';
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
} from 'expo-location';
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from '@react-navigation/native';
import { PermissionStatus } from 'expo-location';
import { getMapPreview } from '../utils/location';

const LocationPicker = () => {
  const [pickedLocation, setPickedLocation] = useState();

  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = {
        lat: route.params.pickedLat,
        lng: route.params.pickedLng,
      };
      setPickedLocation(mapPickedLocation);
    }
  }, [route, isFocused]);

  const verifyPermissions = async () => {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient permission!',
        'You need to grant geolocation permission in order to use that'
      );
      return false;
    }

    return true;
  };

  const getLocationhandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) return;

    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const pickOnMapHandler = () => {
    navigation.navigate('Mapview');
  };

  let locationPreview = <Text>No Location picked yet</Text>;

  if (pickedLocation) {
    locationPreview = (
      <Image
        className="w-full h-full rounded-md"
        source={{ uri: getMapPreview(pickedLocation.lat, pickedLocation.lng) }}
      />
    );
  }

  return (
    <View>
      <View className="w-[320] h-[320] rounded-lg my-2 border-sky-300 justify-center items-center bg-slate-200">
        {locationPreview}
      </View>
      <View className="flex-row justify-around items-center">
        <CustomButton icon="location" onPress={getLocationhandler}>
          Locate User
        </CustomButton>
        <CustomButton icon="map" onPress={pickOnMapHandler}>
          Pick on map
        </CustomButton>
      </View>
    </View>
  );
};

export default LocationPicker;
