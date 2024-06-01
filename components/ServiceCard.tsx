import { View, Text, Image } from 'react-native'
import React from 'react'
import { CheckBox } from 'react-native-elements'

interface ServiceCardProps {
    iconUrl: string;
    title: string;
    subtitle: string;
    checked?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ iconUrl, title, subtitle, checked = false }) => {
    const [isChecked, setIsChecked] = React.useState(checked);

    const handleCheckboxPress = () => {
        setIsChecked(!isChecked);
    };

    return (
        <View className='flex-row' style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
           
                <Image
                    source={{ uri: iconUrl }}
                    resizeMode='contain'
                    className='w-10 h-10 border-2 border-black-100'
                />
            
            <View>
                <Text className='font-bold text-xl'>{title}</Text>
                <Text className='font-psemibold text-sm text-gray-400'>{subtitle}</Text>
            </View>
            <CheckBox
                checked={isChecked}
                onPress={handleCheckboxPress}
            />
        </View>
    )
}

export default ServiceCard
