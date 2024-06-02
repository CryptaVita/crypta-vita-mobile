import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router';
import { Image } from 'react-native';
import images from '@/constants/images';
import CustomButton from '@/components/CustomButton';

const Notification = () => {
    return (
        <SafeAreaView>
            <ScrollView className='mx-4'>
                <View className='flex-row justify-between'>
                    <Icon name="arrow-left" size={20} color="#000" onPress={() => router.back()} />
                    <Text className='text-primary font-psemibold' onPress={() => router.push('/home')}>Skip</Text>
                </View>
                <View className='justify-center items-center'>
                    <Text className='text-center font-bold text-3xl mt-10'>Send me notifications</Text>
                    <Text className='text-center text-sm text-[#64748B] mt-4'>
                        Turn on your notification so as to stay notified every time there is new updates!
                    </Text>

                    <Image
                        source={images.notifications}
                        resizeMode='contain'
                        className='mt-8'
                    />
                </View>

                <View className='flex-col justify-center items-center'>
                    <CustomButton
                        title='Continue'
                        handlePress={() => router.push('/services')}
                        containerStyles='bg-[#6F9DF5] text-center w-[90%] rounded-2xl mt-16 '
                        textStyles='text-white'
                    />
                    <Text className='mt-8 text-center text-primary text-xl font-bold'>Remind me Later</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Notification