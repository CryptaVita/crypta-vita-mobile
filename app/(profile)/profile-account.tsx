import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import axios, { AxiosResponse } from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import icons from '@/constants/icons';
import * as ImagePicker from 'expo-image-picker';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';


interface Country {
  name: {
    common: string;
  };
}

const Profile = () => {
  const [form, setForm] = useState({
    fullName: '',
    dob: '',
    profilePhoto: '',
    phoneNumber: '',
    country: '',
    gender: '',
    countries: [] as string[]
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response: AxiosResponse<Country[]> = await axios.get('https://restcountries.com/v3.1/all');
        const countryNames = response.data.map(country => country.name.common);
        setForm(prevState => ({
          ...prevState,
          countries: countryNames
        }));
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);



  const handleSkip = () => {
    router.push('/home')
  }
  const openPicker = async (selectType: string) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      if (selectType === 'image') {
        const uri = result.assets[0].uri;
        setForm({ ...form, profilePhoto: uri });
      }
    }
  }

  return (
    <SafeAreaView>
      <ScrollView className='mx-3'>
        <View className='flex-row justify-between mt-4'>
          <Icon name="arrow-left" size={20} color="#000" onPress={() => router.back()} />
          <Text className='text-primary font-psemibold' onPress={handleSkip}>Skip</Text>
        </View>

        <View className='mt-4'>
          <Text className='text-2xl font-bold'>Create Your Profile</Text>
          <Text className='text-[#64748B] mt-2 text-md'>Provide your profile picture and display your name to make easy contact.</Text>
        </View>

        <View className='justify-center items-center mt-8'>
          {form.profilePhoto ?
            (
              <View className='relative'>
                <TouchableOpacity onPress={() => openPicker('image')}>
                  <Image source={{ uri: form.profilePhoto }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openPicker('image')}>
                  <Image
                    source={icons.edit}
                    resizeMode='contain'
                    className='absolute bottom-0 left-16 w-6 h-6'
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <View className='relative rounded-full border-2 border-[#B9D1E9] p-4'>
                <TouchableOpacity onPress={() => openPicker('image')}>
                  <Image
                    source={icons.plus}
                    resizeMode='contain'
                    className='absolute left-20 w-6 h-6'
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => openPicker('image')}>
                  <Image
                    source={icons.camera}
                    resizeMode='contain'
                    className='w-20 h-20'
                  />
                </TouchableOpacity>
              </View>
            )
          }
        </View>
        <View className='mt-10'>
          <FormField
            title="Full Names"
            placeholder='Full Names'
            value={form.fullName}
            handleChangeText={(e) => setForm({ ...form, fullName: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="Date Of Birth"
            placeholder='Date Of Birth'
            value={form.dob}
            handleChangeText={(e) => setForm({ ...form, dob: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="Country"
            placeholder='Country'
            value={form.country}
            handleChangeText={(e) => setForm({ ...form, country: e })}
            otherStyles="mt-7"
            dropdownOptions={form.countries}
          />
          <FormField
            title="Phone Number"
            placeholder='Phone Number'
            value={form.phoneNumber}
            handleChangeText={(e) => setForm({ ...form, phoneNumber: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="Gender"
            placeholder='Gender'
            value={form.gender}
            handleChangeText={(e) => setForm({ ...form, gender: e })}
            otherStyles="mt-7"
          />
        </View>

        <CustomButton
          title='Continue'
          handlePress={() => router.push('/notification')}
          containerStyles='bg-primary text-center w-full rounded-2xl my-8'
          textStyles='text-white'
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
