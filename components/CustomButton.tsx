import { Text, TouchableOpacity, } from 'react-native';
import React from 'react';

interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
    className={`min-h-[62px] justify-center items-center ${containerStyles}  ${isLoading ? 'opacity-50' : ''}`}
     onPress={handlePress}
     activeOpacity={0.7}
    >
      <Text className={`font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
