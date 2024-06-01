import { View, Text, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import Logo from '@/components/logo'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'

const Welcome = () => {
    return (
        <SafeAreaView>
            <ScrollView
                contentContainerStyle={{
                    height: "100%"
                }}
            >
                <ImageBackground
                    source={images.landin_bg}
                    resizeMode='cover'
                    className='h-full w-full'
                >
                    <View className='flex-1 justify-between'>
                        <View className='mt-2'>
                            <Logo />
                        </View>
                        <View className="mb-4 items-center mx-4">
                            <Text className="text-xl  text-white  font-bold">Welcome to CrytaVita!</Text>
                            <Text className='text-sm  text-center font-pregular text-white mt-4'>Empowering Communities for a Resilient Tomorrow & Harvesting Hope through Technological Guardianship of Nature</Text>
                            <CustomButton 
                              title='Let’s Start'
                              containerStyles="bg-primary rounded-xl mt-2 w-[40%]"
                              textStyles='text-white'
                              handlePress={() => router.push('/on-boarding')}
                            />
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Welcome