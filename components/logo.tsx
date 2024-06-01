import { View, Text, Image } from 'react-native'
import React from 'react'
import icons from '@/constants/icons'


const Logo = () => {
  return (
    <View className='flex-row items-center justify-center'>
         <Image 
           source={icons.logo}
           resizeMode='contain'
           className='w-16 h-10'
         />
         <Text className='font-bold text-xl text-white'>CryptaVita!</Text>
    </View>
  )
}

export default Logo