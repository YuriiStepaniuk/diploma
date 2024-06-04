import { useCallback, useLayoutEffect, useState } from 'react';
import { Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import CustomButton from '../components/CustomButton';

const Mapview = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 37.78,
    lng: -122.43,
  });

  const region = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = (event) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({ lat: lat, lng: lng });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        'No location picked',
        'You have to pick a location by tapping on a map first'
      );
    }

    navigation.navigate('Map', {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <CustomButton icon="save" onPress={savePickedLocationHandler}>
          Save
        </CustomButton>
      ),
    });
  }, [navigation, savePickedLocationHandler]);

  return (
    <MapView
      initialRegion={region}
      className="w-full h-full"
      onPress={selectLocationHandler}
    >
      {selectedLocation && (
        <Marker
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Mapview;
