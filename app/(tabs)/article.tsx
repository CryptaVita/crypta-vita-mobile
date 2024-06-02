import { View, Text, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import SettingItem from '@/components/Setting'

const Article = () => {
  return (
    <SafeAreaView className='relative'>
      <ScrollView>
        <ImageBackground
          source={images.profile_bg}
          className='h-[30vh]'
        >
          <View>
            <View className='flex-row justify-between mx-2 items-center mt-2'>
              <Image
                source={images.notifications}
              />
              <View className='flex-row justify-center items-center space-x-2'>
                <Image
                  source={images.clock}
                />
                <Image
                  source={images.dots_two}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
        <View className='relative'>
          <Image
            source={images.avatar}
            className='mx-auto -mt-14'
          />
          <Image
            source={images.edit_profile}
            className='absolute right-24 top-4'
          />
          <Text className='text-center font-bold my-2'>Puerto Rico</Text>
          <Text className='text-center'>youremail@domain.com | +01 234 567 89</Text>

          <View className='mt-2'>
            <SettingItem
              imageSource={images.account_blue}
              text='My Account'
            />
            <SettingItem
              imageSource={images.locations}
              text='Location'
            />
            <SettingItem
              imageSource={images.privacy}
              text='Privacy Policy'
            />
            <SettingItem
              imageSource={images.notification}
              text='Notifications'
            />
            <SettingItem
              imageSource={images.help}
              text='Help Center'
            />

          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Article