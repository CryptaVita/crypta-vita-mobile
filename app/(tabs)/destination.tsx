import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Image, Platform, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAP_KEY } from '../../constants/GoogleMapApiKey';
import Loader from '../../components/Loader';
import { locationPermission, getCurrentLocation } from '../../constants/helper';
import images from '@/constants/images';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import ChooseLocation from '@/components/ChooseLocation';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

type Coordinates = {
  latitude: number;
  longitude: number;
};

type State = {
  curLoc: Coordinates;
  destinationCords: Coordinates;
  isLoading: boolean;
  heading: number;
};

const Destination = () => {
  const navigation = useNavigation()
  const mapRef = useRef<MapView>(null);
  const markerRef = useRef<typeof Marker>(null);

  const [state, setState] = useState<State>({
    curLoc: {
      latitude: 30.7046,
      longitude: 77.1025,
    },
    destinationCords: {} as Coordinates,
    isLoading: false,
    heading: 0,
  });

  const { curLoc, destinationCords, isLoading, heading } = state;
  const updateState = (data: Partial<State>) => setState((state) => ({ ...state, ...data }));

  useEffect(() => {
    getLiveLocation();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getLiveLocation();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const getLiveLocation = async () => {
    const locPermissionGranted = await locationPermission();
    if (locPermissionGranted) {
      const { latitude, longitude, heading } = await getCurrentLocation();
      updateState({
        heading: heading !== null ? heading : 0,
        curLoc: { latitude, longitude },
      });
      console.log("Current Location Coordinates:", latitude, longitude);
    }
  };

  const onPressLocation = () => {
    router.push('chooseLocation', { getCordinates: fetchValue });
  };

  const fetchValue = (data: Coordinates) => {
    updateState({
      destinationCords: {
        latitude: data.latitude,
        longitude: data.longitude,
      },
    });
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1">
        <MapView
          ref={mapRef}
          className='h-full'
          style={StyleSheet.absoluteFillObject}
          initialRegion={{
            ...curLoc,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          provider={PROVIDER_GOOGLE}
        >
          <Marker
            ref={markerRef}
            coordinate={curLoc}
            rotation={heading}
          >
            <Image
              source={images.icBike}
              className="w-10 h-10"
              style={{ transform: [{ rotate: `${heading}deg` }] }}
              resizeMode="contain"
            />
          </Marker>
          {destinationCords.latitude && (
            <Marker
              coordinate={destinationCords}
              image={images.icGreenMarker}
            />
          )}
          {destinationCords.latitude && (
            <MapViewDirections
              origin={curLoc}
              destination={destinationCords}
              apikey={GOOGLE_MAP_KEY}
              strokeWidth={6}
              strokeColor="red"
              optimizeWaypoints={true}
              onStart={(params) => {
                console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
              }}
              onReady={(result) => {
                console.log(`Distance: ${result.distance} km`);
                console.log(`Duration: ${result.duration} min.`);
                mapRef.current?.fitToCoordinates(result.coordinates, {
                  edgePadding: {
                    right: 30,
                    bottom: 300,
                    left: 30,
                    top: 100,
                  },
                });
              }}
              onError={(errorMessage) => {
                console.log('GOT AN ERROR', errorMessage);
              }}
            />
          )}
        </MapView>
        <TouchableOpacity
          className="absolute bottom-0 right-0"
          onPress={() => mapRef.current?.animateToRegion({
            latitude: curLoc.latitude,
            longitude: curLoc.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          })}
        >
          <Image source={images.greenIndicator} />
        </TouchableOpacity>
      </View>
      <ChooseLocation />
      <Loader isLoading={isLoading} />
    </SafeAreaView>
  );
};

export default Destination;
