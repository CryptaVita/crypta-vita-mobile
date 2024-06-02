import { ScrollView, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { router } from "expo-router";
import Modal from "react-native-modal";
import icons from "@/constants/icons";
import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { makeRedirectUri } from "expo-auth-session";
import * as QueryParams from "expo-auth-session/build/QueryParams";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { supabase } from "../utils/supabase";

WebBrowser.maybeCompleteAuthSession();
const redirectTo = makeRedirectUri();
console.log(redirectTo);

const createSessionFromUrl = async (url: string) => {
  const { params, errorCode } = QueryParams.getQueryParams(url);

  if (errorCode) throw new Error(errorCode);
  const { access_token, refresh_token } = params;

  if (!access_token) return;

  const { data, error } = await supabase.auth.setSession({
    access_token,
    refresh_token,
  });
  if (error) throw error;
  console.log("session: ", data.session)
  return data.session;
};

const performOAuth = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo,
      skipBrowserRedirect: true,
    },
  });
  if (error) throw error;

  const res = await WebBrowser.openAuthSessionAsync(
    data?.url ?? "",
    redirectTo
  );

  if (res.type === "success") {
    const { url } = res;
    await createSessionFromUrl(url);
  }
};

const sendMagicLink = async (email: string) => {
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: redirectTo,
    },
  });

  if (error) throw error;

  console.log("Magic link sent to", email);
};

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const url = Linking.useURL();
  if (url) createSessionFromUrl(url);

  const [isModalVisible, setModalVisible] = useState(false);

  const handleCreateAccountPress = () => {
    sendMagicLink(form.email);
    setModalVisible(true);
  };

  const handleConfirm = () => {
    setModalVisible(false);
    sendMagicLink(form.email);
    router.push("/otp");
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView className='mx-4 mt-4'>
      <ScrollView>
        <View className='flex-row justify-between'>
          <Icon
            name='arrow-left'
            size={20}
            color='#000'
            onPress={() => router.back()}
          />
          <Text
            className='text-primary font-psemibold'
            onPress={() => router.push("/sign-up")}
          >
            Sign Up
          </Text>
        </View>

        <View>
          <Text className='text-4xl font-bold font-pregular mt-10'>
            Sign In
          </Text>
        </View>
        <View>
          <FormField
            title='Email'
            placeholder='Email'
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles='mt-7'
          />
          <FormField
            title='Password'
            placeholder='Password'
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles='mt-7'
          />

          <View className='justify-center items-center w-full'>
            <CustomButton
              title='SIGN IN'
              handlePress={handleCreateAccountPress}
              containerStyles='bg-primary text-center w-full rounded-full mt-8'
              textStyles='text-white'
            />
          </View>
          <View className='my-5'>
            <Text className='text-center text-[#778293]'>
              or sign in with
            </Text>
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
            <TouchableOpacity className='border-2 border-[#E5E8EC] p-2 rounded-lg' onPress={performOAuth}>
              <Image
                source={icons.apple}
                resizeMode='contain'
                className='w-12 h-7'
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Modal
        isVisible={isModalVisible}
        className='rounded-xl'
      >
        <View className='bg-white p-5 rounded justify-center items-center'>
          <Icon
            name='times'
            size={20}
            color='#000'
            onPress={handleCancel}
            style={{ alignSelf: "flex-end" }}
          />
          <Image
            source={icons.verified}
            resizeMode='contain'
            className='w-32 border-2 border-black-100'
          />
          <Text className='mt-4 text-lg font-bold'>
            Confirm Account Information
          </Text>
          <Text className='mt-2 text-center'>
            Please verify that all the account details you have entered
            are correct. Once confirmed, you will be logged into your
            account.
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
};

export default SignIn;


