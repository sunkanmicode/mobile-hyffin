import { View, Text, ScrollView } from "react-native";
import React from "react";
import CustomInput from "../../../custom_comp/CustomInput";
import { CustomButton } from "../../../custom_comp/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { useRegisterMutation } from "../../../api_services/authServices/mutations";
import Spinner from "react-native-loading-spinner-overlay";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LETTERS_ONLY = /^[a-zA-Z\s]+$/;

const RegisterScreen = () => {
  const navigation = useNavigation()
  const { control, handleSubmit, formState, watch } = useForm();


  const onSubmit =(data: any)=>{
    console.log(data)
    registerAuthUser.mutate(data)
  }

  const registerAuthUser = useRegisterMutation(navigation);
  console.log(registerAuthUser?.isPending, "registerAuthUser");
  return (
    <>
      <Spinner
        visible={registerAuthUser.isPending}
        // textContent={"Loading..."}
        // textStyle={styles.spinnerTextStyle}
      />

      <View className=" flex-1 bg-white p-5">
        <View className="py-5">
          <Text className=" self-center font-bold text-lg ">Sign up</Text>
          <Text className=" self-center font-normal text-xs ">
            Welcome to Hyffin Home
          </Text>
        </View>
        <ScrollView className="flex-1 my-10">
          <Controller
            control={control}
            name="displayName"
            rules={{
              required: "Name is required",
              pattern: {
                value: LETTERS_ONLY,
                message: "Only letters are allowed",
              },
            }}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <CustomInput
                primary
                label="Name"
                placeholder="Enter your name"
                value={value}
                onChangeText={onChange}
                error={error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="phoneNumber"
            rules={{
              required: "Phone Number is required",
              minLength: {
                value: 11,
                message: "Phone Number must be 11 digits",
              },
              maxLength: {
                value: 11,
                message: "Phone Number must not exceed 11 digits",
              },
            }}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <CustomInput
                primary
                label="Phone Number"
                keyboardType="numeric"
                placeholder="Enter your Phone Number"
                value={value}
                onChangeText={onChange}
                error={error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            rules={{
              required: "email is required",
              pattern: {
                value: EMAIL_REGEX,
                message: "Email is invalid",
              },
            }}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <CustomInput
                primary
                label="Email"
                placeholder="Enter your email"
                value={value}
                onChangeText={onChange}
                error={error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{
              required: "Password is required",
            }}
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error },
            }) => (
              <CustomInput
                primary
                label="Password"
                placeholder="Enter your password"
                value={value}
                onChangeText={onChange}
                error={error?.message}
              />
            )}
          />

          <CustomButton
            primary
            title="Register"
            onPress={handleSubmit(onSubmit)}
          />
          <View className=" self-center my-10">
            <Text>
              Have an Account?{" "}
              <Text
                className=" font-bold"
                onPress={() => {
                  navigation.navigate("LoginScreen");
                }}
              >
                Login
              </Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default RegisterScreen;
