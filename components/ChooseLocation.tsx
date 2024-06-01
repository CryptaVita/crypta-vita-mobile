import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import FormField from './FormField';
import MapField from './MapField';


const ChooseLocation: React.FC = () => {
    const [isLoadingAddress, setIsLoadingAddress] = useState(false);
    return (
        <View className="relative bg-white p-4 rounded-3xl mb-4">
            <MapField
                title='Address'
                placeholder='Address'
            />
            <MapField 
               title='Destination'
               placeholder='Destination'
               otherStyles='mt-4'
            />
            {isLoadingAddress && <ActivityIndicator size="large" color="#0000ff" />}
        </View>
    );
};

export default ChooseLocation;
