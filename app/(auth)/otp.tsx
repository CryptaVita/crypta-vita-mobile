import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import CustomButton from '@/components/CustomButton';
import { router } from 'expo-router';
import icons from '@/constants/icons';

const CELL_COUNT = 6;

const OtpVerification = () => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const [isModalVisible, setModalVisible] = useState(false);
    const handleCreateAccountPress = () => {
        setModalVisible(true);
    };

    const handleConfirm = () => {
        setModalVisible(false);
        router.push('/profile-account');
    };

    const handleCancel = () => {
        setModalVisible(false);
    };
    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView className='mx-2' contentContainerStyle={{ height: "100%" }}>
                <View className='flex-row justify-between mt-2'>
                    <Icon name="arrow-left" size={20} color="#000" onPress={() => router.back()} />
                    <Text className='text-white font-psemibold' onPress={() => router.push('/sign-in')}>Sign In</Text>
                </View>
                <Text className='font-bold text-3xl text-white mt-10'>
                    Verification code
                </Text>
                <Text className='text-white mt-2 mb-10'>
                    Enter the code sent to example@gmail.com to verify your account.
                </Text>

                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={{ justifyContent: 'center' }}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    className='flex-row'
                    renderCell={({ index, symbol, isFocused }) => (
                        <View
                            onLayout={getCellOnLayoutHandler(index)}
                            key={index}
                            className={`w-12 h-12 border-[4px] rounded-full  ${isFocused ? 'border-blue-200' : 'border-white'} justify-center items-center m-1 bg-white`}
                        >
                            <Text className='text-black text-2xl'>
                                {symbol}
                            </Text>
                        </View>
                    )}
                />

                <View className='flex-col justify-center items-center'>
                    <CustomButton
                        title='ACCEPT'
                        handlePress={handleCreateAccountPress}
                        containerStyles='bg-white text-center w-[90%] rounded-2xl mt-8 '
                        textStyles='text-primary'
                    />
                    <Text className='mt-8 text-center text-white text-xl font-bold'>RESEND CODE</Text>
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
                    <Text className='mt-4 text-lg font-bold'>Account Verified successfully!</Text>
                    <Text className='mt-2 text-center'>
                        Now you can login into your account!
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

export default OtpVerification;
