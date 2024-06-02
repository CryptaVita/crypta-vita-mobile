import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const Interest = () => {
  const data = [
    { id: '1', text: 'Floods' },
    { id: '2', text: 'Earthquakes' },
    { id: '3', text: 'Landslide' },
    { id: '4', text: 'Tornado' },
    { id: '5', text: 'Wildfire' },
  ];

  const [selectedItem, setSelectedItem] = useState('');

  // @ts-ignore
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => setSelectedItem(item.id)}
      className={`mt-2 p-2 rounded-2xl w-1/3 ${item.id === selectedItem ? 'bg-primary' : 'border-[1px] border-primary'}`}
      >
      <Text className={item.id === selectedItem ? 'text-white text-center' : 'text-black text-center'}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={3}
    />
  );
};

export default Interest;
