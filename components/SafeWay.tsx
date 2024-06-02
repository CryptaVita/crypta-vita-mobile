import { View, Text } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import SearchInput from './SearchInput'

const SafeWay = () => {
    return (
        <View className='my-4 relative'>
            <View>
                <Text className='text-center text-3xl font-semibold'>Get a safe way destination with <Text className='text-primary'>CryptaVita!</Text></Text>
            </View>

            <View className='relative mx-4 mt-4'>
                <MapView
                    style={{ width: '100%', height: 250 }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            <View className='absolute bottom-1 w-full'>
                <SearchInput />
            </View>
            </View>
        </View>
    )
}

export default SafeWay