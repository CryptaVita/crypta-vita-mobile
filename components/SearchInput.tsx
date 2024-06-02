import React from 'react';
import { View, Image, TextInput } from 'react-native';
import images from '@/constants/images';

const SearchInput = () => {
  return (
    <View>
      <View className="flex-row items-center bg-white px-4 py-2 rounded-full mx-4">
        <Image
          source={images.search}
          resizeMode="contain"
          className="w-5 h-5 mr-2"
        />
        <TextInput
          placeholder="Where are you going to?"
          style={{ flex: 1, fontSize: 16 }}
        />
        <Image
          source={images.voice}
          resizeMode="contain"
          className="w-5 h-5 mr-2"
        />
      </View>
    </View>
  );
}

export default SearchInput;
