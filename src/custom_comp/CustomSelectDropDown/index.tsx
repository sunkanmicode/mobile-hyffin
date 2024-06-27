// Import React and native components
import React from "react";
import { TouchableOpacity, Text, View, Image, ScrollView } from "react-native";

// Define and export the custom component
export const CustomSelectDropDown = (props:any) => {
  // Destructure the props
  const { value, image, price, onPress } = props;

  // console.log(value, "value")

  // Return some JSX
  return (
    <>
      <TouchableOpacity
        className="flex-row items-center justify-between my-1"
        onPress={onPress}
      >
        <View>
          <Text className="font-normal text-xs  font-[Inter]">{value}</Text>
          <Text className="font-normal text-xs  font-[Inter]">
            {price && `N${price}`}
          </Text>
        </View>

        <View className="h-[40px] w-[40px]  rounded-full">
          <Image
            source={{ uri: image }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </TouchableOpacity>
      {/* <View className="h-0.5 bg-[#E8E8E8] my-2" /> */}
    </>
  );
};
