import React from 'react';
import { View, Text, Image } from 'react-native';
import images from '@/constants/images';

const ManagementTeam = () => {
    return (
        <View className="w-full bg-white my-2 p-2 rounded-md shadow-lg">
            <View className="flex-row items-center space-x-3">
                <Image
                    source={images.user}
                    className="w-14 h-14"
                    resizeMode="contain"
                />
                <View className="flex-1">
                    <Text className="font-semibold">Ineza Cinta Castella</Text>
                    <Text className="text-gray-600">Designer | At CryptaVita</Text>
                    <View className="flex-row items-center mt-1">
                        <Text className="text-gray-600 mr-1">Rating:</Text>
                        <View className="flex-row">
                            <Image
                                source={images.starFilled}
                                className="w-6 h-6"
                                resizeMode="contain"
                            />
                            <Image
                                source={images.starFilled}
                                className="w-6 h-6"
                                resizeMode="contain"
                            />
                            <Image
                                source={images.starFilled}
                                className="w-6 h-6"
                                resizeMode="contain"
                            />
                            <Image
                                source={images.starFilled}
                                className="w-6 h-6"
                                resizeMode="contain"
                            />
                            <Image
                                source={images.star}
                                className="w-6 h-6"
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <Image
                        source={images.heart}
                        className="w-14 h-14"
                        resizeMode="contain"
                    />
                </View>
            </View>
        </View>
    );
}

export default ManagementTeam;
