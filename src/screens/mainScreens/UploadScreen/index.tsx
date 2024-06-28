import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomBottomSheet from "../../../custom_comp/BottomSheet";
import AddItem from "./AddItem";
import { useGetAllItems } from "../../../api_services/homeServices/queries";

const UploadScreen = () => {
  const navigation = useNavigation();
  const allItemsMutation = useGetAllItems();

  console.log(allItemsMutation?.data?.getAllItems, "allItemsMutation");

  const [isAdded, setIsAdded] = useState(false);
  const SheetRef = React.useRef<null | any>(null);

  const height = 750;

  const closeSheet = () => {
    if (SheetRef.current) {
      SheetRef.current.close();
    }
  };
  const openSheet = () => {
    if (SheetRef.current) {
      SheetRef.current.open();
    }
  };
  return (
    <>
      <View className="p-5 bg-white flex-1">
        <View className=" py-6">
          <Text className=" text-xl font-bold">Add item </Text>
        </View>
        {allItemsMutation?.data?.getAllItems?.length == 0 ? (
          <View className=" flex-1 items-center justify-center">
            <Text>No Item here yet....</Text>
          </View>
        ) : (
          <View className="mb-24">
            <FlatList
              numColumns={2}
              // contentContainerStyle={{ flex: 1, gap: 20 }}
              data={allItemsMutation?.data?.getAllItems}
              renderItem={({ item }) => (
                <View className=" flex-1 p-2">
                  <TouchableOpacity
                    className="flex-1 h-40 w-40  bg-slate-100 rounded-t-lg"
                    onPress={() => {
                      navigation.navigate("ItemDetails", {item});
                    }}
                  >
                    <View className=" w-full  h-1/2">
                      <Image
                        source={{ uri: item?.photos[0] }}
                        className="w-full h-full rounded-t-lg"
                      />
                    </View>
                    <View className=" bg-slate-100  max-h-20 ">
                      <Text className=" font-semibold text-[10px] p-2">
                        {item?.description}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />

             {/* <View className=" flex-1 flex-row gap-4 w-40">
              {allItemsMutation?.data?.getAllItems.map((item: any) => (
                <TouchableOpacity
                  className="flex-1 h-40 bg-slate-100 rounded-t-lg"
                  onPress={() => {
                    navigation.navigate("ItemDetails");
                  }}
                >
                  <View className=" w-full  h-1/2">
                    <Image
                      source={{ uri: item?.photos[0] }}
                      className="w-full h-full rounded-t-lg"
                    />
                  </View>
                  <View className=" bg-slate-100  max-h-20 ">
                    <Text className=" font-semibold text-[10px] p-2">
                      {item?.description}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>  */}



            

            
          </View>
        )}

        <TouchableOpacity
          className=" absolute bottom-5 right-5 bg-teal-700 w-20 h-20 rounded-full items-center justify-center"
          onPress={() => {
            openSheet();
          }}
        >
          <AntDesign name="plus" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <CustomBottomSheet
        closeOnDragDown={true}
        height={height}
        ref={SheetRef}
        message={<AddItem closeSheet={closeSheet} />}
      />
    </>
  );
};

export default UploadScreen;
