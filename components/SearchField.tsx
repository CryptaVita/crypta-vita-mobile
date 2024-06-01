import icons from '@/constants/icons';
import images from '@/constants/images';
import React from 'react';
import { View, Text, TextInput  , Image} from 'react-native';

const SearchField = () => {
    return (
        <View className="m-4">
            <View className='bg-[#E5E5E5] flex-row justify-center items-center h-16   rounded-3xl'>
                <Image 
                  source={images.search}
                  className='w-6 h-6'
                  resizeMode='contain'
                />
                <TextInput
                    className=" rounded-md py-2 px-4 text-lg"
                    placeholder="Enter your search query"
                    placeholderTextColor="#B2BAC6"
                />
                  <Image 
                  source={icons.filter}
                  className='w-6 h-6'
                  resizeMode='contain'
                />
            </View>
        </View>
    );
};

export default SearchField;
