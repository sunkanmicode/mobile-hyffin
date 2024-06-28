import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import { Ionicons, EvilIcons, AntDesign } from "@expo/vector-icons";
import CustomSelectInput from "../../../../custom_comp/CustomSelectInput";
import { CustomSelectDropDown } from "../../../../custom_comp/CustomSelectDropDown";
import CustomRadio from "../../../../custom_comp/CustomRadio";
import CustomImagePicker from "../../../../custom_comp/CustomImagePicker";
import CustomInput from "../../../../custom_comp/CustomInput";
import { CustomButton } from "../../../../custom_comp/CustomButton";
import {
  colorData,
  conditionData,
  data,
  genderData,
  modelData,
  receiptData,
  sizeData,
} from "./selectedData";
import * as DocumentPicker from "expo-document-picker";
import useDocumentPicker from "../../../../hooks/useDocumentPicker";
import { useImageUpload } from "../../../../hooks/useImageUpload";
import { useCreateItemMutation } from "../../../../api_services/homeServices/mutations";
import { useQueryClient } from "@tanstack/react-query";

const AddItem = ({ closeSheet }: any) => {
  const [openDropDown, setOpenDropDown] = React.useState(false);
  const [modelDropDown, setModelDropDown] = React.useState(false);
  const [colorDropDown, setColorDropDown] = React.useState(false);

  const [selected, setSelected] = React.useState<any>(null);
  const [model, setModel] = React.useState<any>(null);
  const [color, setColor] = React.useState<any>(null);

  const [size, setSize] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [condition, setCondition] = React.useState("");
  const [receipt, setReceipt] = React.useState("");

  const [textValue, setTextValue] = React.useState("");

  // const [uploadData, setUploadData] = React.useState([]);
  // Initialize an array with 4 null values
  const [uploadData, setUploadData] = React.useState(Array(4).fill(null));
  const [currentIndex, setCurrentIndex] = React.useState<number | any>();

 

  

  //UPLOADING
  const {
    uploadImage: uploadItemImage,
    imageData: itemImgData,
    isImageUploadPending: ImgIsPending,
    isImageUploadError: ImgIsError,
    resetImageData,
  } = useImageUpload();

  // console.log(itemImgData?.data?.secure_url, "uploading");

  const handleImagePick = async (index: number) => {
    setCurrentIndex(index);
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: ["image/*"],
        // Other options
      });

      if (!result.canceled) {
        console.log(result.assets[0].uri);
        uploadItemImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking image:", error);
    }
  };

  useEffect(() => {
    if (itemImgData) {
      const updatedArray = [...uploadData];
      updatedArray[currentIndex] = itemImgData?.data?.secure_url;
      setUploadData(updatedArray);
    }
  }, []);

  console.log(uploadData, "0000");
  console.log(itemImgData, "itemImgDataKK");
  console.log(ImgIsPending, "ImgIsPendingKK");
  console.log(ImgIsError, "ImgIsError");

  //!end..

  const handleItemPress = (item: any) => {
    setSelected(item);
    setOpenDropDown(false);
  };

  const handleModelPress = (item: any) => {
    setModel(item);
    setModelDropDown(false);
  };

  const handleColorPress = (item: any) => {
    setColor(item);
    setColorDropDown(false);
  };

  const handleOnSubmit = () => {
    AddItemMutation.mutate({
      brand: selected?.value,
      model: model?.value,
      color: color?.value,
      size: size,
      gender: gender,
      condition: condition,
      receipt: receipt,
      description: textValue,
      photos: uploadData,
    });
  };

  const AddItemMutation = useCreateItemMutation(closeSheet);

  return (
    <View className="p-5 bg-white flex-1">
      <View className=" py-6 flex-row items-center justify-between">
        <View />
        <Text className=" text-xl font-bold">Add New Item </Text>
        <TouchableOpacity
          onPress={() => {
            closeSheet();
          }}
        >
          <Ionicons name="close-sharp" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <ScrollView className="h-auto">
          <View>
            <View>
              <CustomSelectInput
                label="Brand *"
                itemSelected={"select brand"}
                selected={selected?.name}
                setOpenDropDown={setOpenDropDown}
                openDropDown={openDropDown}
              />
              {openDropDown && (
                <ScrollView className="border border-[#E8E8E8] p-3  rounded-lg h-48 ">
                  <>
                    {data?.map((item, index) => (
                      <CustomSelectDropDown
                        key={index}
                        value={item?.name}
                        // image={item?.airtimeProvider?.icon}
                        onPress={() => handleItemPress(item)}
                      />
                    ))}
                  </>
                </ScrollView>
              )}
            </View>

            <View>
              <CustomSelectInput
                label="Model *"
                itemSelected={"select brand"}
                selected={model?.name}
                setOpenDropDown={setModelDropDown}
                openDropDown={modelDropDown}
              />
              {modelDropDown && (
                <ScrollView className="border border-[#E8E8E8] p-3  rounded-lg h-48 ">
                  <>
                    {modelData?.map((item, index) => (
                      <CustomSelectDropDown
                        key={index}
                        value={item?.name}
                        // image={item?.airtimeProvider?.icon}
                        onPress={() => handleModelPress(item)}
                      />
                    ))}
                  </>
                </ScrollView>
              )}
            </View>
            <Text className="text-xs">
              *If you can't find reference of your bag{" "}
              <Text className="text-xs text-blue-500">click here</Text>
            </Text>
          </View>

          <View>
            <CustomSelectInput
              label="Color *"
              itemSelected={"select color"}
              selected={color?.name}
              setOpenDropDown={setColorDropDown}
              openDropDown={colorDropDown}
            />
            {colorDropDown && (
              <ScrollView className="border border-[#E8E8E8] p-3  rounded-lg h-48 ">
                <>
                  {colorData?.map((item, index) => (
                    <CustomSelectDropDown
                      key={index}
                      value={item?.name}
                      // image={item?.airtimeProvider?.icon}
                      onPress={() => handleColorPress(item)}
                    />
                  ))}
                </>
              </ScrollView>
            )}
          </View>

          <View className=" flex-row flex-1 ">
            <View className=" flex-1">
              <Text className="text-sm text-[#23232399] my-2">Size</Text>
              <CustomRadio
                options={sizeData}
                checkedValue={size}
                onChange={setSize}
                style={{ marginBottom: 15 }}
              />
            </View>

            <View className=" flex-1">
              <Text className="text-sm text-[#23232399] my-2">Gender</Text>
              <CustomRadio
                options={genderData}
                checkedValue={gender}
                onChange={setGender}
                style={{ marginBottom: 15 }}
              />
            </View>
          </View>

          <View className=" flex-row flex-1 ">
            <View className=" flex-1">
              <Text className="text-sm text-[#23232399] my-2">Condition</Text>
              <CustomRadio
                options={conditionData}
                checkedValue={condition}
                onChange={setCondition}
                style={{ marginBottom: 15 }}
              />
            </View>

            <View className=" flex-1">
              <Text className="text-sm text-[#23232399] my-2">
                Purchased Receipt
              </Text>
              <CustomRadio
                options={receiptData}
                checkedValue={receipt}
                onChange={setReceipt}
                style={{ marginBottom: 15 }}
              />
            </View>
          </View>

          <View className=" flex-1 ">
            <Text className="text-sm text-[#23232399]">Add Photo</Text>
            <View className=" flex-1 flex-row justify-between">
              {uploadData?.map((item, index) => (
                <View className="flex-1" key={index}>
                  
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleImagePick(index)}
                  >
                    {item ? (
                      <View className="h-24 rounded-md border border-[#D3D3D3] m-1 items-center justify-center">
                        {ImgIsPending ? (
                          // currentIndex == index &&
                          <ActivityIndicator />
                        ) : (
                          <Image
                            source={{ uri: item }}
                            style={{ width: "100%", height: "100%" }}
                          />
                        )}
                      </View>
                    ) : (
                      <View className="h-24 rounded-md border border-[#D3D3D3] m-1 items-center justify-center">
                        <AntDesign name="plus" size={24} color="#23232399" />
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>

          <View className=" ">
            <Text className="text-sm text-[#23232399] my-2">Descriptions</Text>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 5,
                padding: 10,
                textAlignVertical: "top", // Align text to the top for Android
                minHeight: 100, // Minimum height for the textarea
              }}
              multiline={true}
              numberOfLines={4} // You can set the default number of lines
              placeholder="Type here..."
              onChangeText={(text) => setTextValue(text)}
            />

            {/* <View className=" border border-[#222]">
              <CustomInput label="Description" />
            </View> */}
            <View className="my-5">
              <CustomButton
                primary
                title={AddItemMutation.isPending ? "Loading..." : "Save"}
                onPress={handleOnSubmit}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddItem;
