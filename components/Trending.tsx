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
                    className="w-52 h-72 rounded-[35px] my-5 overflow-hidden flex justify-between"
                    resizeMode="cover"
                >
                    <View className="flex justify-center items-center mt-4">
                        <View className="bg-primary rounded-lg p-2">
                            <Text className="text-white text-center">Yesterday</Text>
                        </View>
                    </View>
                    <View className="flex justify-center items-center mb-5">
                        <View className="bg-white/50 rounded-lg p-2">
                            <Text className="text-white text-center font-semibold">Landslide 9%</Text>
                        </View>
                        <View className="flex-row items-center justify-center space-x-5">
                            <Text className="text-white mt-2 font-bold text-xl">Floods 20%</Text>
                            <Image 
                              source={images.dot}
                              className="w-4 h-4"
                              resizeMode="contain"
                            />
                        </View>
                        <Text className="text-white">3 ROADS DESTROYED</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        </Animatable.View>
    );
};

type TrendingProps = {
    posts: Post[];
};

const Trending: React.FC<TrendingProps> = ({ posts }) => {
    const [activeItem, setActiveItem] = useState(posts[0].id);

    const viewableItemChanged = ({ viewableItems }: { viewableItems: any[] }) => {
        if (viewableItems.length > 0) {
            setActiveItem(viewableItems[0].key);
        }
    };

    return (
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
    );
};

export default Trending;
