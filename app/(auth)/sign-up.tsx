import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';
import FormField from '@/components/FormField';
import { router } from 'expo-router';
import Modal from 'react-native-modal';
import icons from '@/constants/icons';
import { supabase } from '../utils/supabase';

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false)
  const [isModalVisible, setModalVisible] = useState(false);

  const handleCreateAccountPress = () => {
    setModalVisible(true);
  };
  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }

  const handleConfirm = async() => {
    await signUpWithEmail();
    setModalVisible(false);
    router.push('/otp');
  };

  const handleCancel = () => {
    setModalVisible(false);
  };


  return (
    <SafeAreaView className='mx-4 mt-4'>
      <ScrollView>
        <View className='flex-row justify-between'>
          <Icon name="arrow-left" size={20} color="#000" onPress={() => router.back()} />
          <Text className='text-primary font-psemibold' onPress={() => router.push('/sign-in')}>Sign In</Text>
        </View>

        <View>
          <Text className='text-4xl font-bold font-pregular mt-10'>Create Your Account</Text>
        </View>
        <View>
          <FormField
            title="Username"
            value={form.username}
            placeholder='Username'
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="Email"
            placeholder='Email'
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="Password"
            placeholder='Password'
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="Password"
            placeholder='Confirm Password'
            value={form.confirmPassword}
            handleChangeText={(e) => setForm({ ...form, confirmPassword: e })}
            otherStyles="mt-7"
          />

          <View className='justify-center items-center w-full'>
            <CustomButton
              title='CREATE ACCOUNT'
              handlePress={handleCreateAccountPress}
              containerStyles='bg-primary text-center w-full rounded-full mt-8'
              textStyles='text-white'
            />
          </View>
          <View className='my-5'>
            <Text className='text-center text-[#778293]'>or create with</Text>
          </View>
          <View className='flex flex-row space-x-4 justify-center mb-3'>
            <View className='border-2 border-[#E5E8EC] p-2 rounded-lg'>
              <Image
                source={icons.google}
                resizeMode='contain'
                className='w-12 h-7'
              />
            </View>
            <View className='border-2 border-[#E5E8EC] p-2  rounded-lg'>
              <Image
                source={icons.facebook}
                resizeMode='contain'
                className='w-12 h-7'
              />
            </View>
            <View className='border-2 border-[#E5E8EC] p-2 rounded-lg'>
              <Image
                source={icons.apple}
                resizeMode='contain'
                className='w-12 h-7'
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <Modal isVisible={isModalVisible} className='rounded-xl'>
        <View className='bg-white p-5 rounded justify-center items-center'>
          <Icon
            name="times"
            size={20}
            color="#000"
            onPress={handleCancel}
            style={{ alignSelf: 'flex-end' }}
          />
          <Image
            source={icons.verified}
            resizeMode='contain'
            className='w-32 border-2 border-black-100'
          />
          <Text className='mt-4 text-lg font-bold'>Confirm Account Information</Text>
          <Text className='mt-2 text-center'>
            Please verify that all the account details you have entered are correct.
            Once confirmed, your account will be created.
          </Text>
          <CustomButton
            title='ACCEPT'
            handlePress={handleConfirm}
            containerStyles='bg-primary text-center w-full rounded-full mt-8'
            textStyles='text-white'
          />
        </View>
      </Modal>

    </SafeAreaView>
  );
}

export default SignUp;
