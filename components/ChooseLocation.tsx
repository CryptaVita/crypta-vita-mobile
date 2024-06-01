import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ChooseLocation = () => {
    return (
        <View className="bg-white p-4 rounded-t-3xl">
            <Text className="text-lg font-semibold"></Text>
            <TouchableOpacity
                className="bg-white border rounded-md flex items-center justify-center h-12 mt-2"
            >
                <Text>Choose your location</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ChooseLocation