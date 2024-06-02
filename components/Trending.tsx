import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, ImageBackground, Image, Alert } from "react-native";
import * as Animatable from 'react-native-animatable';
import images from "@/constants/images";
import { getCurrentLocation } from "@/constants/helper";


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

interface WeatherData {
    flooding_height: number;
    landslide_area: number;
    message: string;
}


type Post = {
    id: string;
    thumbnail: string;
};

type TrendingItemProps = {
    activeItem: string;
    item: Post;
    setFloodsRate: React.Dispatch<React.SetStateAction<number | null>>;
};

const TrendingItem: React.FC<TrendingItemProps> = ({ activeItem, item, setFloodsRate }) => {
    const [floodsRate, setLocalFloodsRate] = useState<number | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const coords = await getCurrentLocation();
                console.log('coordinates', coords);
                const { latitude, longitude } = coords;

                // Ensure latitude and longitude are available
                if (!latitude || !longitude) {
                    throw new Error('Latitude and longitude are required.');
                }

                const response = await fetch('https://weather-forecasting-2m5l.onrender.com/inference', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        latitude: latitude, // Corrected field name
                        longitude: longitude, // Corrected field name
                    }),
                });
                const result = await response.json();
                console.log('Hazard data are:', result);
                const data = result.data;
                if (data && data.message) {
                    Alert.alert('Message', data.message);
                    // Display the alert for 5 seconds
                    setTimeout(() => {
                        // Custom code to handle the alert closure if needed
                    }, 5000);
                }
                if (data && data.flooding_height !== undefined) {
                    setLocalFloodsRate(data.flooding_height * 100);
                    setFloodsRate(data.flooding_height * 100);
                    console.log('Flooding Height:', data.flooding_height); // Log flooding_height to console
                } else {
                    console.error('flooding_height not found in API response');
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, []);

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
                        {floodsRate !== null && (
                            <View className="flex-row items-center justify-center space-x-5">
                                <Text className="text-white mt-2 font-bold text-xl">Floods {floodsRate.toFixed(2)}</Text>
                                <Image
                                    source={images.dot}
                                    className="w-4 h-4"
                                    resizeMode="contain"
                                />
                            </View>
                        )}
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
    const [floodsRate, setFloodsRate] = useState<number | null>(null);

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
                <TrendingItem activeItem={activeItem} item={item} setFloodsRate={setFloodsRate} />
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
