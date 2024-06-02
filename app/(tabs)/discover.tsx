import { View, Text, ScrollView, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome';
import images from '@/constants/images'
import icons from '@/constants/icons'
import { router } from 'expo-router';

const Trendings = () => {
  const data = [
    { id: '1', text: 'Floods' },
    { id: '2', text: 'Earthquakes' },
    { id: '3', text: 'Landslide' },
    { id: '4', text: 'Tornado' },
    { id: '5', text: 'Wildfire' },
  ];

  const [selectedItem, setSelectedItem] = useState('');

  // @ts-ignore
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectedItem(item.id)}
      className={`mt-2 p-2 rounded-2xl w-1/3 ${item.id === selectedItem ? 'bg-primary' : 'border-[1px] border-primary'}`}
    >
      <Text className={item.id === selectedItem ? 'text-white text-center' : 'text-black text-center'}>{item.text}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView>
      <ScrollView>
        <View className='flex-row justify-around w-full space-x-3 mt-4'>
          <Icon name="arrow-left" size={20} color="#000" onPress={() => router.back()} />
          <Text>Trendings</Text>
          <Image
            source={icons.filter}
            resizeMode='contain'
            className='w-8 h-8'
          />
        </View>
        <View>
          <Text className='text-center text-4xl font-semibold mt-2'>Get a safe way destination with <Text className='text-primary'>CryptaVita!</Text></Text>
        </View>
        <View className='mx-2'>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={3}
          />
        </View>
        <ImageBackground
          source={images.location_1}
          className='w-[95%] mx-auto mt-10 h-[40vh] relative'
        >
          <View className='bg-white/40 w-28 m-4 p-2 rounded-full'>
            <Text className='text-white text-center'>Kigali-Remera</Text>
          </View>

          <View className='p-4'>
            <Text className='text-4xl font-bold text-white mt-10'>Nyabihu- Mukamira Road was distructed </Text>
          </View>


          <ImageBackground
            source={images.trends_bg}
            className='absolute right-0 top-0 h-[30vh] w-[20vw] m-4 justify-center items-center space-y-4'
          >
            <Image
              source={images.like}
            />
            <Image
              source={icons.message}
            />
            <Image
              source={images.dots}
            />
          </ImageBackground>

        </ImageBackground>
        <ImageBackground
          source={images.location_1}
          className='w-[95%] mx-auto mt-10 h-[40vh] relative'
        >
          <View className='bg-white/40 w-28 m-4 p-2 rounded-full'>
            <Text className='text-white text-center'>Kigali-Remera</Text>
          </View>

          <View className='p-4'>
            <Text className='text-4xl font-bold text-white mt-10'>Nyabihu- Mukamira Road was distructed </Text>
          </View>


          <ImageBackground
            source={images.trends_bg}
            className='absolute right-0 top-0 h-[30vh] w-[20vw] m-4 justify-center items-center space-y-4'
          >
            <Image
              source={images.like}
            />
            <Image
              source={icons.message}
            />
            <Image
              source={images.dots}
            />
          </ImageBackground>

        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Trendings