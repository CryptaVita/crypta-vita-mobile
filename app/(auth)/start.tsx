import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';

const Start = () => (
    <SafeAreaView className="bg-primary h-full flex-col items-center">
        <View>
            <Image
                source={icons.logo}
                resizeMode='contain'
                className='w-36 mt-24'
            />
            <Text className="text-white text-center font-bold text-3xl">
                CryptaVita!
            </Text>
        </View>

        <View>
            <Text className='text-center text-white  mt-28 mx-4 font-pmedium'>By tapping ‘Sign in’ you agree to our Terms.
                Learn how we process your data in our Privacy Policy and Cookies Policy.</Text>
        </View>

        <View className='w-full justify-center items-center mt-10'>
            <CustomButton 
              title='CREATE ACCOUNT'
              handlePress={() => router.push('/sign-up')}
              containerStyles='bg-white text-center w-[85%] rounded-full'
              textStyles='text-primary'
            />
            <CustomButton 
              title='SIGN IN'
              handlePress={() => router.push('/sign-in')}
              containerStyles='border-2 border-white text-center w-[85%] rounded-full mt-5'
              textStyles='text-white'
            />
        </View>
    </SafeAreaView>
);

export default Start;
