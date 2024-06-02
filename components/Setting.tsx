import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import images from '@/constants/images';

type Props = {
  imageSource: ImageSourcePropType;
  text: string;
};

const SettingItem: React.FC<Props> = ({ imageSource, text }) => {
  return (
    <View className="flex-row justify-between items-center py-5 px-4 ">
      <View className="flex-row items-center space-x-2">
        <Image
          source={imageSource}
          className="w-6 h-6"
          resizeMode="contain"
        />
        <Text>{text}</Text>
      </View>
      <Image
        source={images.chevron_right}
        className="w-6 h-6"
        resizeMode="contain"
      />
    </View>
  );
};

export default SettingItem;
