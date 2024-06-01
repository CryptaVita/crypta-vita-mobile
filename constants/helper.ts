import * as Location from 'expo-location';

export const locationPermission = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    alert('Permission to access location was denied');
    return false;
  }
  return true;
};

export const getCurrentLocation = async () => {
  let location = await Location.getCurrentPositionAsync({});
  return location.coords;
};
