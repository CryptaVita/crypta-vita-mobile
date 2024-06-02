import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '@/constants/images';
import { router } from 'expo-router';

const Notification = () => {
  const notifications = [
    { id: '1', text: 'Criptavita is announcing a serious landslide expected in your area Nyabihu please be careful!', status: 'unread' },
    { id: '2', text: 'Your post received a new comment.', status: 'read' },
    { id: '3', text: 'Update your profile information.', status: 'unread' },
    { id: '1', text: 'Criptavita is announcing a serious landslide expected in your area Nyabihu please be careful!', status: 'unread' },
    { id: '1', text: 'Criptavita is announcing a serious landslide expected in your area Nyabihu please be careful!', status: 'read' },
    { id: '3', text: 'Update your profile information.', status: 'unread' },
    { id: '1', text: 'Criptavita is announcing a serious landslide expected in your area Nyabihu please be careful!', status: 'unread' },
    { id: '1', text: 'Criptavita is announcing a serious landslide expected in your area Nyabihu please be careful!', status: 'read' },
  ];

  // @ts-ignore
  const renderItem = ({ item }) => (
    <TouchableOpacity className={`p-4 border-b border-[#D1D1D6] ${item.status === 'unread' ? 'bg-[#E5F2FF]' : 'bg-white'}`}>
      <View className='flex-row space-x-2'>
        <Image
          source={images.avatar}
          className='w-7 h-7'
          resizeMode='contain'
        />
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-row justify-around items-center w-full space-x-3 mt-4'>
        <Icon name="arrow-left" size={20} color="#000" onPress={() => router.back()} />
        <Text className='font-bold'>Notifications</Text>
        <Image
          source={images.dots_two}
          resizeMode='contain'
          className='w-4 h-4'
        />
      </View>

      <View className='flex-row space-x-10 justify-center items-center mt-2'>
        <Text className='text-primary'>All</Text>
        <Text>Unread</Text>
        <Text>Read</Text>
      </View>

      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        className='mt-4'
      />
    </SafeAreaView>
  );
};

export default Notification;
