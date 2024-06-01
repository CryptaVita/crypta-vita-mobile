import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import icons from "@/constants/icons";
import { FormFieldProps } from "@/constants/types";
import * as Location from 'expo-location';
import FormField from './FormField';

interface Coordinates {
    latitude: number;
    longitude: number;
}

const getAddress = async ({ latitude, longitude }: Coordinates) => {
    const res = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    );

    if (!res.ok) {
        throw new Error("Failed getting address");
    }

    const data = await res.json();
    return data;
}

const MapField: React.FC<FormFieldProps> = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    handlePress,
    ...props
}) => {

    const [address, setAddress] = useState('');
    const [isLoadingAddress, setIsLoadingAddress] = useState(false);
    const [addressStatus, setAddressStatus] = useState('');
    const [errorAddress, setErrorAddress] = useState('');
    const [position, setPosition] = useState({ latitude: null, longitude: null });

    const fetchAddress = async () => {
        setIsLoadingAddress(true);
        setAddressStatus('');
        setErrorAddress('');

        try {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setAddressStatus('error');
                setErrorAddress('Permission to access location was denied');
                setIsLoadingAddress(false);
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setPosition({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });

            try {
                const addressData = await getAddress({
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                });

                setAddress(`${addressData.locality}, ${addressData.city} ${addressData.postcode}, ${addressData.countryName}`);
            } catch (error) {
                setAddressStatus('error');
                setErrorAddress('Failed to fetch the address');
            }

        } catch (error) {
            setAddressStatus('error');
            setErrorAddress('Failed to fetch the address');
        } finally {
            setIsLoadingAddress(false);
        }
    };


    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <View className="w-full h-16 px-4 bg-[#EFEFEF] rounded-2xl  focus:border-primary flex flex-row items-center">

                 {title === "Address" && !position.latitude && !position.longitude && (
                    <TouchableOpacity onPress={(e) => {
                        e.preventDefault();
                        fetchAddress()
                    }}>
                        <Image
                            source={icons.search_home}
                            className="w-6 h-6 "
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
                 {title === "Destination" && !position.latitude && !position.longitude && (
                    <TouchableOpacity onPress={(e) => {
                        e.preventDefault();
                        fetchAddress()
                    }}>
                        <Image
                            source={icons.bag}
                            className="w-6 h-6"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
                 {title === "Search" && !position.latitude && !position.longitude && (
                    <TouchableOpacity onPress={(e) => {
                        e.preventDefault();
                        fetchAddress()
                    }}>
                        <Image
                            source={icons.arrow_left}
                            className="w-6 h-6"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}

                <TextInput
                    className="flex-1 ml-4"
                    value={address}
                    placeholder={placeholder}
                    placeholderTextColor="#7B7B8B"
                    onChangeText={handleChangeText}
                    {...props}
                />

                {title === "Address" && !position.latitude && !position.longitude && (
                    <TouchableOpacity onPress={(e) => {
                        e.preventDefault();
                        fetchAddress()
                    }}>
                        <Image
                            source={icons.arrow_left}
                            className="w-6 h-6"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
                 {title === "Destination" && !position.latitude && !position.longitude && (
                    <TouchableOpacity onPress={(e) => {
                        e.preventDefault();
                        fetchAddress()
                    }}>
                        <Image
                            source={icons.arrow_left}
                            className="w-6 h-6"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default MapField;
