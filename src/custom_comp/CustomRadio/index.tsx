import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const CustomRadio = ({ options, checkedValue, onChange, style }: any) => {
  return (
    <View className="w-full" style={style}>
      {options.map((option: any) => {
        let active = checkedValue == option.value;

        return (
          <TouchableOpacity
            key={option.value}
            style={active ? [styles.radio, styles.activeRadio] : styles.radio}
            onPress={() => {
              onChange(option.value);
            }}
          >
            <MaterialIcons
              name={active ? "radio-button-checked" : "radio-button-unchecked"}
              size={15}
              color={active ? "#06b6d4" : "#64748b"}
            />
            <Text style={active ? [styles.text, styles.activeText] : styles.text}>
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  radio: {
    // height: 60,
    // width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    // backgroundColor: "#f3f4f6",
    // paddingHorizontal: 15,
    borderRadius: 15,
  },
  activeRadio: {
    backgroundColor: "#06b6d4" + "11",
  },
  text: {
    fontSize: 12,
    marginLeft: 15,
    color: "#6b7280",
  },
  activeText: {
    color: "#374151",
  },
});

export default CustomRadio;
