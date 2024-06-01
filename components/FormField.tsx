import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import icons from "@/constants/icons";
import { FormFieldProps } from "@/constants/types";
import { Picker } from '@react-native-picker/picker';

const FormField: React.FC<FormFieldProps> = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    dropdownOptions,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");

    const renderDropdownOptions = () => {
        return dropdownOptions ? dropdownOptions.map((option: string, index: number) => (
            <Picker.Item label={option} value={option} key={index}  />
        )) : null;
    };

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <View className="w-full h-16 px-4 bg-[#EFEFEF] rounded-2xl  focus:border-primary flex flex-row items-center">
                {title !== "Country" ? (
                    <TextInput
                        className="flex-1"
                        value={value}
                        placeholder={placeholder}
                        placeholderTextColor="#7B7B8B"
                        onChangeText={handleChangeText}
                        secureTextEntry={title === "Password" && !showPassword}
                        {...props}
                    />
                ) : (
                    <Picker
                        selectedValue={selectedOption}
                        style={{ flex: 1, color: 'white' }}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedOption(itemValue)
                        }>
                        {renderDropdownOptions()}
                    </Picker>
                )}

                {title === "Password" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            source={!showPassword ? icons.eye : icons.eyeHide}
                            className="w-6 h-6"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormField;
