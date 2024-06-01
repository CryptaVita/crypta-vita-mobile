import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome';
import { router } from 'expo-router';
import ServiceCard from '@/components/ServiceCard';
import icons from '@/constants/icons';

const Services = () => {
    return (
        <SafeAreaView>
            <ScrollView className='mx-4'>
                <View className='flex-row justify-between'>
                    <Icon name="arrow-left" size={20} color="#000" onPress={() => router.back()} />
                    <Text className='text-primary font-psemibold' onPress={() => router.push('/home')}>Skip</Text>
                </View>
                <View>
                    <Text className='text-2xl font-bold  mt-10'>Choose services you need</Text>
                    <Text className='text-[#64748B] mt-4'>CrytaVita Provide numerous services choose the one you want to be served.</Text>
                </View>

                <View>
                    <ServiceCard
                       iconUrl={icons.guardian_soil}
                       title='Guardian Soil Insights'
                       subtitle='Real-time reports on soil softness.'
                    />
                </View>
            </ScrollView>
            
        </SafeAreaView>
    )
}

export default Services