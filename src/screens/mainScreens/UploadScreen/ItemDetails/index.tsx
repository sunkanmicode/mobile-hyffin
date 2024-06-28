import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from '@react-navigation/native';
import { useGetAllItems } from '../../../../api_services/homeServices/queries';


  const { width, height } = Dimensions.get("screen");

const ItemDetails = () => {
  const navigation = useNavigation()
  const { params: { item: data = {} } = {} as any } = useRoute();

  console.log(data, "*****");


 
 
  return (
    <View className="p-5 bg-white flex-1">
      <View className=" py-6 flex-row items-center">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className=" text-xl font-bold">Item Details </Text>
      </View>
      <View>
        <FlatList
          data={data?.photos}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          renderItem={({ item }) => (
            <View className="h-40" style={{ width }}>
              <Image
                source={{ uri: item }}
                resizeMode="contain"
                style={styles.imageStyles}
              />
            </View>
          )}
        />
        <View>
          <Text className=" text-xs">Brand</Text>
          <View className="w-full h-14 shadow shadow-black/40 bg-white rounded-full p-5 my-1">
            <Text className="font-bold">{data?.brand}</Text>
          </View>
          <Text className=" text-xs">Model</Text>
          <View className="w-full h-14 shadow shadow-black/40 bg-white rounded-full p-5 my-1">
            <Text className="font-bold">{data?.model}</Text>
          </View>
          <Text className=" text-xs">Color</Text>
          <View className="w-full h-14 shadow shadow-black/40 bg-white rounded-full p-5 my-1">
            <Text className="font-bold">{data?.color}</Text>
          </View>

          <Text className=" text-xs">Condition</Text>
          <View className="w-full h-14 shadow shadow-black/40 bg-white rounded-full p-5 my-1">
            <Text className="font-bold">{data?.condition}</Text>
          </View>

          <Text className=" text-xs">Gender</Text>
          <View className="w-full h-14 shadow shadow-black/40 bg-white rounded-full p-5 my-1">
            <Text className="font-bold">{data?.gender}</Text>
          </View>
          <Text>Gender: {data?.gender}</Text>

          <Text>Receipt: {data?.receipt}</Text>
          <Text>Size:{data?.size}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   width,
  //   height,
  //   alignItems: "center",
  // },
  imageStyles: {
    // flex: 0.4,
    height:"100%",
    width: "100%",
  },
  content: {
    flex: 0.4,
    alignItems: "center",
  },
});

export default ItemDetails