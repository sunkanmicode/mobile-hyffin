import { View, Text, Alert } from 'react-native'
import React from 'react'
import {
  SelectList,
  MultipleSelectList,
} from "react-native-dropdown-select-list";

type DropDownProp = {
  data: object[];
  placeholder?: string;
  label?: string;
  setSelected: (val: string) => void;
};

const CustomDropdown = ({
  data,
  setSelected,
  placeholder,
  label,
}: DropDownProp) => {
  return (
    <View className='py-2'>
      {label && (
        <Text className="mb-2 font-normal text-xs  font-[Inter] ">
          {label}
        </Text>
      )}
      {!data ? (
        <Text>Loading....</Text>
      ) : (
        <SelectList
          setSelected={(val: string) => setSelected(val)}
          // save="value"
          data={data}
          placeholder={placeholder}
          boxStyles={{ borderColor: "#E5E5E7", backgroundColor:"#F8F9FB", height: 56, alignItems:"center", }}
        />
      )}
    </View>
  );
};

export default CustomDropdown