import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image } from "react-native";
import * as Animatable from 'react-native-animatable';
import React, { useState } from "react";
import images from "@/constants/images";


const zoomIn = {
    0: {
        transform: [{ scale: 0.9 }],
    },
    1: {
        transform: [{ scale: 1 }],
    },
};

const zoomOut = {
    0: {
        transform: [{ scale: 1 }],
    },
    1: {
        transform: [{ scale: 0.9 }],
    },
};

type Post = {
    id: string;
    thumbnail: string;
};

type TrendingItemProps = {
    activeItem: string;
    item: Post;
};
const TrendingItem: React.FC<TrendingItemProps> = ({ activeItem, item }) => {
    return (
        <Animatable.View
            className="mr-5"
            animation={activeItem === item.id ? zoomIn : zoomOut}
            duration={500}
        >
            <TouchableOpacity
                className="relative justify-center items-center"
                activeOpacity={0.7}
            >
                <ImageBackground
                    // @ts-ignore
                    source={item.thumbnail}
                    className="relative w-52 h-72 rounded-[35px] my-5 overflow-hidden flex justify-between"
                    resizeMode="cover"
                >
                    <View className="absolute bottom-0 w-full pb-5 flex justify-center items-center mb-5">
                        <View className="bg-[#E5E5E5] rounded-lg p-4 ">
                            <Text className="font-bold">Jima Beach</Text>
                            <View className="flex-row items-center space-x-2">
                                <Image
                                    source={images.location}
                                    resizeMode="contain"
                                />
                                <Text className="text-white text-center font-semibold">Jimbaran, South Kuta</Text>
                            </View>
                            <View className="mt-2 flex-row justify-between">
                                <Text className="text-gray-100">16,5 km</Text>
                                <View className="bg-primary p-2 rounded-full">
                                    <Text className="text-white">Route</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </Animatable.View>
    );
};

type TrendingProps = {
    posts: Post[];
};
const Places: React.FC<TrendingProps> = ({ posts }) => {
    const [activeItem, setActiveItem] = useState(posts[0].id);

    const viewableItemChanged = ({ viewableItems }: { viewableItems: any[] }) => {
        if (viewableItems.length > 0) {
            setActiveItem(viewableItems[0].key);
        }
    };

    return (
        <>
            <View className='mt-2'>
                <View>
                    <Text className='text-center text-4xl font-semibold'>Get to know others places with <Text className='text-primary'>CryptaVita!</Text></Text>
                </View>

                <View className='flex-row justify-between mx-2 mt-4'>
                    <Text className='font-bold'>Trendings</Text>
                    <Text className='text-primary'>SEE MORE</Text>
                </View>
            </View>

            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TrendingItem activeItem={activeItem} item={item} />
                )}
                horizontal
                onViewableItemsChanged={viewableItemChanged}
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 70,
                }}
                contentOffset={{ x: 170, y: 0 }}
            />
        </>
    )
}

export default Places