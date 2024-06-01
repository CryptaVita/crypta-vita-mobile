import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import SearchField from '@/components/SearchField'
import RecentHazards from '@/components/Trending'

const Home = () => {
  return (
    <SafeAreaView className='px-1'>
      <View className='mt-8 flex-row justify-between'>
        <View className='flex-row'>
          <Image
            source={images.user}
            className='w-20 h-19 border-2 border-black'
            resizeMode='contain'
          />
          <View>
            <Text className='text-[#ADA4A5]'>Welcome To CryptaVita</Text>
            <Text className='font-semibold'>Castella Cinta</Text>
          </View>
        </View>

        <Image 
          source={icons.notification}
        />
      </View>
      <View>
        <SearchField />
      </View>

      <View>
        <RecentHazards />
      </View>
    </SafeAreaView>
  )
}

export default Home