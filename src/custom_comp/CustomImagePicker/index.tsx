// ImagePicker.js
import React, { useState } from "react";
import {
  View,
  Button,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
// import * as ImagePicker from "expo-image-picker";
// import { truncate } from "../../utilis/truncate";

type Prop = {
  imageName?: string | null;
  setImageName?: (imageName: string) => void;
  style?: ViewStyle;
  width?: number;
  style2?: ViewStyle;
  icon?: JSX.Element;
  message?: string;
  uploadImage?: (image: string) => void;
  index?: number;
  isLoadingItem?: boolean;
  isErrorItem?: boolean;
  pickDocument?: () => void;
  removeImage?: () => void;
  removeImageData?: () => void;
  documentUri?: string;
  label?: string;
  itemUriName?: string;
};

const CustomImagePicker = ({
  imageName,
  setImageName,
  style,
  width,
  uploadImage,
  index,
  style2,
  icon,
  message,
  isLoadingItem,
  isErrorItem,
  pickDocument,
  removeImage,
  removeImageData,
  documentUri,
  label,
  itemUriName,
}: Prop) => {
 
const [currentIndex, setCurrentIndex] = React.useState<number | null>(null);

  const onDocumentUpload = () => {
    // setCurrentIndex(index); 
    // console.log(index, 'ck')
    pickDocument?.();
    // uploadImage?.(documentUri);
  };

  const handleRemoveImage = () => {
    removeImage?.(); // This will set documentUri and documentName to null
    removeImageData?.();
    // This will reset the itemImgData to undefined
  };

  // console.log(documentUri, "documentUri");

  React.useEffect(() => {
    if (documentUri) {
      uploadImage?.(documentUri); // Call uploadImage with the updated document's URI
    }
  }, [documentUri, uploadImage]);

  
  return (
    <View className=" py-3">
      {label && (
        <Text className="mb-2 font-normal text-xs  font-[Inter] ">{label}</Text>
      )}
      <View style={[styles.wrapper, style]}>
        {isLoadingItem ? (
          <Text className="font-normal text-[10px] font-[Inter] text-center">
            Loading...
          </Text>
        ) : isErrorItem ? (
          <Text className="font-normal text-[10px] font-[Inter] text-center">
            Something went wrong{" "}
            <Text
              className="font-normal text-[10px] font-[Inter] text-green-400"
              onPress={handleRemoveImage}
            >
              Try again
            </Text>
          </Text>
        ) : (
          <>
            {itemUriName ? (
              <View className=" flex-row items-center">
                <Text className="font-normal text-[10px] font-[Inter]  text-center mx-8">
                  {/* {truncate(itemUriName, 40)} */}
                  {itemUriName}
                </Text>
                <TouchableOpacity
                  onPress={handleRemoveImage}
                  className="bg-red-100 w-10 h-10 items-center justify-center rounded-full"
                >
                  <MaterialIcons name="delete-outline" size={20} color="red" />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity onPress={onDocumentUpload}>
                <View style={style2} className="">
                  {icon}
                  <Text className="font-normal text-[10px] font-[Inter]  text-center">
                    {message}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 100,
    borderRadius: 5,
    borderStyle: "dashed",
  },
});

export default CustomImagePicker;

