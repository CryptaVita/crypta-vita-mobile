import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import SearchField from '@/components/SearchField'
import { ScrollView } from 'react-native'
import Trending from '@/components/Trending'
import Statistics from '@/components/Statistics'
import Interest from '@/components/Interest'
import SafeWay from '@/components/SafeWay'
import Places from '@/components/Places'
import ManagementTeam from '@/components/ManagementTeam'
import { router } from 'expo-router'



const Home = () => {
  const posts = [
    {
      id: '1',
      thumbnail: images.earthquakes
    },
    {
      id: '2',
      thumbnail: images.landslide
    },
    {
      id: '3',
      thumbnail: images.floods
    },
  ]

  const placePost = [
    {
      id: '1',
      thumbnail: images.lake
    },
    {
      id: '2',
      thumbnail: images.sea
    },
    {
      id: '3',
      thumbnail: images.beach
    },
  ]
  return (
    <SafeAreaView className='px-1'>
      <ScrollView>
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

          <TouchableOpacity
            onPress={() => router.push('notification')}
          >
            <Image
              source={icons.notification}
            />
          </TouchableOpacity>
        </View>
        <View>
          <SearchField />
        </View>

        <View>
          <Trending posts={posts} />
        </View>

        <Statistics />
        <View>
          <View className='flex-row justify-between mx-2'>
            <Text className='font-bold'>Interest</Text>
            <Text className='text-primary'>View All</Text>
          </View>
          <Interest />
        </View>
        <SafeWay />
        <Places posts={placePost} />
        <ManagementTeam />
        <ManagementTeam />
        <ManagementTeam />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home