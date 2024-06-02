import { View, Text, Image } from 'react-native'
import React from 'react'
import images from '@/constants/images'

const Statistics = () => {
    return (
        <View className='bg-primary w-[95%] rounded-xl  mx-auto mb-3'>

            <View className='flex-row justify-between mx-8 mt-2'>
                <Text className='text-white text-lg'>Chances of rain</Text>
                <View>
                    <Text className='text-white font-bold text-lg'>Today!</Text>
                    <Text className='text-white text-sm mt-2'>2024-06-3</Text>
                </View>
            </View>

            <View className='flex-row items-center justify-between space-x-20 mx-8'>
                <Text className='text-white text-xl font-bold -mr-28'>Party Cloudy</Text>
                <Image 
                  source={images.cloud}
                  resizeMode='contain'
                  className='w-20 h-20'
                />
            </View>
            <View className='flex-row items-center space-x-4 mx-8'>
                <Image 
                  source={images.location}
                  resizeMode='contain'
                  className='w-10 h-10'
                />
                <View>
                    <Text className='text-white text-lg font-bold'>Rwanda , Nyabihu</Text>
                    <Text className='text-white'>Mukamira | Byangabo</Text>
                </View>
            </View>
            <View className='relative flex-row items-center space-x-2 mx-8 my-4'>
                    <View>
                      <Text className='text-white font-bold text-xl'>72°F</Text>
                    </View>
                <View>

                </View>
                <View className='flex-row space-x-1'>
                    <Image 
                      source={images.cloud_small}
                      className='w-4 h-4'
                      resizeMode='contain'
                    />
                    <Text className='text-white font-bold'>10%</Text>
                </View>
                <View className='flex-row space-x-1'>
                    <Image 
                      source={images.rate}
                      className='w-4 h-4'
                      resizeMode='contain'
                    />
                    <Text className='text-white font-bold'>124 mph</Text>
                </View>

                <Image 
                  source={images.lines}
                  resizeMode='contain'
                  className='w-[35vw]'
                />
            </View>
        </View>
    )
}

export default Statistics