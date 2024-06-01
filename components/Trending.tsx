import { View, Text, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'

const Trending = () => {
    return (
        <View className='flex-row gap-[88px] '>
            <View className='relative rounded-2xl'>
                <Image
                    source={images.earthquakes}
                    resizeMode='cover'
                    className='absolute h-[20vh] w-'
                />
                <Text>
                    hello
                </Text>
            </View>
            <View className='relative rounded-2xl'>
                <Image
                    source={images.landslide}
                    resizeMode='cover'
                    className='absolute h-[20vh] w-'
                />
                <Text>
                    hello
                </Text>
            </View>
            <View className='relative rounded-2xl'>
                <Image
                    source={images.floods}
                    resizeMode='cover'
                    className='absolute h-[20vh] w-'
                />
                <Text>
                    hello
                </Text>
            </View>
        </View>
    )
}

export default Trending