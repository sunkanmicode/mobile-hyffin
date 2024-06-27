import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useGetAllItems } from '../../../../api_services/homeServices/queries';

const ItemDetails = () => {
  const navigation = useNavigation()
 
  return (
    <View className="p-5 bg-white flex-1">
      <View className=" py-6 flex-row items-center">
        <TouchableOpacity onPress={()=>{
          navigation.goBack()
        }}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className=" text-xl font-bold">Item Details </Text>
      </View>
    </View>
  );
}

export default ItemDetails