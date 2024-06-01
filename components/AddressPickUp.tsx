import React from 'react';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAP_KEY } from '../constants/GoogleMapApiKey';
import FormField from './FormField';

type AddressPickupProps = {
    placeholderText: string;
    fetchAddress: (lat: number, lng: number, zipCode: string, cityText: string) => void;
};

const AddressPickup: React.FC<AddressPickupProps> = ({
    placeholderText,
    fetchAddress
}) => {

    const onPressAddress = (data: any, details: any) => {
        let resLength = details.address_components
        let zipCode = ''

        let filtersResCity = details.address_components.filter((val: any) => {
            if (val.types.includes('locality') || val.types.includes('sublocality')) {
                return val
            }
            if (val.types.includes('postal_code')) {
                let postalCode = val.long_name
                zipCode = postalCode
            }
            return false
        })

        let dataTextCityObj = filtersResCity.length > 0
            ? filtersResCity[0]
            : details.address_components[
            resLength > 1 ? resLength - 2 : resLength - 1
            ];

        let cityText =
            dataTextCityObj.long_name && dataTextCityObj.long_name.length > 17
                ? dataTextCityObj.short_name
                : dataTextCityObj.long_name;

        const lat = details.geometry.location.lat
        const lng = details.geometry.location.lng
        fetchAddress(lat, lng, zipCode, cityText)
    }

    return (
        <View className="flex-1">
            <FormField>
               <GooglePlacesAutocomplete
                    placeholder={placeholderText}
                    onPress={onPressAddress}
                    fetchDetails={true}
                    query={{
                        key: GOOGLE_MAP_KEY,
                        language: 'en'
                    }}
                    styles={{
                        textInputContainer: "bg-white",
                        textInput: "h-12 bg-gray-200 px-4"
                    }} 
                />
            </FormField>
        </View>
    );
};

export default AddressPickup;
